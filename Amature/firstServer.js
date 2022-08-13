const http = require('http');

const data = {
    name: 'Chintu Sahu',
    age: 27,
    occupation: "Dev"
}

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    //* res.writeHead(200, { 'Content-Type': 'text/html' }); this is used to write html strings consisting tags
    res.write(JSON.stringify(data));
    res.end();
}).listen(8080);

