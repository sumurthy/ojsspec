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
const ENUM = 'enum '
const FUNCTION = 'function '
const NEWLINE = '\n  '
const ATSYMBOL = '@'
const OBJECT_INSIDE  = /{(.*?)}/
const IMPLEMENTS = 'implements '
const EXTENDS = 'extends '

let ignore_lines = []
let cBuffer = {}
let ignoreMode = false
let mode = ''
let cmode = false
let iBlock = 0

let nClass = 0
let nFunction = 0
let nEnum = 0
let nVariable = 0
let nType = 0
let nInterface = 0

// GLOBAL - TYPES OF OBJECT
//
let allTypes = {
    types: []
}
let enumObj = {}
let enumKey = ''
let classObj = {}
let iObj = {}
let interfaceName = ''
let className = ''
let functionObj = {}
let methodObj = {}
let propObj = {}
let typeObj = {}
let variableObj = {}
let generalDesc = ''
let commentObject = {
    'param': []
}

function file_reset() {
    nClass = 0
    nFunction = 0
    nEnum = 0
    nInterface = 0
    nVariable = 0
    nType = 0
    mode = ''
    enumObj = {}
    enumKey = ''
    classObj = {}
    functionObj = {}
    iObj = {}
    propObj = {}
    typeObj = {}
    variableObj = {}
    interfaceName = ''
    methodObj = {}
    propObj = {}
    generalDesc = ''
    commentObject = {
        'param': []
    }
    comment_reset()
}

function block_end_reset() {
    methodObj = {}
    propObj = {}
    generalDesc = ''
    commentObject = {
        'param': []
    }
    interfaceName = ''
    comment_reset()

}

function block_begin_reset() {
    generalDesc = ''
}

function comment_reset() {
    block_begin_reset()
    let commentObject = {
        'param': []
    }
}

function expandAllTypes() {

    allTypes['types'].forEach((e) => {
        if (e.includes('<')) {
            allTypes['types'].push(Utils.trimGenerics(e))
        }
    })
    allTypes['types'] = allTypes['types'].sort().filter((elem, i, arr) => arr.indexOf(elem) === i)
    return
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
    // Trim line, remove ';' and extra spaces after comma, and 1+ white space to 1 whitespace
    let line = element.split('//')[0]
    line = line.replace(/\s+/g, ' ').trim()
    line = line.replace(/,\s/g, ',').trim()
    line = line.replace(';','')
    let isStatic = false
    let hasAssignment = false
    let assignValue = null
    // Should it be ' static ' or 'static '
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

    // if (line.includes(BLOCK_BEGIN) && line.includes(BLOCK_END)) {
    //     return
    // }

    let firstWord = line.split(' ', 1)[0]
    let secondWord = line.split(' ', 2)[1]
    secondWord = secondWord || 'OBJECTERROR'

    if ((firstWord === 'new') || (firstWord.startsWith('new'))) {
        firstWord = Utils.getMethodName(line)
    }

    let thirdWord = line.split(' ', 3)[2]
    let lastWord = line.split(':').pop()
    if (!COMMENT_ALL.includes(firstWord)) {
        if (line.includes(BLOCK_BEGIN)) {
            iBlock++;
        }
        if (line.includes(BLOCK_END)) {
            iBlock--;
        }
    }

    if (SKIP.includes(firstWord)) return
    // else if (IGNORES.includes(secondWord)) {
    //   ignoreMode = true
    //   return
    // }
    if (firstWord === BLOCK_END && iBlock == 0) {
        mode = ''
        block_end_reset()
        return
    } else if (firstWord === C_START) {
        cmode = true
        block_begin_reset()
        comment_reset()
        return
    } else if (firstWord === COMMENT) {
        if (secondWord === undefined) {
            return
        } else if (secondWord.startsWith(ATSYMBOL)) {
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
                        var o = Utils.readCommentAhead(lines, arr.slice(4).join(' '), index)
                        ignore_lines = o['skip']
                        commentObject['param'].push([arr[3], o['descr']])
                    }
                    break;
                case '@return':
                    var arr = line.split(' ')
                    if (arr[3] !== undefined) {
                        var o = Utils.readCommentAhead(lines, arr.slice(3).join(' '), index)
                        ignore_lines = o['skip']
                        commentObject['returnDescr'] = o['descr']
                    }
                    break
                default:
            }
        } else {
            var o = Utils.readCommentAhead(lines, line.substr(2), index)
            ignore_lines = o['skip']
            generalDesc = o['descr']
        }
        return
    } else if (firstWord === C_END) {
        cmode = false
        return
    } else if (line.includes(INTERFACEDEF)) {
        nInterface++
        mode = 'INTERFACE'
        interfaceName = Utils.trimGenerics(secondWord)
        allTypes.types.push(interfaceName)
        var extendsName = null
        if (line.includes(EXTENDS)) {
            extendsName = line.split('extends ')[1]
            extendsName = extendsName.split(BLOCK_BEGIN)[0].trim()
        }
        iObj[interfaceName] = {}
        iObj[interfaceName] = Utils.createClassInterfaceObject(extendsName, secondWord, generalDesc)

        comment_reset()
        return
    } else if (line.includes(CLASSDEF)) {
        nClass++
        mode = 'CLASS'
        var preClassName = line.split(' ')[2]
        className = Utils.trimGenerics(preClassName)
        allTypes.types.push(className)
        var implementsName = null
        if (line.includes(IMPLEMENTS)) {
            implementsName = line.split('implements ')[1].split(BLOCK_BEGIN)[0].trim()
        }
        classObj[className] = {}
        classObj[className] = Utils.createClassInterfaceObject(implementsName, preClassName, generalDesc)
        comment_reset()
        return
    }
    else if (line.includes(TYPEDEF)) {
        nType++
        var name = Utils.cleanupName(thirdWord)
        typeObj[name] = {}
        typeObj[name]['alias'] = line.split('=')[1].trim()
        typeObj[name]['descr'] = generalDesc
        comment_reset()

    }
    else if (line.includes(VARIABLEDEF)) {
        nVariable++
        var name = Utils.cleanupName(thirdWord)
        variableObj[name] = {}
        variableObj[name]['dataType'] = line.split(':')[1].trim()
        variableObj[name]['dataType'] = variableObj[name]['dataType'].replace('typeof ', '')
        variableObj[name]['descr'] = generalDesc
        comment_reset()

    }
    else if (line.includes(ENUM)) {
        nEnum++
        enumKey = (firstWord == 'declare') ? thirdWord : secondWord
        allTypes.types.push(enumKey)

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
            enumObj[enumKey] = {}
            enumObj[enumKey]['descr'] = generalDesc
            enumObj[enumKey]['values'] = []
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

    // The Big Else....
    else {

        switch (mode) {
            case 'INTERFACE':
                var memberType = Utils.getMemberType(line, false)
                if (memberType === 'SKIPBLOCK') {
                //if (line.includes(BLOCK_BEGIN) && !line.includes(BLOCK_END)) {
                    // Handle object
                    var o = Utils.readObjectAhead(lines, index)
                    ignore_lines = o['skip']
                    iBlock--
                //} else if (firstWord.includes(':') && !firstWord.includes('(')) {   //PROPERTY
                } else if (memberType === 'PROPERTY') {   //PROPERTY
                    var p = {}
                    var name = Utils.getPropName(firstWord, false)
                    p['isCollection'] = (secondWord.includes('[]')) ? true : false
                    var p = Utils.processProperty(name, line, generalDesc, assignValue, false)
                    name = name.replace('?','')
                    iObj[interfaceName]['properties'][name] = p
                } else if (memberType === 'METHOD') {   //METHOD
                //} else if (line.includes(')') && line.includes('(')) { // has brackets
                    var name = Utils.getMethodName(line) || "ErrorErrorError~99999"
                    var m = Utils.processMethod(line, generalDesc, commentObject, interfaceName, name, isStatic)
                    iObj[interfaceName]['methods'][name] = m
                }  else {
                    console.log('Error: Cannot determine the case of this line: ' + line);
                }
                break;
            case 'CLASS':
                var memberType = Utils.getMemberType(line)
                if (memberType === 'SKIPBLOCK') {
                //if (line.includes(BLOCK_BEGIN) && !line.includes(BLOCK_END)) {
                    // Handle object
                    var o = Utils.readObjectAhead(lines, index)
                    ignore_lines = o['skip']
                    iBlock--
                // } else if (secondWord.includes(':') && !secondWord.includes('(') && (!firstWord.includes('('))) { //PROPERTY
                } else if (memberType === 'PROPERTY') {   //PROPERTY
                    if (secondWord) {
                        var name = Utils.getPropName(secondWord, false)
                    }
                    else {
                        var name = 'PROPERTYNAMEERROR~99999'
                    }
                    var p = Utils.processProperty(name, line, generalDesc, assignValue)
                    name = name.replace('?','')
                    classObj[className]['properties'][name] = p
                // } else if (line.includes(')') && line.includes('(')) { // has brackets
                } else if (memberType === 'METHOD') {   //METHOD
                    name = Utils.getMethodName(line)
                    name = name || "ErrorErrorError~99999"
                    var m = Utils.processMethod(line, generalDesc, commentObject, className, name, isStatic)
                    classObj[className]['methods'][name] = m
                }  else {
                    console.log('Error: Cannot determine the case of this line: ' + line);
                }
                break;
            case 'ENUM':

                if (line.includes('=')) {
                    var v = line.replace(',', '').split('=').map((s) => s.trim())
                    v.push(generalDesc)
                    enumObj[enumKey]['values'].push(v)
                }
                else {
                    var ea = line.split(',')
                    ea.forEach((en) => {
                        var v = []
                        v[0] = en.replace(/"/g, '').replace(/,/,'').trim()
                        v[1] = ''
                        v[2] = generalDesc
                        if (v[0]) {
                            enumObj[enumKey]['values'].push(v)
                        }
                    })
                }
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

let files = FileOps.walkFiles('./input-scrubbed')
files.forEach(processFile)

function processFile(fileName) {
    console.log(`** Processing ${fileName}`)

    let lines = FileOps.loadFile(`./input-scrubbed/${fileName}`)
    lines.forEach(processLines);
    FileOps.writeObject(enumObj, `./json/${fileName}_enum.json`)
    FileOps.writeObject(functionObj, `./json/${fileName}_function.json`)
    FileOps.writeObject(iObj, `./json/${fileName}_interface.json`)
    FileOps.writeObject(classObj, `./json/${fileName}_class.json`)
    FileOps.writeObject(typeObj, `./json/${fileName}_type.json`)
    FileOps.writeObject(variableObj, `./json/${fileName}_variable.json`)
    expandAllTypes()
    FileOps.writeObject(allTypes, `./json/allTypes.json`)

    console.log(`*** interface = ${nInterface}, class = ${nClass},
        function = ${nFunction}, enum = ${nEnum}, variable = ${nVariable}, type = ${nType}`);
    file_reset()
}
