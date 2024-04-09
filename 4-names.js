//modules
//commmonJs, every file is module(by default)
//modules -encapsulated code(only share minimum)

//local
const secret = 'SUPER SECRET'

//share
const api = 'api'
const peter='peter'

//module is an object and api,peter is an properties, here we are exporting objects so we can access these outside the file
//exporting properties/variable
module.exports = {api,peter} 
// console.log(module)