var http = require('http');
var fs = require('fs');

var message = 'I am so happy to be part of the Node Girls workshop!';

var server = http.createServer(handler);

function handler (request, response){
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write(message);
    response.end();
    var endpoint = request.url;

    if(endpoint === '/'){
        response.writeHead(200,{"Content-Type": "text/html"})

        fs.readFile(__dirname + '/public/index.html', function(error,file){
            if(error){
                console.log(error)
                return;
            }
            response.end(file)
        })
    }

    if(request.url === "/node"){
        console.log("we got node", request.url, request.method)
    }
    else if (request.url === "/girls"){
        console.log("we got girls", request.url, request.method)
    }
}

server.listen(3000, function(){
    console.log("Server is listening on port 3000. Ready to accept requests!");
})

