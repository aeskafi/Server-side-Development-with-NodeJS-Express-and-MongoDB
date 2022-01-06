const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('Request for ' + req.url + ' by method ' + req.method);

    if (req.method === 'GET') {
        var fileUrl;
        if (req.url == '/') fileUrl = 'index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public/' + fileUrl);
        var fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) { //404 not found
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    res.end('<html><body><h1>Error 404: ' + fileUrl + ' not found</h1></body></html>')
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                fs.createReadStream(filePath).pipe(res);
                return;
            })
        } else { //404 not supported
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end('<html><body><h1>Error 404: ' + fileUrl + ' not a HTML file</h1></body></html>')
            return;
        }

    } else { //404 method is not supported
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<html><body><h1>Error 404: ' + req.method + ' not supported</h1></body></html>')
        return;
    }

    // console.log(req.headers);
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // res.end('<html><body><h1>Hello, World!</h1></body></html>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})