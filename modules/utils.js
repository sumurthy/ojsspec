const BETWEEN_BRACKETS = /\(([^)]+)\)/;
const GENERIC_INSIDE  = /<(.*?)>/
const OBJECT_INSIDE  = /{(.*?)}/
const BLOCK_BEGIN = '{'
const BLOCK_END = '}'
const STATEMENT_END = [';', '{', '}']
const SKIP = ['*', '//', '/**', '///', '', '*/', '/*']

var self = module.exports = {

  /**
  * This buils the parameter list object and matches that with the parameter comment (if any).
  *
  */
  buildParamList: (line = '', paramComment = []) => {
	var out = []
	var p = BETWEEN_BRACKETS.exec(line)
    if (p === null) {
      return out
    }
	var paramString = p[1]
    var parray = paramString.split(',').map((_) => _.trim()) //between brackets list
       // Build a parameter object.
    parray.forEach((e) => {
         var ta = e.split(':').map((_) => _.trim())
         var fp = {}
         fp['name'] = ta[0].replace('?', '')
         if (ta[1]) fp['dataType'] = ta[1].replace(')','')
         fp['descr'] = ''
         if (ta[0].includes('?')) {
             fp['isOptional'] = true
        }
        else {
             fp['isOptional'] = false
        }
         // For each element, determine if there is a @param description. If so, add description element to function object
         if (paramComment.length > 0) {
           paramComment.forEach((d) => {
             if (d[0] === ta[0]) {
                fp['descr'] = d[1]
             }
           })
         }
         out.push(fp)
    })
    return out
  },

  readCommentAhead: (lines = [], descr = '', current = 0) => {
	let o = {}
	o['descr'] = descr
	o['skip'] = []

	for (var i = (current + 1) ; i < lines.length; i++) {
		let line = lines[i]
		line = line.replace(/\s+/g,' ').trim()
		let firstWord = line.split(' ',1)[0]
		let secondWord = line.split(' ',2)[1]

        o['skip'].push(i)

		if (firstWord === '*/' || ( secondWord !== undefined && secondWord.startsWith('@'))) {
			return o
		}
		else {
			o['descr'] = o['descr'] + ' \n' + line.substr(2)
		}
	}
    return o
    },

    unWrapStatement: (lines= [], current = 0) => {
		let o = {}
		o['skip'] = []
        o['line'] = lines[current]
		for (var i = (current + 1) ; i < lines.length; i++) {
            let line = lines[i].split('//')[0].trimRight()
            o['line'] = o['line'] + line
            o['skip'].push(i)

            if (STATEMENT_END.includes(line.slice(-1))) {
                return o
            }

		}
        return o
    },

	genericInside: (str='') => {
		var g = GENERIC_INSIDE.exec(str)
		if (g && g.length > 1) {
			return g[1].trim()
		}
		else {
			return null
		}
	},

    trimGenerics: (str='') => {
		var n = str.split('<')[0]
        if (n) {
          return n.trim()
        }
        else {
          return n
        }
    },
	getMethodName: (line='') => {
		var name = line.split('(')[0].replace('?', '') //take left of '(' character
        name = name.replace('public ', '')
        name = name.replace('function ', '')
        name = name.replace('private ', '')
        name = name.replace('protected ', '')
        name = name.replace('static ', '')
        name = name.replace('?', '')
        name = name.replace(':', '')
        name = name.replace(/\s+/g, '') //remove spaces
        if ((name === 'new') || (name.startsWith('new'))) {
            name = name.replace('new', 'constructor')
        }
        name = name + '~' + (Math.floor(Math.random()*90000) + 10000)
        return name
	},

    cleanupName: (name='') => {
		return name.split(':')[0].split('=')[0].replace('?', '').trim()
	},

    getPropName: (name='') => {
		return name.split('(')[0].replace('?', '').replace(':','')
	},

    readObjectAhead: (lines = [], current = 0) => {
		let o = {}
		o['obj'] = {}
		o['skip'] = []

		for (var i = current ; i < lines.length; i++) {
			var line = lines[i]
      o['skip'].push(i)
			if (line.includes(BLOCK_END)) {
				return o
			}
		}
    return o
  },
  getAccessModifier: (line = '') => {
      var am = 'public'
      if (line.includes('private ')) am = 'private'
      if (line.includes('protected ')) am = 'protected'
      return am
  },
  getSignature: (line='') => {
      var signature = ''
      if (line.includes('constructor')) {
      	signature = line
      }
      else {
		signature = line.substr(line.indexOf(" ") + 1);
      }
      return line

  },
  processMethod: (line='', descr='', commentObject={}, parentName = '', name = ' ', classMethod = false, isStatic = false) => {
    var m = {}
    var firstWord = line.split(' ',1)[0]
    var secondWord = line.split(' ',2)[1]
    var lastWord = line.split(':').pop()
    m['accessModifier'] = self.getAccessModifier(line)
    m['signature'] = self.getSignature(line)
    m['isStatic'] = isStatic

    if ( (firstWord.split('(')[0].includes('?')) || (secondWord === '?')) {
        m['isOptional'] = true
    }
    else {
        m['isOptional'] = false
    }
    m['descr'] = descr
    m['genericType'] = self.genericInside(line.split('(')[0])
    if (name === 'constructor') {
        m['returnType'] = parentName.replace(')', '').trim()
    }
    else {
        m['returnType'] = lastWord.replace(')', '').trim()
    }
    m['returnDescr'] = (commentObject['returnDescr'] === undefined) ?
      null : commentObject['returnDescr']
    m['params'] = self.buildParamList(line, commentObject['param'])
    return m
  },
  processProperty: (line='', descr='') => {
    var p = {}
    var firstWord = line.split(' ',1)[0]
    var secondWord = line.split(' ',2)[1]
    secondWord = secondWord || 'OBJECTERROR'
    var lastWord = line.split(':').pop()

    p['dataType'] = lastWord.replace(')', '').trim()
    p['accessModifier'] = firstWord

    if ( (firstWord.split('(')[0].includes('?')) || (secondWord === '?')) {
        p['isOptional'] = true
    }
    else {
        p['isOptional'] = false
    }


    p['type'] = lastWord.replace('[]', '').replace(')','')
    p['isCollection'] = (secondWord.includes('[]')) ? true : false
    p['descr'] = descr
    return p
  }
}
