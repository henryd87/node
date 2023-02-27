const {readFile} = require('fs')
console.log('check')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }else{
        console.log(result);
    }
    console.log('completed this task')
})


console.log('done')