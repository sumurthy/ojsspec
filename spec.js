//import {loadFile, writeFile}  from './modules/fileops'
import FileOps from './modules/fileops'
import SetUp from './modules/setuproutine'
import Objects from './modules/objects'
import Utils from './modules/utils'

const SKIP = ['///', '//', '']
const C_START = '/**'
const COMMENT = '*'
const C_END = '*/'
const COMMENT_ALL = ['*', '//', '/**']
const BLOCK_BEGIN = '{'
const BLOCK_END = '}'
const IGNORES = ['@todo:']
const CLASSDEF = 'declare class'
const TYPEDEF = 'declare type'
const VARIABLEDEF = 'declare var'
const INTERFACEDEF = 'interface'
const MODULEDEF = 'declare module'
const ENUM = 'enum '
const FUNCTION = 'function '
const NEWLINE = '\n  '
const ATSYMBOL = '@'
const OBJECT_INSIDE  = /{(.*?)}/
const IMPLEMENTS = 'implements '
const EXTENDS = 'extends '

let anchor = ''
let ignore_lines = []
let ignore_upto = -1
let cBuffer = {}
let ignoreMode = false
let paramEncountered = false
let mode = ''
let cmode = false
let readonlyProperty = false
let saveFileName = ''
let nClass = 0
let nFunction = 0
let nEnum = 0
let nVariable = 0
let nType = 0
let nModule = 0
let nInterface = 0
let isStatic = false
let hasAssignment = false
let assignValue = null
let firstWord = ''
let secondWord = ''
let thirdWord = ''
let lastWord = ''
// GLOBAL - TYPES OF OBJECT
//
let allTypes = {}
let allVarsTypes = {}
let enumObj = {}
let enumKey = ''
let className = ''
let classObj = {}
let iObj = {}
let interfaceName = ''
let moduleName = ''
let functionObj = {}
let moduleObj = {}
let methodObj = {}
let propObj = {}
let typeObj = {}
let variableObj = {}
let generalDesc = ''
let commentParent = {
    'param': []
}
let commentObject = JSON.parse(JSON.stringify(commentParent))
function file_reset() {
    nClass = 0
    nFunction = 0
    nEnum = 0
    nInterface = 0
    ignore_upto = 0
    nModule = 0
    nVariable = 0
    nType = 0
    mode = ''
    enumObj = {}
    enumKey = ''
    classObj = {}
    moduleObj = {}
    functionObj = {}
    iObj = {}
    propObj = {}
    typeObj = {}
    variableObj = {}
    interfaceName = ''
    methodObj = {}
    propObj = {}
    generalDesc = ''
    //commentObject = JSON.parse(JSON.stringify(commentParent))
    commentObject['param'] = []
    commentObject['returnDescr'] = ''
    commentObject['generalDescr'] = ''
    comment_reset()
}

function block_end_reset() {
    methodObj = {}
    propObj = {}
    generalDesc = ''
    commentObject['param'] = []
    commentObject['returnDescr'] = ''
    commentObject['generalDescr'] = ''
    interfaceName = ''
    comment_reset()
}

function block_begin_reset() {
    generalDesc = ''
    paramEncountered = false
    readonlyProperty = false
}

function comment_reset() {
    block_begin_reset()
    commentObject['param'] = []
    commentObject['returnDescr'] = ''
}

// function expandAllTypes() {
//     Object.keys(allTypes).forEach((e) => {
//         if (e.includes('<')) {
//             allTypes['types'].push(Utils.trimGenerics(e))
//         }
//     })
//     allTypes['types'] = allTypes['types'].sort().filter((elem, i, arr) => arr.indexOf(elem) === i)
//     return
// }

function prepareLine(line='', commentLine = false) {

    isStatic = false
    hasAssignment = false
    assignValue = null

    line = line.replace(/\s+/g, ' ').trim()
    if (!commentLine) {
        line = line.split('//')[0]
        line = line.replace(/,\s/g, ',').trim()
        line = line.replace(/;/g,'')
        if (line.includes(' static ')) {
          isStatic = true
          line = line.replace(' static ', ' ')
        }
        // If the line has assignment, cut and save that to another location.
        // Example: public eventAggregator: IEventAggregator = {} as any;
        // Here, {} as any part is stowed away.
        //
        if (line.includes(' = ') && line.includes(':')) {
          hasAssignment = true
          assignValue = line.split(' = ').pop()
          line = line.split(' = ').slice(0, -1).join('')
        }
    }
    // var c = line.lastIndexOf(';')
    // line = line.substr(c+1).trim()
    var o = Utils.splitToWords(line)
    firstWord = o['f']
    secondWord = o['s']
    thirdWord = o['t']
    lastWord = o['l']
    return line
}

function processComment(index = 0, lines = []) {

    for (var i = index; i < lines.length; i++) {
        if (ignore_upto >= i) continue
        ignore_upto = i
        let line = prepareLine(lines[i])
        line = line.replace(/\s+/g, ' ').trim()
        var o = Utils.splitToWords(line)
        firstWord = o['f']
        secondWord = o['s']
        if (firstWord === C_START) {
          cmode = true
          block_begin_reset()
          comment_reset()
          continue
        } else if (firstWord === C_END) {
            cmode = false
            break
        } else if (firstWord === COMMENT) {
            if (secondWord === undefined) {
                continue
            } else if (secondWord.startsWith(ATSYMBOL)) {
              // PROCESS @param, etc.
              paramEncountered = true
              switch (secondWord) {
                  case '@param':
                      //4th word has param name and 5th+ has the description. Those are the only important ones to consider
                      //* @param  {string}             targetProperty [description]
                      //Split and Remove entries that have empty strings
                      // (since we are compacting the line, we don't have to do ``.map((s) => s.trim()).filter((e) => e)` at the end of the split)
                      var arr = line.split(' ')
                      if (arr[2] !== undefined) {
                          var oa = Utils.readCommentAhead(lines, arr.slice(3).join(' '), i)
                          ignore_upto = oa['skip'].pop()
                          commentObject['param'].push([arr[2], oa['descr']])
                      }
                      break;
                  case '@returns':
                      var arr = line.split(' ')
                      if (arr[2] !== undefined) {
                          var oa = Utils.readCommentAhead(lines, arr.slice(2).join(' '), i)
                          ignore_upto = oa['skip'].pop()
                          commentObject['returnDescr'] = oa['descr']
                      }
                      break
                  case '@readonly':
                      readonlyProperty = true
                      break;

                  default:
              }
          } else {
              if (!paramEncountered) {
                  var oa = Utils.readCommentAhead(lines, line.substr(2), i)
                  ignore_upto = oa['skip'].pop()
                  generalDesc = oa['descr']
              }
          }
          continue
      }
  }
    return
}

function processEnum(index = 0, lines = []) {
    let o = {}
    o['descr'] = generalDesc
    o['values'] = []
    comment_reset()

    for (var i = (index + 1); i < lines.length; i++) {
        if (ignore_upto >= i) continue
        ignore_upto = i

        let line = prepareLine(lines[i])
        if (SKIP.includes(firstWord)) continue

        if (firstWord === BLOCK_END) {
            block_end_reset()
            return o
        } else if (firstWord === C_START) {
          ignore_upto--
          processComment(i, lines)
        } else {
            if (line.includes('=')) {
                var v = line.replace(',', '').split('=').map((s) => s.trim())
                v.push(generalDesc)
                o['values'].push(v)
            } else {
                var ea = line.split(',')
                ea.forEach((en) => {
                    var v = []
                    v[0] = en.replace(/"/g, '').replace(/,/,'').trim()
                    v[1] = ''
                    v[2] = generalDesc
                    if (v[0]) {
                        o['values'].push(v)
                    }
                })
            }
            comment_reset()
        }
    }
}

function processObject(objectName = '', index = 0, lines = [], isClass) {
    let o = Utils.createClassInterfaceObject(lines[index], generalDesc)
    comment_reset()
    for (var i = (index + 1); i < lines.length; i++) {
        if (ignore_upto >= i) continue
        ignore_upto = i
        let line = prepareLine(lines[i])
        if (SKIP.includes(firstWord)) continue

        if (firstWord === BLOCK_END) {
            block_end_reset()
            return o
        } else if (firstWord === C_START) {
            ignore_upto--
            processComment(i, lines)
            continue
        } else {
            var memberType = Utils.getMemberType(line, isClass)
            if (memberType === 'OBJECT') {
                // Handle object
                console.log(line);
                var oa = Utils.readObjectAhead(lines, i)
                ignore_upto = oa['skip'].pop()
                comment_reset()
                continue
            } else if (memberType === 'PROPERTY') {   //PROPERTY
                var p = {}
                var name = Utils.getPropName(line, false)
                var p = Utils.processProperty(name, line, generalDesc, assignValue, false, readonlyProperty)
                name = name.replace('?','')
                o['properties'][name] = p
                comment_reset()
                continue
            } else if (memberType === 'METHOD') {   //METHOD
                var name = Utils.getMethodName(line) || "ErrorErrorError-99999"
                var m = Utils.processMethod(line, generalDesc, commentObject, objectName, name, isStatic)
                if (name.split('-')[0] === 'constructor') {
                    o['constructor'] = m
                }
                else {
                    o['methods'][name] = m
                }
                var linkvalue = ('../' + anchor + '/' + objectName + '.md#' + name.split('-')[0]).toLowerCase()
                var linkkey = (objectName + '.' + name.split('-')[0]).toLowerCase()
                allVarsTypes[linkkey] = linkvalue
                comment_reset()
                continue
            } else if (memberType === 'FUNCTION') {   //METHOD
                var name = Utils.getMethodName(line) || "ErrorErrorError-99999"
                var m = Utils.processMethod(line, generalDesc, commentObject, objectName, name, isStatic)
                o['methods'][name] = m
                var linkvalue = ('../' + anchor + '/'  + objectName + '.md#' + name.split('-')[0]).toLowerCase()
                var linkkey = (objectName + '.' + name.split('-')[0]).toLowerCase()
                allVarsTypes[linkkey] = linkvalue
                comment_reset()
                continue
            } else if (memberType === 'VARIABLE') {
                nVariable++
                if (firstWord === 'declare') {
                    var name = Utils.cleanupName(thirdWord)
                } else {
                    var name = Utils.cleanupName(secondWord)
                }
                allVarsTypes[name] = '../' + anchor + '/' + saveFileName.toLowerCase() + '-module.md#variables'
                var v = {}
                v['dataType'] = line.split(':')[1].trim()
                v['dataType'] = v['dataType'].replace('typeof ', '')
                v['descr'] = generalDesc
                o['variables'][name] = v
                comment_reset()
                continue
            } else if (memberType === 'TYPE') {
                nType++
                var name = Utils.cleanupName(thirdWord)
                allVarsTypes[name] = '../' + anchor + '/' + saveFileName.toLowerCase() + '-module.md#types'
                var t = {}
                t['alias'] = line.split('=')[1].trim()
                t['descr'] = generalDesc
                o['types'][name] = v
                comment_reset()
                continue
            }
            else {
                console.log('Error: Cannot determine the case of this line: ' + line);
            }
            continue
        }
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
    if (ignore_upto >= index) return
    //prepare the line and sent first, second and third word.
    let line = prepareLine(element)
    if (SKIP.includes(firstWord)) return

    if (firstWord === C_START) {
        ignore_upto--
        processComment(index, lines)
        return
    } else if (firstWord === BLOCK_END) {
        mode = ''
        block_end_reset()
        return
    } else if (line.includes(MODULEDEF)) {
        nModule++
        mode = 'MODULE'
        moduleName = line.split(' ')[2].replace(/"/g,'')
        moduleName = Utils.trimGenerics(moduleName)
        moduleObj[moduleName] = processObject(moduleName,index, lines, false)
        comment_reset()
        return
    } else if (line.includes(INTERFACEDEF)) {
        nInterface++
        mode = 'INTERFACE'
        interfaceName = Utils.trimGenerics(secondWord)
        allTypes[interfaceName] = `../${anchor}/${Utils.trimGenerics(interfaceName).toLowerCase()}.md`
        allTypes[Utils.trimGenerics(interfaceName)] = `../${anchor}/${Utils.trimGenerics(interfaceName).toLowerCase()}.md`
        iObj[interfaceName] = processObject(interfaceName, index, lines, false)
        comment_reset()
        return
    } else if (line.includes(CLASSDEF)) {
        nClass++
        mode = 'CLASS'
        var preClassName = line.split(' ')[2]
        className = Utils.trimGenerics(preClassName)
        allTypes[className] = `../${anchor}/${Utils.trimGenerics(className).toLowerCase()}.md`
        allTypes[Utils.trimGenerics(className)] = `../${anchor}/${Utils.trimGenerics(className).toLowerCase()}.md`
        classObj[className] = processObject(className, index, lines, true)
        comment_reset()
        return
    } else if (line.includes(TYPEDEF)) {
        nType++
        var name = Utils.cleanupName(thirdWord)
        allVarsTypes[name] = '../' + anchor + '/' + saveFileName.toLowerCase() + '-module.md#types'
        typeObj[name] = {}
        typeObj[name]['alias'] = line.split('=')[1].trim()
        typeObj[name]['descr'] = generalDesc
        comment_reset()
    }
    else if (line.includes(VARIABLEDEF)) {
        nVariable++
        var name = Utils.cleanupName(thirdWord)
        allVarsTypes[name] = '../' + anchor + '/' + saveFileName.toLowerCase() + '-module.md#variables'
        variableObj[name] = {}
        variableObj[name]['dataType'] = line.split(':')[1].trim()
        variableObj[name]['dataType'] = variableObj[name]['dataType'].replace('typeof ', '')
        variableObj[name]['descr'] = generalDesc
        comment_reset()
    }
    else if (line.includes(ENUM)) {
        nEnum++
        enumKey = (firstWord == 'declare') ? thirdWord : secondWord
        allTypes[enumKey] = `../${anchor}/${Utils.trimGenerics(enumKey).toLowerCase()}.md`

        if (line.includes(BLOCK_BEGIN) && line.includes(BLOCK_END)) {
            enumObj[enumKey] = {}
            enumObj[enumKey]['descr'] = generalDesc
            enumObj[enumKey]['values'] = []
            var enumEntry = []
            var optionsString = OBJECT_INSIDE.exec(line)[1]
            if (optionsString) {
                optionsString.split(',').forEach((e) => {
                    enumEntry[0] = e.replace(/"/g, '').trim()
                    enumEntry[1] = ""
                    enumEntry[2] = ""
                    enumObj[enumKey]['values'].push(enumEntry)
                })
            }
            block_end_reset()
        }
        else {
            mode = 'ENUM'
            enumObj[enumKey] = processEnum(index, lines)
            block_begin_reset()
        }
        return
    } else if (line.includes(FUNCTION)) {
        var name = Utils.getMethodName(line)
        var f = Utils.processMethod(line, generalDesc, commentObject, interfaceName, name, isStatic)
        functionObj[name] = f
        nFunction++
        mode = 'FUNCTION'
        comment_reset()
        return
    }
}

/**
 * STARTING: Load input files and process each file and each line within.
 */
console.log('** Starting Program...')
SetUp.cleanupOutput('./json')

let files = FileOps.walkFiles('./input-scrubbed')
files.forEach(processFile)
FileOps.writeObject(allTypes, `./types/allTypes.json`)
FileOps.writeObject(allVarsTypes, `./types/allVarsTypes.json`)

function processFile(fileName) {
    console.log(`** Processing ${fileName}`)
    anchor = fileName.split('.ts')[0].toLowerCase()
    saveFileName = fileName.split('.ts')[0].toLowerCase()
    let lines = FileOps.loadFile(`./input-scrubbed/${fileName}`)
    lines.forEach(processLines);
    FileOps.writeObject(enumObj, `./json/${fileName}_enum.json`)
    FileOps.writeObject(moduleObj, `./json/${fileName}_module.json`)
    FileOps.writeObject(functionObj, `./json/${fileName}_function.json`)
    FileOps.writeObject(iObj, `./json/${fileName}_interface.json`)
    FileOps.writeObject(classObj, `./json/${fileName}_class.json`)
    FileOps.writeObject(typeObj, `./json/${fileName}_type.json`)
    FileOps.writeObject(variableObj, `./json/${fileName}_variable.json`)
    //expandAllTypes()

    console.log(`*** module = ${nModule}, interface = ${nInterface}, class = ${nClass}, function = ${nFunction}, enum = ${nEnum}, variable = ${nVariable}, type = ${nType}`);
    file_reset()
}
