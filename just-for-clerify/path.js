const path = require('path')
console.log(path.sep)

const filePath = path.join('/content','just-for-clerify','file.js')
console.log(filePath)

const absolute=path.resolve(__dirname,'content','just-for-clerify','file.js')
console.log(absolute)