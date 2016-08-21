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

// GLOBAL - TYPES OF OBJECT
let enumObj = {}
let enumKey = ''
let classObj = {}
let functionObj = {}
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
		mode = ''
		enumObj = {}
		enumKey = ''
		classObj = {}
		functionObj = {}
		methodObj = {}
		paramObj = {}
		propObj = {}
		generalDesc = ''
		commentObject = {
			'param' : []
		}
}

function block_end_reset() {

		classObj = {}
		functionObj = {}
		methodObj = {}
		paramObj = {}
		propObj = {}
		generalDesc = ''
		commentObject = {
			'param' : []
		}
}

function block_begin_reset() {
		generalDesc = ''
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
					console.log('HO HO HO HO HO HO ');
					//4th word has param name and 5th has the description. Those are the only important ones to consider
					//* @param  {string}             targetProperty [description]
					//Split and Remove entries that have empty strings
					// (since we are compacting the line, we don't have to do ``.map((s) => s.trim()).filter((e) => e)` at the end of the split)
				  var arr = line.split(' ')
					if (arr[3] !== undefined) {
						commentObject['param'].push([arr[3]], arr.slice(4).join(' '))
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
		if (index > 1550) {
			console.log(`~~ ${JSON.stringify(commentObject)}`);
		}
	}
	else if (line.includes(CLASSDEF)) {
		nClass++
		console.log('class start ' + ' ' + nClass + ' ' + line);

		mode = 'CLASS'
		return
	}
	else if (line.includes(ENUM)) {
		console.log('Enum start ' + line);
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
		console.log('function start ' + line);
		var name = line.split('(')[0].split(' ').pop()
		functionObj[name] = {} // JSON.parse(JSON.stringify(Objects.method))
		functionObj[name]['signature'] = line.split('function ')[1]
		functionObj[name]['returnType'] = line.split(': ').pop() //func return type`
		var p = BETWEEN_BRACKETS.exec(line)[1] //anything between brackets?
		if (p !== null) {
			functionObj[name]['params'] = BETWEEN_BRACKETS.exec(line)[1].split(', ') //between brackets list
		}
		else {
			functionObj[name]['params'] = []
		}

		nFunction++
		mode = 'FUNCTION'
		return
	}
	else {
		switch (mode) {
			case 'CLASS':

				break;
			case 'ENUM':

				var v = line.replace(',','').split('=').map((s) => s.trim())
				v.push(generalDesc)
				console.log(`Writing ENUM entry to, ${enumKey} : ${v}`)
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

  console.log(`class = ${nClass}, function = ${nFunction}, enum = ${nEnum}`);
	file_reset()
}
