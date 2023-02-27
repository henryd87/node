const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Home page")
    } if(req.url === '/about'){
        res.end("About page")
    }
    for(let i =0;i<1000;i++){
        for(let j=0; j<1000; j++){
            console.log(`${i} and ${j}`)
        }
    }
    res.end(`<h1>Oops!</h1>
    <h2>404 page not found</h2>
    <a href="/">Back home</a>`)
})

server.listen(5000,()=>{
    console.log("Listening on port 5000")
})