const BETWEEN_BRACKETS = /\(([^)]+)\)/;
const GENERIC_INSIDE  = /<(.*?)>/
module.exports = {

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
 		for (let i = 0; i < lines.length; i++){

		}
		for (var i = (current + 1) ; i < lines.length; i++) {
			line = lines[i]
			let line = line.replace(/\s+/g,' ').trim()
			let firstWord = line.split(' ',1)[0]
			let secondWord = line.split(' ',2)[1]

			if (firstWord === '*/' || ( secondWord !== undefined && secondWord.startsWith('@'))) {
				return o
			}
			else {
				o['skip'].push(i)
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
	getName: (name='') => {
		return name.split('(')[0]
	}
}
