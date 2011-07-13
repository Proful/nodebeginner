var http = require("http");
var url  = require("url"); 

function start(){
    http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request Received for: " + pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }).listen(process.env.C9_PORT);
}

exports.start = start;