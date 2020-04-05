var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var handler = require("./src/handler")

var message = 'I am so happy to be part of the Node Girls workshop!';

var server = http.createServer(handler);

server.listen(3000, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
})

