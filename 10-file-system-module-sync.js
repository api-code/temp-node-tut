// fs module - file module
// it has 2 falvor - we can do it
// 1. asynchronously non blocking
// 2. synchronously blocking

const {readFileSync, writeFileSync} = require('fs')
console.log('start')
// or
// const fs = require('fs')
// fs.readFileSync

// will read 2 files then we will create new file with write file sysnc
const first  =readFileSync('./content/first.txt','utf8')
const second  =readFileSync('./content/second.txt','utf8')

// console.log(first,second)

//it has 3 argunment {path,above variable,and obj flag-it will ovverride the text files}
writeFileSync('./content/result-sync.txt',`here is the result : ${first},${second}`,{flag:'a'})

console.log('done with this task')
console.log('startng the next one')
