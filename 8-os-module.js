// built in function
const os = require('os')

// get user info about the current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`THe system uptime ${os.uptime()} seconds`)

const currentOS={
    name:    os.type(),
    release:  os.release(),
    totalMem:  os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS)