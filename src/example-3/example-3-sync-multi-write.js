const server = require('http').createServer();
const port = 8080;

server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const out = require('async-writer/debug').create(res, {
        shouldBuffer: true
    })
        .on('error', function (err) {
            // Something went wrong during writing
        })
        .on('end', function (data) {
            // Value of output: "ABC"
        });

        out.write('<h1>A</h1>');
        out.write('<h1>B</h1>');
        out.write('<h1>C</h1>');
        out.end();
});
server.listen(port, () => {
    console.log(`Successfully started server on port ${port}`);
});
