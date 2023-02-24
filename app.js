//os module provide methods for operating systems.
const os = require('os')
//const{os.specific} //to deconstructure os
const user = os.userInfo();
console.log(user)
//logs uuid, username, homedir

console.log(`The system uptime is ${os.uptime}`);
//idk what this does lol

const currentOS ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),

}
console.log(currentOS);
//logs random stuff