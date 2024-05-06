import http from 'http';

const port = 5040;

http.createServer((request, response) => {
    console.log(`Server is running on http://localhost:${port}`);
    response.writeHead(200,{ 'Content-Type': 'text/plain' });
    response.write('Hello World');
    response.end();
}).listen(port)