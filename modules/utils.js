module.exports = {

  /**
  * This buils the parameter list object and matches that with the parameter comment (if any).
  *
  */
  buildParamList: (paramString = '', paramComment = []) => {
    var out = []
    if (paramString === null) {
      return out
    }

    if (paramString !== null) { //anything between brackets?
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
    }
    return out
  }

  readAhead: (lines = []) => {

    return []
  }
}
