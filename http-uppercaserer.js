const http = require('http');
const through2map = require('through2-map');

const PORT = process.argv[2];
const SERVER = http.createServer(listener);

SERVER.listen(PORT);

function listener(request, response) {
    if (request.method !== 'POST') {
        response.setStatusCode = 405;
        response.end();
        return;
    }

    request.pipe(through2map(streamToUpperCase))
    .pipe(response);
}

function streamToUpperCase(chunk){
    return chunk.toString().toUpperCase();
}