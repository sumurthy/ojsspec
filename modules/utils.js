import * as crypto from 'crypto'

const BETWEEN_BRACKETS = /\(([^)]+)\)/;
const GENERIC_INSIDE = /\<([^)]+)\>/
const BLOCK_BEGIN = '{'
const BLOCK_END = '}'
const STATEMENT_END = [';', '{', '}']
const SKIP = ['*', '//', '/**', '///', '', '*/', '/*']

var self = module.exports = {
    /**
     * Retuns what's inside (parenthesis) or <generictype>. This is better than generics.
     * @param  {String}  [line='']         [description]
     * @param  {Boolean} [isGeneric=false] [description]
     * @return {[type]}                    [description]
     */
    inParen: (line='', isGeneric = false) => {
        var out = null
        if (!isGeneric) {
            var start = line.indexOf('(')
            var end = line.lastIndexOf(')')
        } else {
            var start = line.indexOf('<')
            var end = line.lastIndexOf('>')
        }

        if ((start === -1) || (end === -1)) {
            return out
        }
        else {
            var length = end - start -1
            out = line.substr(start+1, length)
            return out
        }
    },
    /**
     * Takes a string and returns last 5 bytes of SHA-256. Replaces special character with 9
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    sha256: (data)  => {
        var random = crypto.createHash("sha256").update(data).digest("base64")
        random = random.slice(-5).replace(/\W+/g, '9')
        return random
    },
    /**
     * Build param list
     * @param  {String} [line='']         [description]
     * @param  {Array}  [paramComment=[]] [description]
     * @return {[type]}                   [description]
     */
    buildParamList: (line = '', paramComment = []) => {
        var out = []
        // var p = BETWEEN_BRACKETS.exec(line)
        var p = self.inParen(line)
        if (!p) {
            return out
        }
        var parray = p.split(',').map((_) => _.trim()) //between brackets list
        // Build a parameter object.
        parray.forEach((e) => {
            var fp = {}
            fp['name'] = e.substring(0, e.indexOf(':')).replace('?', '').trim()
            fp['dataType'] = e.substring((e.indexOf(':') + 1)).trim()
            if (!fp['dataType']) {
                fp['dataType'] = null
            }
            fp['isOptional'] = false
            if (e.substring(0, e.indexOf(':')).includes('?')) {
                fp['isOptional'] = true
            }
            // For each element, determine if there is a @param description. If so, add description element to function object
            if (paramComment.length > 0) {
                paramComment.forEach((d) => {
                    if (d[0] === fp['name']) {
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

        for (var i = (current + 1); i < lines.length; i++) {
            let line = lines[i]
            line = line.replace(/\s+/g, ' ').trim()
            let firstWord = line.split(' ', 1)[0]
            let secondWord = line.split(' ', 2)[1]

            o['skip'].push(i)

            if (firstWord === '*/' || (secondWord !== undefined && secondWord.startsWith('@'))) {
                return o
            } else {
                o['descr'] = o['descr'] + ' \n' + line.substr(2)
            }
        }
        return o
    },

    unWrapStatement: (lines = [], current = 0) => {
        let o = {}
        o['skip'] = []
        o['line'] = self.compact(lines[current])
        for (var i = (current + 1); i < lines.length; i++) {
            let line = lines[i].split('//')[0].trimRight()
            o['line'] = o['line'] + self.compact(line).trim()
            o['skip'].push(i)
            if (STATEMENT_END.includes(line.slice(-1))) {
                return o
            }
        }
        return o
    },
    compact: (line='') => {
        line = line.split('//')[0].trimRight()
        line = line.replace(/\s+</g,'<') //Replace space+< to just <.
        line = line.replace(/<\s+/g,'<') //Replace space+< to just <.
        line = line.replace(/\s+>/g,'>') //Replace space+< to just <.
        line = line.replace(/\s+:/g,':') //Replace space+: to just : (helps with funcion detection).
        line = line.replace(/\s+\?/g,'?') //Replace space+: to just : (helps with funcion detection).
        return line
    },
    genericInside: (str = '') => {
        //var g = GENERIC_INSIDE.exec(str)
        var g = self.inParen(str, true)
        if (g) {
            return g.trim()
        } else {
            return null
        }
    },

    trimGenerics: (str = '') => {
        var n = str.split('<')[0]
        if (n) {
            return n.trim()
        } else {
            return n
        }
    },
    getMethodName: (line = '', withOptional = false) => {
        var name = line.split('(')[0]  //take left of '(' character
        name = self.stripQualifier(name)
        if (!withOptional) name = name.replace('?', '')
        name = name.replace(':', '')
        name = name.replace(/\s+/g, '') //remove spaces
        if (name === 'new') {
            name = name.replace('new', 'constructor')
        }
        //name = name + '~' + (Math.floor(Math.random() * 90000) + 10000)
        if (!withOptional) {
            return name + '~' + self.sha256(name)
        } else {
            return name
        }

    },

    cleanupName: (name = '') => {
        return name.split(':')[0].split('=')[0].replace('?', '').trim()
    },

    getPropName: (name = '', removeOptional = true) => {
        var o = name.replace(':', '')
        if (removeOptional) {
            return o.replace('?','')
        } else {
            return o
        }

    },

    readObjectAhead: (lines = [], current = 0) => {
        let o = {}
        o['obj'] = {}
        o['skip'] = []

        for (var i = current; i < lines.length; i++) {
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
    getSignature: (line = '') => {
        var signature = ''
        if (line.includes('constructor')) {
            signature = line
        } else {
            signature = line.substr(line.indexOf(" ") + 1);
        }
        return line

    },
    processMethod: (line = '', descr = '', commentObject = {}, parentName = '', name = ' ', isStatic = false) => {
        var m = {}
        var firstWord = line.split(' ', 1)[0]
        var secondWord = line.split(' ', 2)[1]
        var lastWord = line.split(':').pop()
        m['accessModifier'] = self.getAccessModifier(line)
        m['signature'] = self.getSignature(line)
        m['isStatic'] = isStatic

        if ((self.getMethodName(line, true)).includes('?')) {
            m['isOptional'] = true
        }
        else {
            m['isOptional'] = false
        }

        m['descr'] = descr
        m['genericType'] = self.genericInside(line.split('(')[0])
        if (name === 'constructor') {
            m['returnType'] = parentName.replace(')', '').trim()
        } else {
            m['returnType'] = lastWord.replace(')', '').trim()
        }
        m['returnDescr'] = (commentObject['returnDescr'] === undefined) ?
            null : commentObject['returnDescr']
        m['params'] = self.buildParamList(line, commentObject['param'])
        return m
    },
    processProperty: (name = '', line = '', descr = '', assignValue = null, isClass = true) => {
        var p = {}
        var lastWord = line.split(':').pop()
        var firstWord = line.split(' ')[0]
        p['dataType'] = lastWord.replace(')', '').trim()
        if (isClass) {
            p['accessModifier'] = firstWord
        }
        else {
            p['accessModifier'] = null
        }

        if (name.includes('?')) {
            p['isOptional'] = true
        } else {
            p['isOptional'] = false
        }

        if (line.includes(')') && line.includes('(')) {
            p['dataType'] = 'function'
            p['function'] = '(' + self.inParen(line) + ')'
            p['returnType'] = line.split('=>')[1].trim()
        }
        else {
            p['dataType'] = lastWord.replace('[]', '').replace(')', '').trim()
            p['function'] = null
            p['returnType'] = null
        }
        p['assignValue'] = assignValue
        p['isCollection'] = (name.includes('[]')) ? true : false
        p['descr'] = descr
        return p
    },
    createClassInterfaceObject: (extendsImplementsName = '', rawGenericsInside = '', descr = '') => {
        var o = {}
        o['implementsExtendsName'] = extendsImplementsName
        o['genericType'] = self.genericInside(rawGenericsInside)
        o['descr'] = descr
        o['properties'] = {}
        o['functions'] = {}
        o['methods'] = {}
        o['objects'] = {}
        return o
    },
    getMemberType: (line = '', isClass = true) => {
        let firstWord = line.split(' ', 1)[0]
        let secondWord = line.split(' ', 2)[1]
        var type = ''
        if (line.includes(BLOCK_BEGIN) && !line.includes(BLOCK_END)) {
            type = 'SKIPBLOCK'
        } else if (firstWord.startsWith('constructor') || secondWord.startsWith('constructor')) {
            type = 'METHOD'
        } else {
            //line = self.stripQualifier(line)
            var colon = line.indexOf(':')
            var paren = line.indexOf('(')
            if (paren == -1 && colon == -1) {
                type == 'UNDEFINED'
            } else if (colon == -1 && paren > 0) {
                type = 'METHOD'
            } else if (paren == -1 && colon > 0) {
                type = 'PROPERTY'
            } else if (colon < paren) {
                type = 'PROPERTY'
            } else if (colon > paren) {
                type = 'METHOD'
            }
        }
        //console.log(type + ' **** ' + line);
        return type
    },
    stripQualifier: (line='') => {
        line = line.replace('public ', '')
        line = line.replace('function ', '')
        line = line.replace('private ', '')
        line = line.replace('protected ', '')
        line = line.replace('static ', '')
        line = line.replace('export ', '')
        return line
    }
}
