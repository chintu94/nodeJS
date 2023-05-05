const http = require('http');

const data = {
    name: 'Chintu Sahu',
    age: 27,
    occupation: "Dev"
}

http.createServer((req, res) => {
  //* res.writeHead(200, { 'Content-Type': 'text/html' }); this is used to write html strings consisting tags
  if (req.url === '/'){
    res.write(`
      <h1>Your are in the Home page</h1>
    `)
  } else if (req.url === '/data'){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(data));
  } else {
    res.write(`
      <h1>Oops! Something went wrong</h1>
    `)
  }
  res.end();
}).listen(8080);

