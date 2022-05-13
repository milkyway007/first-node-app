const http = require('http');
const fs = require('fs');
const PORT = 5000;

const server = http.createServer((request, response) => {
    switch (request.url) {
        case '/':
            fs.readFile('./index.html', (error,data) => {
                response.statusCode = 200;
                response.setHeader('Content-Type', 'text/html');
                response.end(data);
            })
            break;

        case '/hello':
            fs.readFile('./hello.html', (error,data) => {
                response.statusCode = 200;
                response.setHeader('Content-Type', 'text/html');
                response.end(data);
            })
            break;

        default:
            response.statusCode = 404;
            response.setHeader('Content-Type', 'text/html');
            response.end('Not found');

    }
});

server.listen(PORT, () => {
    console.log('Server is running...');
});