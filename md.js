import FileOps from './modules/fileops'
import SetUp from './modules/setuproutine'
import Utils from './modules/utils'

let functionObj = {}
let iObj = {}
let classObj = {}
let enumObj = {}
let region = ''
let mdout = []
let mem_mdout = []
let skipFlag = false
let moduleName = ''
let className = ''
let interfaceName = ''

let moduleT = []
let classInterfaceT = []

let WRITE_BACK = ['#', '|', '*', '_', '%']

let TAKE_REPEAT_ACTION = ['>']
let NEW_REGION = ['<']
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
	mem_mdout = []
	skipFlag = false
}
function getLinkForType(type='') {
	if ((Object.keys(iObj).includes(type)) || (Object.keys(classObj).includes(type))) {
		console.log('match input: ' + type)

		return `[${type}](${type}.md)`
	}
	else {
		console.log('no match input: ' + type)

		return type
	}
}
function set_region(tline = '', obj={}) {
	skipFlag = false
	if (tline.includes('</')) {
		region = 'none'
	}
	else {
		region = Utils.genericInside(tline).replace('/','')
		switch (region) {
			case 'class':
				if (Object.keys(classObj).length === 0) {
					skipFlag = true
				}
				break;
			case 'property':
				if (Object.keys(obj[className]['properties']).length === 0) {
					skipFlag = true
				}
				break;
			case 'method':
				console.log(JSON.stringify(obj[className]['methods']))
				if (Object.keys(obj[className]['methods']).length === 0) {
					skipFlag = true
				}
				break;
			case 'interface':
				if (Object.keys(iObj).length === 0) {
					skipFlag = true
				}
				break;
			case 'function':
				if (Object.keys(functionObj).length === 0) {
					skipFlag = true
				}
				break;
			case 'enumeration':
				if (Object.keys(enumObj).length === 0) {
					skipFlag = true
				}
				break;
			default:
		}
	}

	return
}

function doSub(tline = '') {
	if (tline.includes('%module%'))	tline = tline.replace('%module%', moduleName)
	if (tline.includes('%resourcename%'))	tline = tline.replace('%resourcename%', className)

	return tline
}


function doSubClass(tline = '') {
	if (tline.includes('%resourcedescription%'))	tline = tline.replace('%resourcedescription%', classObj[className]['descr'])
	if (tline.includes('%resourcename%'))	tline = tline.replace('%resourcename%', className)

	return tline
}

var dFunction = {

	classGenIndividual: function(e='') {

		className = e
		genClassView()
	},

	interfaceGenIndividual: function (e='') {

	},

	functionGenIndividual: function (e='') {

	},

	enumerationGenIndividual: function (e='') {

	}
}

function addRegions(tline='', type='') {
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
		case 'enumeration':
			o = enumObj
			break;
		default:
	}

	Object.keys(o).forEach((e) => {
			var mline = dclone(tline).substr(1)
			mline = mline.replace('%name%', e)
			mline = mline.replace('%link%', `${e}`)
			//Get first sentence
			var descr = o[e]['descr']
			if (descr) {
				descr = descr.split('.')[0].replace(/\n/g, ' ')
			}
			mline = mline.replace('%description%', descr)
			// For return function add Markdown HyperLink
			if (type === 'function') {
					var returnLink = getLinkForType(o[e]['returnType'])
					mline = mline.replace('%returns%', returnLink)
			}
			mdout.push(mline)
			// Dynamically call the function to generate the individual md files

			dFunction[`${type}GenIndividual`](e)

	})
}


function addMembers(tline='', type='', name='') {
	var o = {}
	switch (type) {
		case 'property':
			o = classObj[className]['properties']
			break;
		case 'method':
			o = classObj[className]['methods']
			break;
		case 'function':
			o = o = classObj[className]['functions']
			break;

		default:
	}

	Object.keys(o).forEach((e) => {

			var mline = dclone(tline).substr(1)
			mline = mline.replace('%name%', e)
			mline = mline.replace('%access%', `${o[e]['accessModifier']}`)
			if (type === 'method') {
				console.log('calling link for method: ' + o[e]['returnType'] + ' ' + e);
				mline = mline.replace('%type%', `${getLinkForType(o[e]['returnType'])}`)
			}
			else {
				console.log('calling link for property: ' + o[e]['dataType'] + ' ' + e);

				mline = mline.replace('%type%', `${getLinkForType(o[e]['dataType'])}`)
			}

			//Get first sentence
			var descr = o[e]['descr']
			if (descr) {
				descr = descr.split('.')[0].replace(/\n/g, ' ')
			}
			mline = mline.replace('%description%', descr)
			// For return function add Markdown HyperLink
			// if (type === 'function') {
			// 		var returnLink = getLinkForType(o[e]['returnType'])
			// 		mline = mline.replace('%returns%', returnLink)
			// }
			mem_mdout.push(mline)
	})
}

function genClassView(){
	mem_mdout = []
	var o = classObj[className]

		classInterfaceT.forEach((tline) => {
			tline = tline.trim()
			var key = tline[0] || '*'
			var key2 = tline.substring(0,2)

			if (NEW_REGION.includes(key)) {
				set_region(tline, classObj)
				return
			}

			if (skipFlag) {
				return
			}

			var hasVar = tline.includes('%') ? true  : false

			if (WRITE_BACK.includes(key)) {

				 if (hasVar) tline = doSubClass(tline)
				 mem_mdout.push(tline)
			}

			else if (TAKE_REPEAT_ACTION.includes(key)) {
				switch (region) {
					case 'property':
						addMembers(tline, region, className)
						break
					case 'method':
						addMembers(tline, region, className)
						break
						break;
					default:

				}
			}
		})
		console.log(`*** Writing Class file for ${className}`)
		FileOps.writeFile(mem_mdout, `./markdown/${className}.md`)
}

function genModuleView(){
	console.log(`Processing module file creation for ${moduleName}`);

		moduleT.forEach((tline) => {
			tline = tline.trim()
			var key = tline[0] || '*'
			var key2 = tline.substring(0,2)

			if (NEW_REGION.includes(key)) {
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
			}

			else if (TAKE_REPEAT_ACTION.includes(key)) {
				switch (region) {
					case 'class':
					case 'function':
					case 'interface':
					case 'enumeration':
						addRegions(tline, region)
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

try {
	moduleT = FileOps.loadFile('./config/module.md')
	classInterfaceT = FileOps.loadFile('./config/class.md')
} catch (e) {
	console.log(`Error Loading config files.`)
	throw e
} finally {

}

let inputFiles = FileOps.walkFiles('./input', '.ts')
inputFiles.forEach((e) => {
	console.log(`\n*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Processing master: ${e}`);
	let files = FileOps.walkFiles('./json', e)
	loadModule(files)

	moduleName = e.split('.')[0]
	genModuleView()
	file_reset()

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
