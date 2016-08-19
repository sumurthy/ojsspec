//import {loadFile, writeFile}  from './modules/fileops'
import FileOps from './modules/fileops'
import SetUp from './modules/setuproutine'
import Objects from './modules/objects'
import Utils from './modules/utils'

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
    return;
  }
  else if (IGNORES.includes(secondWord)) {
    ignoreMode = true
    return
  }
  else {
    //console.log('Processing: ' + index + ' ' + line);
  }
}

/**
 * STARTING: Load input files and process each file and each line within.
 */
console.log('** Starting Program...')
SetUp.cleanupOutput('./markdown')
// Temp
let c = JSON.parse(JSON.stringify(Objects.classObj))
c.name = "hello"
c.descr = "hello desc"
c.type = "type"
console.log(c);
FileOps.writeObject(c, `./markdown/one.json`)
// end Temp

let files = FileOps.walkFiles('./input')
files.forEach(processFile)

function processFile(fileName) {
	console.log(`** Processing ${fileName}`);
  let lines = FileOps.loadFile(`./input/${fileName}`)
  lines.forEach(processLines);
  console.log(`*** Read input file, ${lines.length} lines`)
  FileOps.writeFile(lines, `./markdown/${fileName}.md`)
  console.log(`*** Wrote markdown file`)
  console.log('');
}
