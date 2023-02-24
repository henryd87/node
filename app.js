//__dirname - path to a current directory
//__filename - file name
// require - function to use modules
//module -info about current module
//process - info about env where the program is being executed
console.log(__dirname);
// /workspaces/node
console.log(__filename);
// /workspaces/node/app.js

setInterval(()=>{
    console.log('hello')
},1000)