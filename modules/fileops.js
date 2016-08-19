let fs = require ('fs')
let nl = require('os').EOL;

module.exports  = {
  walkFiles: (path='') => {
    try {
        return fs.readdirSync(path)
    }
    catch(e)
    {
      console.log(`Error reading input directory, path: ${path}, ${e}`)
    }
  },

  loadFile: (path='') => {
    try {
        return fs.readFileSync(path).toString().split(nl)
    }
    catch(e)
    {
      console.log(`Error loading the input file, path: ${path}, ${e}`)
    }
  },

  writeFile:  (lines=[], path='') => {
    try {
        fs.writeFileSync(path, lines.join(nl))
    }
    catch(e)
    {
      console.log(`Error loading the input file, path: ${path}, ${e}`)
    }
  },

  writeObject: (o={}, path='') => {
    try {
        fs.writeFileSync(path, JSON.stringify(o, null, 2))
    }
    catch(e)
    {
      console.log(`Error loading the input file with string input, path: ${path}, ${e}`)
    }
  },

  remove: (path='') => {
    try {
        fs.unlinkSync(path)
    }
    catch(e)
    {
      console.log(`Error removing the output file, path: ${path}, ${e}`)
    }
  }
}
