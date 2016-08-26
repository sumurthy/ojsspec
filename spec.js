//import {loadFile, writeFile}  from './modules/fileops'
import FileOps from './modules/fileops'
import SetUp from './modules/setuproutine'
import Objects from './modules/objects'
import Utils from './modules/utils'

const SKIP = ['///', '']
const C_START = '/**'
const COMMENT = '*'
const C_END = '*/'
const BLOCK_BEGIN = '{'
const BLOCK_END = '}'
const IGNORES = ['@todo:']
const CLASSDEF = 'declare class'
const INTERFACEDEF = 'interface'
const ENUM = 'enum'
const FUNCTION = 'function '
const NEWLINE = '\n  '
const ATSYMBOL = '@'

let ignore_lines = []
let cBuffer = {}
let ignoreMode = false
let mode = ''
let cmode = false
let iBlock = 0

let nClass = 0
let nFunction = 0
let nEnum = 0
let nInterface = 0

// GLOBAL - TYPES OF OBJECT
let enumObj = {}
let enumKey = ''
let classObj = {}
let iObj = {}
let interfaceName = ''
let className = ''
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
		nInterface = 0
		mode = ''
		enumObj = {}
		enumKey = ''
		classObj = {}
		functionObj = {}
		iObj = {}
		interfaceName = ''
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
		methodObj = {}
		paramObj = {}
		propObj = {}
		generalDesc = ''
		commentObject = {
			'param' : []
		}
		interfaceName = ''
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
function processLines(element = '', index = 0, lines = []) {

	if (ignore_lines.includes(index)) {
		return
	}

  let line = element.replace(/\s+/g,' ').trim().replace(';','')

  let firstWord = line.split(' ',1)[0]
  let secondWord = line.split(' ',2)[1]
	let lastWord = line.split(':').pop()
	if (line.includes(BLOCK_BEGIN)) {
		iBlock++;
	}
	if (line.includes(BLOCK_END)) {
		iBlock--;
	}

  if (SKIP.includes(firstWord)) {
    return
	}
  // else if (IGNORES.includes(secondWord)) {
  //   ignoreMode = true
  //   return
  // }
  else if (firstWord === BLOCK_END && iBlock == 0) {
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
		else if (secondWord.startsWith(ATSYMBOL)) {
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
						var o = Utils.readCommentAhead(lines, arr.slice(4).join(' '), index )
						ignore_lines = o['skip']
						commentObject['param'].push([arr[3], o['descr']])
					}
					break;
				case '@return':
					var arr = line.split(' ')
					if (arr[3] !== undefined) {
							var o = Utils.readCommentAhead(lines, arr.slice(3).join(' '), index )
							ignore_lines = o['skip']
							commentObject['returnDescr'] = o['descr']
					}
					break
				default:
			}
		}
		else {
			//
			// if (generalDesc.length > 0) {
			// 		generalDesc = generalDesc + NEWLINE + line.substr(2)
			// }
			// else {
			// 		generalDesc = line.substr(2)
			// }
			var o = Utils.readCommentAhead(lines, line.substr(2), index )
			ignore_lines = o['skip']
			generalDesc = o['descr']
		}
		return
	}
	else if (firstWord === C_END) {
		cmode = false
	}
	else if (line.includes(INTERFACEDEF)) {
		nInterface++
		mode = 'INTERFACE'
		interfaceName = secondWord
		var extendsName = null
		if (line.includes('extends')) {
			extendsName = line.split('extends ')[1].split(BLOCK_BEGIN)[0].trim()
		}
		// Build a interface object
		iObj[interfaceName] = {} // JSON.parse(JSON.stringify(Objects.method))
		iObj[interfaceName]['extendsName'] = extendsName
		iObj[interfaceName]['descr'] = generalDesc
		iObj[interfaceName]['properties'] = {}
		iObj[interfaceName]['functions'] = {}
		iObj[interfaceName]['objects'] = []
		iObj[interfaceName]['methods'] = []
		comment_reset()
		return
	}
	else if (line.includes(CLASSDEF)) {
		nClass++
		mode = 'CLASS'
		className = Utils.trimGenerics(line.split(' ')[2])
		var implementsName = null
		if (line.includes('implements')) {
			implementsName = line.split('implements ')[1].split(BLOCK_BEGIN)[0].trim()
		}

		// Build a interface object
		classObj[className] = {} // JSON.parse(JSON.stringify(Objects.method))
		classObj[className]['implementsName'] = implementsName
		classObj[className]['genericType'] = Utils.genericInside(line.split(' ')[2])
		classObj[className]['descr'] = generalDesc
		classObj[className]['properties'] = {}
		classObj[className]['methods'] = {}
		comment_reset()
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
		functionObj[name] = {} // JSON.parse(JSON.stringify(Objects.method))
		functionObj[name]['descr'] = generalDesc
		functionObj[name]['signature'] = line.split('function ')[1]
		functionObj[name]['returnType'] = line.split(': ').pop()
		if (commentObject['returnDescr'] === undefined) {
			functionObj[name]['returnDescr'] = null
		}
		else {
			functionObj[name]['returnDescr'] = commentObject['returnDescr']
		}
		functionObj[name]['params'] = Utils.buildParamList(line, commentObject['param'])
		nFunction++
		mode = 'FUNCTION'
		comment_reset()
		return
	}

	// The Big Else....

	else {
		switch (mode) {
			case 'INTERFACE':
				// iObj['properties'] = []
				// iObj['objects'] = []
				// iObj['methods'] = []

				if (line.includes(') =>')) {
					//var f = Utils.processFunction(line, generalDesc, commentObject)
					var f = {}
					f[firstWord] = {}

					f[firstWord]['descr'] = generalDesc
					f[firstWord]['isOptional'] = (secondWord.includes('?')) ? true : false
					f[firstWord]['returnType'] = line.split('=> ').pop()
					f[firstWord]['returnDescr'] = (commentObject['returnDescr'] === undefined) ?
						null : commentObject['returnDescr']
					f[firstWord]['params'] = Utils.buildParamList(line, commentObject['param'])
					iObj[interfaceName]['functions'][firstWord] = f
				}
				else if (line.includes(')') && line.includes('(')) { // has brackets
					var m = {}
					var name = Utils.getName(firstWord)
					m[name] = {}

					m[name]['descr'] = generalDesc
					m[name]['genericType'] = Utils.genericInside(line.split('(')[0])
					m[name]['returnType'] = lastWord
					m[name]['returnDescr'] = (commentObject['returnDescr'] === undefined) ?
						null : commentObject['returnDescr']
					m[name]['params'] = Utils.buildParamList(line, commentObject['param'])
					iObj[interfaceName]['methods'].push(m)
				}
				else if (line.includes(BLOCK_BEGIN)) {
					// Handle object
					var o = Utils.readObjectAhead(lines, index)
					ignore_lines = o['skip']
					iBlock--
				}
				else {
					var p = {}
					var name = line.split(':')[0]
					p[name] = {}
					p[name]['descr'] = generalDesc
					console.log(`${line}, ${index}`);
					p[name]['isOptional'] = (secondWord.includes('?')) ? true : false
					p[name]['type'] = lastWord.replace('[]', '')
					p[name]['isCollection'] = (secondWord.includes('[]')) ? true : false
					iObj[interfaceName]['properties'][firstWord] = p
				}

				break;
			case 'CLASS':
				if (line.includes(')') && line.includes('(')) { // has brackets

					if (line.includes('constructor')) {
							name = 'constructor'
					}
					else {
						name = secondWord.split('(')[0].trim()
					}
					var m = Utils.processMethod(line, generalDesc, commentObject, className, name, true)

					classObj[className]['methods'][name] = m
				}
				else if (line.includes(BLOCK_BEGIN)) {
					// Handle object
					var o = Utils.readObjectAhead(lines, index)
					ignore_lines = o['skip']
					iBlock--
				}
				else {

					var name  = secondWord.replace(':', '')
					var p = Utils.processProperty(line, generalDesc)
					classObj[className]['properties'][name] = p
				}
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
SetUp.cleanupOutput('./json')

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
	console.log(`*** Writing INTERFACE file ${enumObj}`)
  FileOps.writeObject(iObj, `./json/${fileName}_interface.json`)
	console.log(`*** Writing CLASS file ${enumObj}`)
  FileOps.writeObject(classObj, `./json/${fileName}_class.json`)

  console.log(`interface = ${nInterface}, class = ${nClass}, function = ${nFunction}, enum = ${nEnum}`);
	file_reset()
}
