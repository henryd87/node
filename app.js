const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response',()=>{
    console.log(`data received`)
})

customEmitter.on('response',(name,id)=>{
    console.log(`data received with ${name} and ${id}`)
})

customEmitter.emit('response','john',34)