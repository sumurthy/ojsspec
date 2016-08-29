//import {loadFile, writeFile}  from './modules/fileops'
import FileOps from './modules/fileops'
import Utils from './modules/utils'
import SetUp from './modules/setuproutine'

const STATEMENT_END = [';', '{', '}']
const SKIP = ['*', '//', '/**', '///', '', '*/', '/*']
const BLOCK_END = '}'
const ENUM = 'enum '


let outputJs = []
let iCount = 0
let ignore_lines = []
let skipFlag = false

function file_reset() {
    outputJs = []
    iCount = 0
    ignore_lines = []
}

function processLines(element = '', index = 0, lines = []) {

    if (ignore_lines.includes(index)) {
        return
    }

    var line = element.split('//')[0].trimRight()
    let firstWord = line.trim().split(' ', 1)[0]
    var outLine = ''

    outLine = line

    if (line.includes(ENUM)) {
        skipFlag = true
    }

    if (line.includes(BLOCK_END)) {
        skipFlag = false
    }

    if (!SKIP.includes(firstWord) && !skipFlag) {
        if (line) {
            if (!STATEMENT_END.includes(line.slice(-1))) {
                console.log(`${line}`);
            }
        }
    }
    outputJs.push(outLine)
    return
}


/**
 * STARTING: Load input files and process each file and each line within.
 */
console.log('** Starting Program...')
SetUp.cleanupOutput('./input-scrubbed')

let files = FileOps.walkFiles('./input')
files.forEach(processFile)

function processFile(fileName) {
    console.log(`** Processing ${fileName}`)
    let lines = FileOps.loadFile(`./input/${fileName}`)
    lines.forEach(processLines);
    console.log(`*** Writing scrubbed output ${fileName}, Changed = ${iCount}`)

    FileOps.writeFile(outputJs, `./input-scrubbed/${fileName}`)
    file_reset()
}
