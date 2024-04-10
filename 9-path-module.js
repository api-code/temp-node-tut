
const path = require('path')

console.log(path.sep)

//it will return path from \content\just-for-clerify\file.js
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//it will return base file name - 9-path-module.js
const base=path.basename(filePath)
console.log(base)

//it will return all directory path from d directory
const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)