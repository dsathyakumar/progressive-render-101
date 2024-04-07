const http = require('http');
const server = http.createServer();
const port = 8080;

server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.write(`
    <!DOCTYPE html>
        <html>
            <head>
                <title>Marko v3 Server Side Rendering</title>
            </head>
            <body>
                <h1>------Before everything--------</h1>`);
    setTimeout(() => {
        res.write(`Hello Frank! You have 30 messages!
        <ul>
            <li style="color: red"> Red </li>
            <li style="color: green"> Green </li>
            <li style="color: blue"> Blue </li>
        </ul>`);
    }, 3000);
    res.write(`    <h1>------After everything--------</h1>
    </body>
    </html>`);
    res.end();
  });
  
  server.listen(port, () => {
    console.log(`Successfully started server on port ${port}`);
  });
