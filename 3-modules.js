
//here we are taking exported module objects in require module
//module object - properties/variale
const names = require('./4-names')
//module object - function
const sayHi = require('./5-utils')

const data = require('./6-alternative-sol')
//we can invoke module direclty like this
require('./7-mind-grenade')

// console.log(data)
// console.log(sayHi)

// sayHi('susan')
// sayHi(names.api)
// sayHi(names.peter)
