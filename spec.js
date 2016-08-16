//import {loadFile, writeFile}  from './modules/fileops'
import * as FileOps from './modules/fileops'

const SKIP = ['///', '']
const C_START = '/**'
const C_END = '*/'
const IGNORES = ['@todo:']
let cBuffer = {}
var ignoreMode = false

/**
 * Process the lines in sequence and control workflow.
 *
 * @param  {string} element [A line from the input file array]
 * @param  {integer} index   [Position of the line in the array]
 * @return {true}         [returns true]
 */
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
 *
 */
console.log('** Starting Program...');

let markdowns = FileOps.walkFiles('./markdown')
markdowns.forEach(name => FileOps.remove(`./markdown/${name}`))


let files = FileOps.walkFiles('./input')
files.forEach(processFile)

function processFile(fileName) {
	console.log(`** Processing ${fileName}`);
  let lines = FileOps.loadFile(`./input/${fileName}`)
  lines.forEach(processLines);
  console.log(`** Read input file, ${lines.length} lines`)
  FileOps.writeFile(lines, `./markdown/${fileName}.md`)
  console.log(`** Wrote file`)
}
