//import {loadFile, writeFile}  from './modules/fileops'
import * as FileOps from './modules/fileops'

const SKIP = ['///', '']
const C_START = '/**'
const C_END = '*/'
const IGNORES = ['@todo:']
let cBuffer = {}
var ignoreMode = false

function processLines(element, index) {

  let line = element.trim()
  let firstWord = line.split(' ',1)[0]
  let secondWord = line.split(' ',2)[1]

  if (SKIP.includes(firstWord)) {
    console.log('Skipping ' + element);
    return;
  }
  else if (IGNORES.includes(secondWord)) {
    ignoreMode = true
    console.log("entering ignore more " + line)
    return
  }
  else {
    console.log('Processing: ' + index + ' ' + line);
  }
}

/**
 * STARTING: Load input file and process each line.
 */
console.log('** Starting Program...');
let lines = FileOps.loadFile('./input/test.ts')
//let lines = loadTs('./input/sp-client-platform.typeDoc.ts')
lines.forEach(processLines);
console.log(`** Read input file, ${lines.length} lines`)


FileOps.writeFile(lines, './markdown/output.md')
console.log(`** Wrote file`)
