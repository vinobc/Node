const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello World..\n");
});
server.listen(3000, "127.0.0.1", () => {
  console.log("server listening on http://127.0.0.1 at port 3000");
});
// node 001HelloWorld.js
// http://127.0.0.1:3000
