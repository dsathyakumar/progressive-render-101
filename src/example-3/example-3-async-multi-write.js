const server = require('http').createServer();
const port = 8080;

server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    var out = require('async-writer/debug').create(res, {
        shouldBuffer: true
    });
    out.write('<h1>A</h1>');
    var asyncOut = out.beginAsync();
    setTimeout(function () {
        asyncOut.write('<h1>B</h1>');
        asyncOut.end();
    }, 1000);
    out.write('<h1>C</h1>');
    var asyncOut2 = out.beginAsync();
    setTimeout(function () {
        asyncOut2.write('<h1>D</h1>');
        asyncOut2.end();
    }, 4000);
    out.end();
});
server.listen(port, () => {
    console.log(`Successfully started server on port ${port}`);
});