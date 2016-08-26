const BETWEEN_BRACKETS = /\(([^)]+)\)/;
const GENERIC_INSIDE  = /<(.*?)>/
const BLOCK_BEGIN = '{'
const BLOCK_END = '}'
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
    var parray = paramString.split(', ') //between brackets list
       // Build a parameter object.
    parray.forEach((e) => {
         var ta = e.split(':').map((_) => _.trim())
         var fp = {}
         fp['name'] = ta[0]
         fp['dataType'] = ta[1]
         fp['descr'] = ''
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
			line = lines[i]
			let line = line.replace(/\s+/g,' ').trim()
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

	getName: (name='') => {
		return name.split('(')[0]
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
  processMethod: (line='', descr='', commentObject={}, parentName = '', name = ' ', classMethod = false) => {
    var m = {}
    var firstWord = line.split(' ',1)[0]
    var secondWord = line.split(' ',2)[1]
    var lastWord = line.split(':').pop()

    if (classMethod) {
      m['accessModifier'] = firstWord
      if (name === 'constructor') m['accessModifier'] = 'public'
    }
		if (line.includes('constructor')) {
			m['signature'] = line
		}
		else {
			m['signature'] = line.substr(line.indexOf(" ") + 1);

		}
    m['descr'] = descr
    m['genericType'] = self.genericInside(line.split('(')[0])
    if (name === 'constructor') {
        m['returnType'] = parentName
    }
    else {
        m['returnType'] = lastWord.trim()
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
    var lastWord = line.split(':').pop()

    p['dataType'] = lastWord.trim()
    p['accessModifier'] = firstWord
    p['isOptional'] = (secondWord.includes('?')) ? true : false
    p['type'] = lastWord.replace('[]', '')
    p['isCollection'] = (secondWord.includes('[]')) ? true : false
    p['descr'] = descr
    return p
  }
}
