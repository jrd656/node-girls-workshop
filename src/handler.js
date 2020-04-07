var http = require('http');
var fs = require('fs');
var querystring = require('querystring');


var handler = function (request, response) {
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
    } else if (endpoint === '/script.js') {
        response.writeHead(200, { "Content-Type": "application/javascript" })
        fs.readFile(__dirname + "/../public/script.js", function (error, file) {
            if (error) {
                console.log(error)
                return;
            }
            response.end(file)
        })
        // TODO - write your generic endpoint code here
    } else if (endpoint === '/img/logo1.png') {
        response.writeHead(200, { "Content-Type": "image/apng" })
        fs.readFile(__dirname + "/../public/img/logo1.png", function (error, file) {
            if (error) {
                console.log(error)
                return;
            }
            response.end(file)
        });
    } else if (endpoint === '/favicon.ico') {
        response.writeHead(200, { "Content-Type": "image/x-icon" })
        fs.readFile(__dirname + "/../public/img/logo1.png", function (error, file) {
            if (error) {
                console.log(error)
                return;
            }
            response.end(file)
        });
    } else if (endpoint === '/create/post') {
        var allTheData = '';
        request.on('data', function (chunkOfData) {
            allTheData += chunkOfData;
        })
        request.on('end', function () {
            var convertedData = querystring.parse(allTheData);
            writePostJSON(convertedData, function () {

                response.writeHead(303, { "Location": "/" })
                response.end();
            });
        });
    } else if (endpoint === '/posts') {
        let dataFromReadFile = fs.readFile('./src/posts.json', 'utf-8', (err, data) => {
            if (err) throw err;
            console.log(JSON.parse(data));
            response.writeHead(200, { 'Content-Type': 'application/json' });
            // response.writeHead(303, { "Location": "/" })
            response.end(data);
        })


    }

}

function writePostJSON(postedObject, callback) {
    let dataFromReadFile = fs.readFile('./src/posts.json', 'utf-8', (err, data) => {
        if (err) throw err;
        var jsonObject = JSON.parse(data);
        var currentTime = Date.now()
        jsonObject[currentTime] = postedObject.post
        console.log(jsonObject)

        fs.writeFile('./src/posts.json', JSON.stringify(jsonObject), 'utf-8', (err) => {
            if (err) throw err;
            console.log('done writefile!')
            callback();
        })

    })
}

module.exports = handler;