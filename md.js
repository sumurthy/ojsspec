import FileOps from './modules/fileops'
import SetUp from './modules/setuproutine'
import Utils from './modules/utils'

let functionObj = {}
let iObj = {}
let classObj = {}
let enumObj = {}
let moduleT = []
let WRITE_BACK = ['#', '|', '*', '_' ]
let TAKE_ACTION = ['%']
let TAKE_REPEAT_ACTION = ['>']
let MARK_REGION = ['<']
let IGNORE = ['/']

function genModuleView(){


}

console.log('** Starting Program...')
SetUp.cleanupOutput('./markdown')

moduleT = FileOps.loadFile('./config/module.md')

let inputFiles = FileOps.walkFiles('./input', '.ts')
inputFiles.forEach((e) => {
	console.log(`\n*> Processing master: ${e}`);
	let files = FileOps.walkFiles('./json', e)
	processModule(files)
})

function processModule(files=[]) {

	files.forEach((e) => {
		console.log(`** Processing ${e}`)

		if (e.includes('_class.json')) {
			classObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
			console.log(`*** Read Class JSON file, ${Object.keys(classObj)}`)
		}
		else if (e.includes('_interface.json')) {
			iObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
			console.log(`*** Read Interface JSON file, ${Object.keys(iObj)}`)
		}
		else if (e.includes('_enum.json')) {
			enumObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
			console.log(`*** Read Enum JSON file, ${Object.keys(enumObj)}`)
		}
		else if (e.includes('_function.json')) {
			functionObj = JSON.parse(FileOps.loadJson(`./json/${e}`))
			console.log(`*** Read Function JSON file, ${Object.keys(functionObj)}`)
		}
		else {
			throw "Unrecognized file in inut JSON folder. Should be *_{class|enum|function|interface).json"
		}

		genModuleView()
	})
	//
	//  console.log(`interface = ${nInterface}, class = ${nClass}, function = ${nFunction}, enum = ${nEnum}`);
  // 	file_reset()
}
