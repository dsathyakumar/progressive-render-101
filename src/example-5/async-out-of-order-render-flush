const EventEmitter = require('events').EventEmitter;
const server = require('http').createServer();
const port = 8080;

/**
* This function serves like an SSE end point which pushes data.
* Data is emitted in chunks here.
*/
function getDataEmitter() {
    const ee = new EventEmitter();
    let i = 0;

    function getData() {
        i = i + 1;
        ee.emit('data', i);
        if (i < 5) {
            setTimeout(getData, 1000);
        } else {
            ee.emit('end');
        }
    }

    process.nextTick(getData);
    return ee;
}

server.on('request', (req, res) => {
    const out = require('async-writer').create(res);
    const asyncOut = out.beginAsync({
        timeout: 0
    });
    const dataEmitter = getDataEmitter();
    asyncOut.write('<h1>Hello world!</h1>');
    dataEmitter.on('data', function (data) {
        console.log('data!');
        asyncOut.write('<noscript><h3>' + data + '</h3></noscript>');
        asyncOut.flush();
    });
    dataEmitter.on('end', function () {
        asyncOut.write(`
            <script>
                console.log('executing script...');
                (function(){
                    const noscripts = document.getElementsByTagName('noscript');
                    const placeholder = document.querySelector('#placeholder');
                    let data = '';
                    console.log(placeholder);
                    Array.from(noscripts).forEach(function (noscript) {
                        data = data + noscript.innerHTML;
                    });
                    if (placeholder) {
                        placeholder.innerHTML = data;
                    }
                })();
            </script>
        `);
        asyncOut.flush();
        asyncOut.end();
    });
    asyncOut.write('<div id="placeholder"></div>');
    asyncOut.write('<h1>Bye world</h1>');
    out.end();
});

server.listen(port, () => {
    console.log(`Successfully started server on port ${port}`);
});
