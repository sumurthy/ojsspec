let fs = require ('fs')
let nl = require('os').EOL;

export function walkFiles(path=''){
  try {
      return fs.readdirSync(path)
  }
  catch(e)
  {
    console.log(`Error reading input directory, path: ${path}, ${e}`)
  }
}

export function loadFile(path=''){
  try {
      return fs.readFileSync(path).toString().split(nl)
  }
  catch(e)
  {
    console.log(`Error loading the input file, path: ${path}, ${e}`)
  }
}

export function writeFile(lines=[], path=''){
  try {
      fs.writeFileSync(path, lines.join(nl))
  }
  catch(e)
  {
    console.log(`Error loading the input file, path: ${path}, ${e}`)
  }
}

export function writeObject(o={}, path=''){
  try {
			let j = JSON.stringify(o, null, 2)
      fs.writeFileSync(path, j)
  }
  catch(e)
  {
    console.log(`Error loading the input file with string input, path: ${path}, ${e}`)
  }
}

export function remove(path=''){
  try {
      fs.unlinkSync(path)
  }
  catch(e)
  {
    console.log(`Error removing the output file, path: ${path}, ${e}`)
  }
}
