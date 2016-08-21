//import {loadFile, writeFile}  from './modules/fileops'
import FileOps from './modules/fileops'
import SetUp from './modules/setuproutine'
import Objects from './modules/objects'
import Utils from './modules/utils'

const SKIP = ['///', '']
const C_START = '/**'
const COMMENT = '*'
const C_END = '*/'
const BLOCK_END = '}'
const IGNORES = ['@todo:']
const CLASSDEF = 'declare class'
const INTERFACEDEF = 'interface'
const ENUM = 'enum'
const FUNCTION = 'function '
const NEWLINE = '\n  '
const ATSYMBOL = '@'
const BETWEEN_BRACKETS = /\(([^)]+)\)/;

let cBuffer = {}
let ignoreMode = false
let mode = ''
let cmode = false

let nClass = 0
let nFunction = 0
let nEnum = 0
let nInterface = 0

// GLOBAL - TYPES OF OBJECT
let enumObj = {}
let enumKey = ''
let classObj = {}
let interfaceObj = {}
let functionObj = {
	'items' : []
}
let methodObj = {}
let paramObj = {}
let propObj = {}
let generalDesc = ''
let commentObject = {
	'param' : []
}

function file_reset() {
		nClass = 0
		nFunction = 0
		nEnum = 0
		nInterface = 0
		mode = ''
		enumObj = {}
		enumKey = ''
		classObj = {}
		functionObj = {
			'items' : []
		}
		interfaceObj = {
			'items' : []
		}
		methodObj = {}
		paramObj = {}
		propObj = {}
		generalDesc = ''
		commentObject = {
			'param' : []
		}
		comment_reset()
}

function block_end_reset() {

		classObj = {}
		methodObj = {}
		paramObj = {}
		propObj = {}
		generalDesc = ''
		commentObject = {
			'param' : []
		}
		comment_reset()
}

function block_begin_reset() {
		generalDesc = ''
}

function comment_reset() {
	let commentObject = {
		'param' : []
	}
}

/**
 * Process the lines in sequence and control workflow.
 *
 * @param  {string} element [A line from the input file array]
 * @param  {integer} index   [Position of the line in the array]
 * @return {true}         [returns true]
 */
function processLines(element, index) {

  let line = element.replace(/\s+/g,' ').trim().replace(';','')

  let firstWord = line.split(' ',1)[0]
  let secondWord = line.split(' ',2)[1]

  if (SKIP.includes(firstWord)) {
    return;
	}
  // else if (IGNORES.includes(secondWord)) {
  //   ignoreMode = true
  //   return
  // }
  else if (firstWord === BLOCK_END) {
		mode = ''
		//Write out the file CLASS file
		//
		block_end_reset()
		return
  }
	else if (firstWord === C_START) {
		cmode = true
		generalDesc = ''
		comment_reset()
		return
	}
	else if (firstWord === COMMENT) {
		if (secondWord === undefined) {
			return
		}
		else if (secondWord !== undefined && secondWord.startsWith(ATSYMBOL)) {
			// PROCESS @param, etc.
			//
			switch (secondWord) {
				case '@param':
					//4th word has param name and 5th has the description. Those are the only important ones to consider
					//* @param  {string}             targetProperty [description]
					//Split and Remove entries that have empty strings
					// (since we are compacting the line, we don't have to do ``.map((s) => s.trim()).filter((e) => e)` at the end of the split)
				  var arr = line.split(' ')
					if (arr[3] !== undefined) {
						commentObject['param'].push([arr[3], arr.slice(4).join(' ')])
					}
					break;
				default:

			}
		}
		else {
			if (generalDesc.length > 0) {
					generalDesc = generalDesc + NEWLINE + line.substr(2)
			}
			else {
					generalDesc = line.substr(2)
			}
		}
		return
	}
	else if (firstWord === C_END) {
		cmode = false
	}
	else if (line.includes(INTERFACEDEF)) {
		nInterface++
		mode = 'INTERFACE'
		return
	}
	else if (line.includes(CLASSDEF)) {
		nClass++
		mode = 'CLASS'
		return
	}
	else if (line.includes(ENUM)) {
		nEnum++
		mode = 'ENUM'
		enumObj[secondWord] = {}
		enumObj[secondWord]['descr'] = generalDesc
		enumObj[secondWord]['values'] = []
		enumKey = secondWord
		block_begin_reset()
		return
	}
	else if (line.includes(FUNCTION)) {
		var name = line.split('(')[0].split(' ').pop()
		// Build a function object
		var f = {}
		f[name] = {} // JSON.parse(JSON.stringify(Objects.method))
		f[name]['signature'] = line.split('function ')[1]
		f[name]['returnType'] = line.split(': ').pop()
		var p = BETWEEN_BRACKETS.exec(line)[1]
		//f[name]['params'] = []
		f[name]['params'] = Utils.buildParamList(p, commentObject['param'])
		// Break into a util.function
		// f[name]['params'] = build_param_list(p, commentObject['param'])
		//
		// if (p !== null) { //anything between brackets?
		// 	 var parray = p.split(', ') //between brackets list
		// 	 // Build a parameter object.
		// 	 parray.forEach((e) => {
		// 		 var ta = e.split(':').map((_) => _.trim())
		// 		 var fp = {}
		// 		 fp['name'] = ta[0]
		// 		 fp['dataType'] = ta[1]
		// 		 fp['descr'] = ''
		// 		 // For each element, determine if there is a @param description. If so, add description element to function object
		// 		 var descr = commentObject['param']
		// 		 if (descr.length > 0) {
		// 			 descr.forEach((d) => {
		// 				 if (d[0] === ta[0]) {
		// 				 		fp['descr'] = d[1]
		// 				 }
		// 			 })
		// 		 }
		// 		 f[name]['params'].push(fp)
		// 	 })
		// }
		// end-break
		
		functionObj['items'].push(f)
		nFunction++
		mode = 'FUNCTION'
		comment_reset()
		return
	}
	else {
		switch (mode) {
			case 'CLASS':

				break;
			case 'ENUM':

				var v = line.replace(',','').split('=').map((s) => s.trim())
				v.push(generalDesc)
				enumObj[enumKey]['values'].push(v)
				break;
			case 'FUNCTION':

				break;
			default:

		}
  }
}

/**
 * STARTING: Load input files and process each file and each line within.
 */
console.log('** Starting Program...')
SetUp.cleanupOutput('./markdown')
SetUp.cleanupOutput('./json')

// Temp
			// let c = JSON.parse(JSON.stringify(Objects.classObj))
			// c.name = "hello"
			// c.descr = "hello desc"
			// c.type = "type"
			// console.log(c);
			// FileOps.writeObject(c, `./markdown/one.json`)
// end Temp

let files = FileOps.walkFiles('./input')
files.forEach(processFile)

function processFile(fileName) {
	console.log(`** Processing ${fileName}`)

  let lines = FileOps.loadFile(`./input/${fileName}`)
	console.log(`*** Read input file, ${lines.length} lines`)
  lines.forEach(processLines);
	console.log(`*** Writing ENUM file ${enumObj}`)
  FileOps.writeObject(enumObj, `./json/${fileName}_enum.json`)
	console.log(`*** Writing FUNCTION file ${enumObj}`)
  FileOps.writeObject(functionObj, `./json/${fileName}_function.json`)

  console.log(`interface = ${nInterface}, class = ${nClass}, function = ${nFunction}, enum = ${nEnum}`);
	file_reset()
}
