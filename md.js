import FileOps from './modules/fileops'
import SetUp from './modules/setuproutine'
import Utils from './modules/utils'

let allTypes = []
let allVarsTypes = {}
let functionObj = {}
let iObj = {}
let classObj = {}
let moduleObj = {}
let enumObj = {}
let variableObj = {}
let typeObj = {}
let region = ''
let mdout = []
let mem_mdout = []
let func_mdout = []
let enum_mdout = []
let skipFlag = false
let moduleName = ''
let objectName = ''
let interfaceName = ''

let moduleT = []
let classInterfaceT = []
let methodfuncT = []
let enumT = []

let WRITE_BACK = ['#', '|', '*', '_', '%']

let TAKE_REPEAT_ACTION = ['>']
let NEW_REGION = ['<']
let IGNORE = ['/']


function dclone(o) {
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
    func_mdout = []
    enum_mdout = []
    skipFlag = false
}

function getLinkForType(type = '') {

    var out = ''
    if (!type) return out
    var splitChar = ','
    var type = Utils.replaceCommaInGenerics(type)
    if (type.includes('|')) {
        splitChar = '|'
    }
    //type.split(/\W+/).forEach((e) => {
    type.split(splitChar).forEach((e) => {
        // try as is for a match
        if (allTypes.includes(e.trim())) {
            out = out + `[\`${e.replace(/\^/g, ',')}\`](${Utils.trimGenerics(e).toLowerCase()}.md)` + ','
        }
        // try trimming the generics
        else if (allTypes.includes(Utils.trimGenerics(e))) {
            out = out + `[\`${e.replace(/\^/g, ',')}\`](${Utils.trimGenerics(e).toLowerCase()}.md)` + ','
        }
        // variables and types match
        else if (Object.keys(allVarsTypes).includes(Utils.trimGenerics(e))) {
            out = out + `[\`${e.replace(/\^/g, ',')}\`](${allVarsTypes[Utils.trimGenerics(e)].toLowerCase()})` + ','
        }
        // objectName.method name match
        else if (Object.keys(allVarsTypes).includes(Utils.trimGenerics(e.toLowerCase()))) {
            out = out + `[\`${e.replace(/\^/g, ',')}\`](${allVarsTypes[Utils.trimGenerics(e)].toLowerCase()})` + ','
        }
        else {
            out = out + '`' + e.replace(/\^/g, ',') + '`' + ','
        }
    })
    out = out.trim()
    if (out.endsWith(',')) {
        out = out.substring(0, out.length - 1)
    }
    return out
}


function set_region_member(tline = '', member = {}, isClass = true) {
    skipFlag = false
    if (tline.includes('</')) {
        region = 'none'
    } else {
        region = Utils.genericInside(tline).replace('/', '')
        switch (region) {
            case 'function':
            case 'method':
                if (!isClass) {
                    skipFlag = true
                }
                break;
            case 'imethod':
            case 'ifunction':
            case 'function':
                if (isClass) {
                    skipFlag = true
                }
                break;
            case 'parameter':
                if (member['params'].length === 0) {
                    skipFlag = true
                }
                break;
            default:
        }
    }
    return
}

function set_region(tline = '', obj = {}, localName = '', isClass = true) {

    skipFlag = false
    if (tline.includes('</')) {
        region = 'none'
    } else {
        region = Utils.genericInside(tline).replace('/', '')
        switch (region) {
            case 'class':
                if (Object.keys(classObj).length === 0) {
                    skipFlag = true
                }
                break;
            case 'module':
                if (Object.keys(moduleObj).length === 0) {
                    skipFlag = true
                }
                break;
            case 'property':
                if (!isClass) {
                    skipFlag = true
                }
                if (Object.keys(obj[localName]['properties']).length === 0) {
                    skipFlag = true
                }
                break;
            case 'iproperty':
                if (isClass) {
                    skipFlag = true
                }
                if (Object.keys(obj[localName]['properties']).length === 0) {
                    skipFlag = true
                }
                break;
            case 'imethod':
                if (isClass) {
                    skipFlag = true
                }
                if (Object.keys(obj[localName]['methods']).length === 0) {
                    skipFlag = true
                }
                break;
            case 'method':
                if (!isClass) {
                    skipFlag = true
                }
                if (Object.keys(obj[localName]['methods']).length === 0) {
                    skipFlag = true
                }
                break;
            case 'interface':
                if (Object.keys(iObj).length === 0) {
                    skipFlag = true
                }
                break;
            case 'functions':
                if (Object.keys(functionObj).length === 0) {
                    skipFlag = true
                }
                break;
            case 'ifunction':
                if (Object.keys(obj[localName]['functions']).length === 0) {
                    skipFlag = true
                }
                break;
            case 'typedef':
                if (Object.keys(typeObj).length === 0) {
                    skipFlag = true
                }
                break;
            case 'variable':
                if (Object.keys(variableObj).length === 0) {
                    skipFlag = true
                }
                break;
            case 'enumeration':
                if (Object.keys(enumObj).length === 0) {
                    skipFlag = true
                }
                break;
            case 'parameter':
                if (Object.keys(classObj).length === 0) {
                    skipFlag = true
                }
                break;

            default:
        }
    }

    return
}


function doSub(tline = '') {
    if (tline.includes('%module%')) tline = tline.replace('%module%', moduleName)
    if (tline.includes('%resourcename%')) tline = tline.replace('%resourcename%', objectName)

    return tline
}


function doSubClassInterface(tline = '', localO = {}, localName = '', isClass = true) {

    if (tline.includes('%resourcedescription%')) tline = tline.replace('%resourcedescription%', localO[localName]['descr'])
    if (tline.includes('%resourcename%')) tline = tline.replace('%resourcename%', localName)
    if (tline.includes('%resourcetype%')) {
        if (isClass) {
            tline = tline.replace('%resourcetype%', ' class')
        } else {
            tline = tline.replace('%resourcetype%', ' interface')
        }
    }
    console.log(localO);
    if (tline.includes('%generictype%')) {
        if (localO[localName]['genericType']) {
            tline = tline.replace('%generictype%', ` \`<${localO[localName]['genericType']}>\``)
        }
        else {
            tline = tline.replace('%generictype%', '')
        }
    }
    if (tline.includes('%typeparameters%')) {
        if (localO[localName]['genericType']) {
            tline = tline.replace('%typeparameters%', `_Type parameters: \`<${localO[localName]['genericType']}>\`_`)
        }
        else {
            tline = tline.replace('%typeparameters%', '')
        }
    }
    if (tline.includes('%extendsimplements%')) {
        if (localO[localName]['implementsExtendsName']) {
            var ielink = getLinkForType(localO[localName]['implementsExtendsName'])
            var tag = (isClass) ? 'Implements' : 'Extends'
            tline = tline.replace('%extendsimplements%',
                        `_${tag}: ${ielink}_`)
        }
        else {
            tline = tline.replace('%extendsimplements%', '')
        }
    }
    return tline
}

function doSubMember(tline = '', member = {}, membername = '', isClass = true, ownFile = false) {

    if (tline.includes('%hashcount%')) {
        if (ownFile) {
            tline = tline.replace('%hashcount%', '#')
        } else {
            tline = tline.replace('%hashcount%', '###')
        }
    }
    if (tline.includes('%membername%')) tline = tline.replace('%membername%', membername.split('~')[0])
    if (tline.includes('%memberdescription%')) tline = tline.replace('%memberdescription%', member['descr'])
    if (tline.includes('%apisignature%')) tline = tline.replace('%apisignature%', `\`${member['signature']}\``)

    if (tline.includes('%noparam%')) {
        if (member['params'].length === 0) {
            tline = tline.replace('%noparam%', 'None')
        } else {
            tline = tline.replace('%noparam%', '')
        }
    }
    if (tline.includes('%returntype%')) tline = tline.replace('%returntype%', `${getLinkForType(member['returnType'])}`)
    if (tline.includes('%returndescr%')) tline = tline.replace('%returndescr%', `${member['returnDescr']}`)

    return tline
}


var dFunction = {

    classGenIndividual: function(e = '') {
        objectName = e
        genClassInterfaceView(true, e)
    },
    interfaceGenIndividual: function(e = '') {
        objectName = e
        genClassInterfaceView(false, e)
    },
    moduleGenIndividual: function(e = '') {
        objectName = e
        genClassInterfaceView(false, e, true)

    },
    functionsGenIndividual: function(e = '') {

    },
    enumerationGenIndividual: function(e = '') {

    },
    typedefGenIndividual: function(e = '') {

    },
    variableGenIndividual: function(e = '') {

    }
}

function addRegions(tline = '', type = '') {
    var o = {}
    switch (type) {
        case 'class':
            o = classObj
            break;
        case 'module':
            o = moduleObj
            break;
        case 'interface':
            o = iObj
            break;
        case 'functions':
            o = functionObj
            break;
        case 'enumeration':
            o = enumObj
            break;
        case 'typedef':
            o = typeObj
            break;
        case 'variable':
            o = variableObj
            break;
        default:

    }

    Object.keys(o).forEach((e) => {
        var mline = dclone(tline).substr(1)
        mline = mline.replace('%name%', e.split('~')[0])
        mline = mline.replace('%type%', `${getLinkForType(o[e]['dataType'])}`)

        mline = mline.replace('%link%', `${e.toLowerCase()}`)
            //Get first sentence
        var descr = o[e]['descr']
        if (descr) {
            descr = descr.split('.')[0].replace(/\n/g, ' ')
        }
        mline = mline.replace('%description%', descr)
            // For return function add Markdown HyperLink
        if (type === 'functions') {
            var returnLink = getLinkForType(o[e]['returnType'])
            mline = mline.replace('%returns%', returnLink)
        }
        mdout.push(mline)
            // Dynamically call the function to generate the individual md files

        dFunction[`${type}GenIndividual`](e)

    })
}

function addMembers(tline = '', type = '', name = '', localO = {}) {
    var o = {}
    switch (type) {
        case 'property':
        case 'iproperty':
            o = localO[name]['properties']
            break;
        case 'method':
        case 'imethod':
            o = localO[name]['methods']
            break;
        case 'ifunction':
            o = localO[name]['functions']
            break;
        default:
    }

    Object.keys(o).forEach((e) => {

        var mline = dclone(tline).substr(1)
        if (o[e]['isStatic']) {
            mline = mline.replace('%access%', `\`${o[e]['accessModifier']}, _static_\``)
        }
        else {
            mline = mline.replace('%access%', `\`${o[e]['accessModifier']}\``)
        }
        if (o[e]['readonly']) {
            mline = mline.replace('%readonly%', `_Read-only._ `)
        }
        else {
            mline = mline.replace('%readonly%', '')
        }
        if ((type === 'method') || type === 'imethod') {
            mline = mline.replace('%type%', `${getLinkForType(o[e]['returnType'])}`)
            mline = mline.replace('%name%', `[\`${e.split('~')[0]}\`](#${e.split('~')[0].toLowerCase()})`)
        } else {
            mline = mline.replace('%name%', e.split('~')[0])
            mline = mline.replace('%type%', `${getLinkForType(o[e]['dataType'])}`)
        }

        //Get first sentence
        var descr = o[e]['descr']
        if (descr) {
            descr = descr.split('.')[0].replace(/\n/g, ' ')
        }
        mline = mline.replace('%description%', descr)
        mem_mdout.push(mline)
    })
}

function addParams(tline = '', member = {}, targetArray = []) {

    member['params'].forEach((e) => {
        var mline = dclone(tline).substr(1)
        mline = mline.replace('%name%', e['name'])
            // }
        mline = mline.replace('%dtype%', `${getLinkForType(e['dataType'])}`)
        if (e['isOptional']) {
            mline = mline.replace('%optional% ', '_Optional._')
        }
        else {
            mline = mline.replace('%optional% ', '')
        }
        //Get first sentence
        var descr = e['descr']
        if (descr) {
            console.log(e + ' --> ' + descr);
            descr = descr.split('.')[0].replace(/\n/g, ' ')

        }
        mline = mline.replace('%description%', descr)
            // if (member['parameters'][e]['descr']) {
            //                            mline = mline.replace('%optional%', 'Optional.')
            // }
            // else {
            //            mline = mline.replace('%optional%', '')
            // }

        targetArray.push(mline)
    })
}


function genClassInterfaceView(isClass = true, localName = '', isModule = false) {
    var localO = isClass ? classObj : iObj
    if (isModule) {
        localO = moduleObj
    }
    mem_mdout = []
    var o = localO[localName]
        //var o = classObj[objectName]

    classInterfaceT.forEach((tline) => {
        tline = tline.trim()
        var key = tline[0] || '*'
        var key2 = tline.substring(0, 2)

        if (NEW_REGION.includes(key)) {
            set_region(tline, localO, localName, isClass)
            return
        }

        if (skipFlag) {
            return
        }

        var hasVar = tline.includes('%') ? true : false

        if (WRITE_BACK.includes(key)) {
            if (hasVar) tline = doSubClassInterface(tline, localO, localName, isClass)
            mem_mdout.push(tline)
        } else if (TAKE_REPEAT_ACTION.includes(key)) {
            switch (region) {
                case 'property':
                case 'method':
                case 'function':
                case 'ifunction':
                case 'imethod':
                case 'iproperty':
                    addMembers(tline, region, localName, localO)
                    break;
                default:
            }
        }
    })

    if (Object.keys(localO[localName]['methods']).length > 0) {
        Object.keys(localO[localName]['methods']).forEach((e) => {
            genMemberview(e, localO[localName]['methods'][e], mem_mdout, isClass)
        })
    }

    if (!isClass && (Object.keys(localO[localName]['functions']).length > 0)) {
        Object.keys(localO[localName]['functions']).forEach((e) => {
            genMemberview(e, localO[localName]['functions'][e], mem_mdout, isClass)
        })
    }

    console.log(`*** Writing Class/Interface file for ${localName}`)
    FileOps.writeFile(mem_mdout, `./markdown/${Utils.trimGenerics(localName)}.md`)

}

function genMemberview(memName = '', member = {}, targetArray = [], isClass = true, ownFile = false) {

    methodfuncT.forEach((tline) => {
        tline = tline.trim()
        var key = tline[0] || '*'
        var key2 = tline.substring(0, 2)
        if (NEW_REGION.includes(key)) {
            set_region_member(tline, member, isClass)
            return
        }

        if (skipFlag) {
            return
        }

        var hasVar = tline.includes('%') ? true : false
        if (WRITE_BACK.includes(key)) {
            if (hasVar) {
                tline = doSubMember(tline, member, memName, isClass, ownFile)
            }
            targetArray.push(tline)
        } else if (TAKE_REPEAT_ACTION.includes(key)) {
            addParams(tline, member, targetArray)
        }
    })
}

function genModuleView() {
    console.log(`Processing module file creation for ${moduleName}`);

    moduleT.forEach((tline) => {
        tline = tline.trim()
        var key = tline[0] || '*'
        var key2 = tline.substring(0, 2)

        if (NEW_REGION.includes(key)) {
            set_region(tline)
            return
        }

        if (skipFlag) { //why do we need this?
            return
        }

        var hasVar = tline.includes('%') ? true : false

        if (WRITE_BACK.includes(key)) {

            if (hasVar) tline = doSub(tline)
            mdout.push(tline)
        } else if (TAKE_REPEAT_ACTION.includes(key)) {
            switch (region) {
                case 'class':
                case 'module':
                case 'functions':
                case 'interface':
                case 'enumeration':
                case 'variable':
                case 'typedef':
                    addRegions(tline, region)
                    break;
                default:
            }
        }
    })
    console.log(`*** Writing Module file for ${moduleName}`)
    FileOps.writeFile(mdout, `./markdown/${moduleName}-module.md`)
    genFunctionView()
    genEnumView()
}

function genFunctionView() {
    Object.keys(functionObj).forEach((e) => {
        genMemberview(e, functionObj[e], func_mdout, false, true)
        console.log(`*** Writing Function file for ${e}`)
        FileOps.writeFile(func_mdout, `./markdown/${Utils.trimGenerics(e)}.md`)
        func_mdout = []
    })
}


function genEnumView() {
    Object.keys(enumObj).forEach((e) => {
        enumT.forEach((tline) => {
            tline = tline.trim()
            var key = tline[0] || '*'
            if (WRITE_BACK.includes(key)) {
                tline = tline.replace('%enumname%', e)
                tline = tline.replace('%description%', enumObj[e]['descr'])
                enum_mdout.push(tline)
            } else if (TAKE_REPEAT_ACTION.includes(key)) {
                enumObj[e]['values'].forEach( (a) => {
                    var mline = dclone(tline).substr(1)
                    if (a[1]) {
                        mline = mline.replace('%value%', `=${a[1]}`)
                    }
                    else {
                        mline = mline.replace('%value%', '')

                    }
                    mline = mline.replace('%member%', a[0])
                    mline = mline.replace('%description%', a[2])
                    enum_mdout.push(mline)
                })
            }
        })
        console.log(`*** Writing Enum file for ${e}`)
        FileOps.writeFile(enum_mdout, `./markdown/${Utils.trimGenerics(e)}.md`)
        enum_mdout = []
    })
}


/**
* START OF THE PROGRAM
*
*
( )
*/

console.log('** Starting Program...')
SetUp.cleanupOutput('./markdown')

try {
    moduleT = FileOps.loadFile('./config/module.md')
    classInterfaceT = FileOps.loadFile('./config/class_interface.md')
    methodfuncT = FileOps.loadFile('./config/method_function.md')
    enumT = FileOps.loadFile('./config/enum.md')

    var t = JSON.parse(FileOps.loadJson('./json/allTypes.json'))
    allTypes = t['types']
    allVarsTypes = JSON.parse(FileOps.loadJson('./json/allVarsTypes.json'))
} catch (e) {
    console.log(`Error Loading config files.`)
    throw e
} finally {

}

let inputFiles = FileOps.walkFiles('./input', '.ts')
inputFiles.forEach((e) => {
    let files = FileOps.walkFiles('./json', e)
    loadModule(files)

    moduleName = e.split('.')[0]
    genModuleView()

    file_reset()

})

function loadModule(files = []) {

    files.forEach((e) => {
        console.log(`** Processing ${e}`)
        if (e.includes('_module.json')) {
            moduleObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
            console.log(`*** Read Class JSON file, ${Object.keys(classObj)}`)
        } else if (e.includes('_class.json')) {
            classObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
            console.log(`*** Read Class JSON file, ${Object.keys(classObj)}`)
        } else if (e.includes('_interface.json')) {
            iObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
            console.log(`*** Read Interface JSON file, ${Object.keys(iObj)}`)
        } else if (e.includes('_enum.json')) {
            enumObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
            console.log(`*** Read Enum JSON file, ${Object.keys(enumObj)}`)
        } else if (e.includes('_function.json')) {
            functionObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
            console.log(`*** Read Function JSON file, ${Object.keys(functionObj)}`)
        } else if (e.includes('_variable.json')) {
            variableObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
            console.log(`*** Read Variable JSON file, ${Object.keys(variableObj)}`)
        } else if (e.includes('_type.json')) {
            typeObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
            console.log(`*** Read Typedef JSON file, ${Object.keys(typeObj)}`)
        }
        else {
            throw "Unrecognized file in inut JSON folder. Should be *_{module|class|enum|type|variable|function|interface).json"
        }

        })
        //
        //  console.log(`interface = ${nInterface}, class = ${nClass}, function = ${nFunction}, enum = ${nEnum}`);
        //          file_reset()
}
