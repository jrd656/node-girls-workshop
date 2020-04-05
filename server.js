var http = require('http');
var fs = require('fs');

var message = 'I am so happy to be part of the Node Girls workshop!';

var server = http.createServer(handler);

function handler(request, response) {

    var endpoint = request.url;

    if (endpoint === '/') {
        response.writeHead(200, { "Content-Type": "text/html" })
        fs.readFile(__dirname + '/public/index.html', function (error, file) {
            if (error) {
                console.log(error)
                return;
            }
            response.end(file)
        })
    } else if (endpoint === '/node') {
        response.writeHead(200, { "Content-Type" : "text/html"})
        fs.readFile(__dirname + "/public/node.html", function (error,file){
            if(error){
                console.log(error)
                return;
            }
            response.end(file)
        })
        //...
    } else if (endpoint === '/girls') {
        response.writeHead(200, { "Content-Type" : "text/html"})
        fs.readFile(__dirname + "/public/girls.html", function (error,file){
            if(error){
                console.log(error)
                return;
            }
            response.end(file)
        })
        //...
    } else if (endpoint === '/main.css'){
        response.writeHead(200, { "Content-Type" : "text/css"})
        fs.readFile(__dirname + "/public/main.css", function (error,file){
            if(error){
                console.log(error)
                return;
            }
            response.end(file)
        })
        // TODO - write your generic endpoint code here
    } else if (endpoint === '/img/image.jpg'){
        response.writeHead(200, { "Content-Type" : "image/jpeg"})
        fs.readFile(__dirname + "/public/img/image.jpg", function (error,file){
            if(error){
                console.log(error)
                return;
            }
            response.end(file)
        })
        // TODO - write your generic endpoint code here
    }
}

server.listen(3000, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
})

