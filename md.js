import FileOps from './modules/fileops'
import SetUp from './modules/setuproutine'
import Utils from './modules/utils'

let functionObj = {}
let iObj = {}
let classObj = {}
let enumObj = {}
let region = ''
let mdout = []
let skipFlag = false
let moduleName = ''

let moduleT = []

let WRITE_BACK = ['#', '|', '*', '_']
let TAKE_ACTION = ['%']
let TAKE_REPEAT_ACTION = ['>']
let MARK_REGION = ['<']
let IGNORE = ['/']


function dclone(o){
	if (o) {
		//Deep copy
		return JSON.parse(JSON.stringify(o))
	}
	return o
}

function file_reset() {
	functionObj = {}
	iObj = {}
	classObj = {}
	enumObj = {}
	region = ''
	mdout = []
	skipFlag = false
}

function set_region(tline = '') {

	if (tline.includes('</')) {
		region = 'none'
	}
	else {
		region = Utils.genericInside(tline).replace('/','')
	}
	console.log(region);
	return
}

function doSub(tline = '') {
	if (tline.includes('%module%')) {
		console.log(`replace with ${moduleName}`);
		tline = tline.replace('%module%', moduleName)
	}
	return tline
}

function addClasses(tline='', type='') {
	var o = {}
	switch (type) {
		case 'class':
			o = classObj
			break;
		case 'interface':
			o = iObj
			break;
		case 'function':
			o = functionObj
			break;
		default:
	}
	Object.keys(o).forEach((e) => {
			var mline = dclone(tline).substr(1)
			mline = mline.replace('%name%', e)
			mline = mline.replace('%link%', `${e.toLowerCase()}.md`)
			//Get first sentence
			var descr = o[e]['descr']
			if (descr) {
				descr = descr.split('.')[0].replace(/\n/g, ' ')
			}
			console.log(descr);
			mline = mline.replace('%description%', descr)
			mdout.push(mline)
	})
}

function genModuleView(){
	console.log(`Processing module file creation for ${moduleName}`);

		moduleT.forEach((tline) => {
			tline = tline.trim()
			var key = tline[0] || '*'
			var key2 = tline.substring(0,2)

			if (MARK_REGION.includes(key)) {
				set_region(tline)
				return
			}

			if (skipFlag) { //why do we need this?
				return
			}

			var hasVar = tline.includes('%') ? true  : false

			if (WRITE_BACK.includes(key)) {

				 if (hasVar) tline = doSub(tline)
				 mdout.push(tline)
				 console.log('write back' + tline);
			}
		  else if (TAKE_ACTION.includes(key)) {
			 	 console.log('take action');
		  }
			else if (TAKE_REPEAT_ACTION.includes(key)) {
				switch (region) {
					case 'class':
					case 'function':
					case 'interface':
						addClasses(tline, region)
						break;
					case 'enumeration':
						//addEnums(tline)
						break;

					default:

				}
			}
		})
		console.log(`*** Writing Module file for ${moduleName}`)
		FileOps.writeFile(mdout, `./markdown/${moduleName}_module.md`)
}

console.log('** Starting Program...')
SetUp.cleanupOutput('./markdown')

moduleT = FileOps.loadFile('./config/module.md')

let inputFiles = FileOps.walkFiles('./input', '.ts')
inputFiles.forEach((e) => {
	console.log(`\n*> Processing master: ${e}`);
	let files = FileOps.walkFiles('./json', e)
	loadModule(files)

	moduleName = e.split('.')[0]
	genModuleView()

})

function loadModule(files=[]) {

	files.forEach((e) => {
		console.log(`** Processing ${e}`)
		if (e.includes('_class.json')) {
			classObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
			console.log(`*** Read Class JSON file, ${Object.keys(classObj)}`)
		}
		else if (e.includes('_interface.json')) {
			iObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
			console.log(`*** Read Interface JSON file, ${Object.keys(iObj)}`)
		}
		else if (e.includes('_enum.json')) {
			enumObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
			console.log(`*** Read Enum JSON file, ${Object.keys(enumObj)}`)
		}
		else if (e.includes('_function.json')) {
			functionObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
			console.log(`*** Read Function JSON file, ${Object.keys(functionObj)}`)
		}
		else {
			throw "Unrecognized file in inut JSON folder. Should be *_{class|enum|function|interface).json"
		}

	})
	//
	//  console.log(`interface = ${nInterface}, class = ${nClass}, function = ${nFunction}, enum = ${nEnum}`);
  // 	file_reset()
}
