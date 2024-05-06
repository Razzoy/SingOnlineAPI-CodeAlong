import http from 'http';

http.createServer((request, response) => {
    console.log('Server is running on http://localhost:4000');
}).listen(4000)