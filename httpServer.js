const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Wassup, CM_GoGo here!');
  
});

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
