const os = require('os')
//info about current user
const user = os.userInfo()
console.log(user)

//methods returns the system uptime in second
console.log(`sys uptime is ${os.uptime()}`)

const currentOS = {
  name:os.type(),
  release:os.release,
  totalMem:os.totalmem,
  freeMen:os.freemem,
}
console.log(currentOS)