const http = require("http");

const sever = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello in home page</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello in about page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

sever.listen(5000);
