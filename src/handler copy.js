var http = require('http');
var fs = require('fs');
var querystring = require('querystring');


var handler = function(request, response) {
    var endpoint = request.url;

    if (endpoint === '/') {
        response.writeHead(200, { "Content-Type": "text/html" })
        console.log(__dirname)
        fs.readFile(__dirname + '/../public/index.html', function (error, file) {
            if (error) {
                console.log(error)
                return;
            }
            response.end(file)
        })
    } else if (endpoint === '/node') {
        response.writeHead(200, { "Content-Type": "text/html" })
        fs.readFile(__dirname + "/../public/node.html", function (error, file) {
            if (error) {
                console.log(error)
                return;
            }
            response.end(file)
        })
        //...
    } else if (endpoint === '/girls') {
        response.writeHead(200, { "Content-Type": "text/html" })
        fs.readFile(__dirname + "/../public/girls.html", function (error, file) {
            if (error) {
                console.log(error)
                return;
            }
            response.end(file)
        })
        //...
    } else if (endpoint === '/main.css') {
        response.writeHead(200, { "Content-Type": "text/css" })
        fs.readFile(__dirname + "/../public/main.css", function (error, file) {
            if (error) {
                console.log(error)
                return;
            }
            response.end(file)
        })
        // TODO - write your generic endpoint code here
    } else if (endpoint === '../img/image.jpg') {
        response.writeHead(200, { "Content-Type": "image/jpeg" })
        fs.readFile(__dirname + "/../public/img/image.jpg", function (error, file) {
            if (error) {
                console.log(error)
                return;
            }
            response.end(file)
        })
        // TODO - write your generic endpoint code here
    } else if (endpoint === '/create-post'){
        var allTheData = '';
        request.on('data', function (chunkOfData) {
            allTheData += chunkOfData;
        });
    
        request.on('end', function () {
            var convertedData = querystring.parse(allTheData);
            console.log(convertedData)
            response.writeHead(303, {"Location" : "/"})
            response.end();
        })
    }

}

module.exports = handler;