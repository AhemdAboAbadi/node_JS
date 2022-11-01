const http = require('http');


const sever = http.createServer();

sever.on('request', (req,res) => {
res.end('Welcome')
})

sever.listen(5000)