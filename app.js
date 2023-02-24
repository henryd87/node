//Modules
const names = require('./4-names')
const sayHi = require('./5-utils')
console.log(names)
// Returns { john: 'john', peter: 'peter' }
sayHi('Harry')
sayHi(names.john)
sayHi(names.peter)