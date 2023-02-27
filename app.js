const http = require('http')
//http allows us to send get,post etc requests.
const server = http.createServer((req,res)=>{
//created the server
    //req is incoming request
    //res is what we are sending back
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Hello to about')
    }
    res.end(`<h1>Oops!</h1><hr><h3>We don't have
     the page you're looking for</h3>
     <a href="/">Back home</a> `)
    //do localhost:5000 to see this.
})

server.listen(5000)
