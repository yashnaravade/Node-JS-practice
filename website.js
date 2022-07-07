const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);

  if (req.url === "/") {
    res.statusCode = 200;
    const data = fs.readFileSync("./index.html", "utf8");
    res.end(data.toString());
  } else if (req.url === "/api") {
    res.statusCode = 200;

    res.end("This is api");
  } else if (req.url === "/index") {
    
    res.statusCode = 200;
  } 
  else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("This is about");
  }else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
