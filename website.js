const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    
   
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    if(req.url === '/'){
    res.statusCode = 200;

        res.end('Wassup, CM_GoGo here!');
    }
    else if(req.url === '/api'){
    res.statusCode = 200;

        res.end('This is api');
    }
    else{
        res.statusCode = 404;
        res.end('Not found');
    }
 
});

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
