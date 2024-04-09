// 2. asynchronously blocking
// we need to provide a callback - it means if e run that callback when we are done, when whatevre functionality we are doing is complete then will run callback

const {readFile, writeFile} = require('fs')


//{1st arg -path, second aeg - callback fun- in this fun {error,result}}
//here we are doing setup for only 1 file
// so how we can 2 this same for 2 differnt file
// readFile('./content/first.txt','utf8',(err,result)=>{
//   if(err){
//     console.log(err)
//     return 
//   }
//   console.log(result)
// })

readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err)
    return
  }
  const first=result
  readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
      console.log(err)
      return
    }
    const second = result
    writeFile('./content/result-async.txt',`here is my result : ${first},${second}`,(err,result)=>{
      if(err){
        console.log(err)
        return
      }
      console.log(result)
    })
  })
})

