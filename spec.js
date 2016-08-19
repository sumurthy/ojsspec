//import {loadFile, writeFile}  from './modules/fileops'
import * as FileOps from './modules/fileops'
import * as Objects from './modules/objects'

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
  }
}

/**
 * STARTING: Load input file and process each line.
 *
 */
console.log('** Starting Program...');
let markdowns = FileOps.walkFiles('./markdown')
markdowns.forEach(name => FileOps.remove(`./markdown/${name}`))

let c = JSON.parse(JSON.stringify(Objects.classObj))
c.name = "hello"
c.descr = "hello desc"
c.type = "type"
console.log(c);
FileOps.writeObject(c, `./markdown/one.json`)

let c2 = JSON.parse(JSON.stringify(Objects.classObj))
c2.name = "hello2"
c2.descr = "hello desc2"
console.log(c2);
FileOps.writeObject(c2, `./markdown/two.json`)




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
