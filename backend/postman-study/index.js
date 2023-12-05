const http = require('http');
const port = 3000;

const app = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write('This is a write response')
        res.end('This is the end of the response')
    }
})

app.listen(port)

console.log(`Listening to port ${port}`)