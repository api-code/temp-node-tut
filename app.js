// npm -  global command, comes with node
// npm --version

//local depemdemcy - use it only in this particular project
// npm i <packagename>

// global dependepcy- use it in any project
// npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - mainifest file(stores imp info about project/packages)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y(everything default)

const _= require('lodash')

const items = [1,[2,[3,4,5]]]
const newItems = _.flattenDeep(items)
console.log(newItems)