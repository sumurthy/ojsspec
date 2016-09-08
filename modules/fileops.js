let fs = require ('fs')
let nl = require('os').EOL;

module.exports  = {
  walkFiles: (path='', pattern=null) => {
    try {
        var fl = fs.readdirSync(path)
				if (pattern) {
					var fo = fl.filter((e) => e.includes(pattern))
					return fo
				}
				else {
					return fl
				}
    }
    catch(e)
    {
      console.log(`Error reading input directory, path: ${path}, ${e}`)
			throw e
    }
  },

  loadFile: (path='') => {
    try {
        return fs.readFileSync(path, 'utf8').toString().split(nl)
    }
    catch(e)
    {
      console.log(`Error loading the input file, path: ${path}, ${e}`)
			throw e
    }
  },
	loadJson: (path='') => {
		try {
				return fs.readFileSync(path, 'utf8').toString()
		}
		catch(e)
		{
			console.log(`Error loading the input JSON file, path: ${path}, ${e}`)
			throw e
		}
	},

  writeFile:  (lines=[], path='') => {
    path = path.toLowerCase()
    try {
        fs.writeFileSync(path, lines.join(nl))
    }
    catch(e)
    {
      console.log(`Error loading the input file, path: ${path}, ${e}`)
			throw e
    }
  },

  writeObject: (o={}, path='') => {
    try {
        fs.writeFileSync(path, JSON.stringify(o, null, 2))
    }
    catch(e)
    {
      console.log(`Error loading the input file with string input, path: ${path}, ${e}`)
			throw e
    }
  },

  remove: (path='') => {
    try {
        fs.unlinkSync(path)
    }
    catch(e)
    {
      console.log(`Error removing the output file, path: ${path}, ${e}`)
			throw e
    }
  }
}
