let fs = require ('fs')
let nl = require('os').EOL;

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
