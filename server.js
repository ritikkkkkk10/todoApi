var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type':'text/plain'
    });
    response.end("Hello Node");
}).listen(3000, console.log("server is running on port: 3000"));