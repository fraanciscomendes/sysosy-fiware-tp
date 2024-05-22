const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3002;

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} received.`);
    
    let filePath = '';
    let contentType = '';

    if (req.url === '/') {
        filePath = path.join(__dirname, 'index.html');
        contentType = 'text/html';
    } else if (req.url === '/styles.css') {
        filePath = path.join(__dirname, 'styles.css');
        contentType = 'text/css';
    } else if (req.url === '/script.js') {
        filePath = path.join(__dirname, 'script.js');
        contentType = 'application/javascript';
    } else {
        res.statusCode = 404;
        res.end('404 Not Found');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end(`Error loading ${filePath}`);
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});