<<<<<<< HEAD

=======
>>>>>>> 6282fdab93d485b53c1a1c15b83e2c8d7c383fd6
import FileOps from './fileops'

module.exports = {
  cleanupOutput: (path) => {
    let markdowns = FileOps.walkFiles(path)
    markdowns.forEach(name => FileOps.remove(`${path}/${name}`))
    console.log("** Cleaned output markdown folder")
  }
}
