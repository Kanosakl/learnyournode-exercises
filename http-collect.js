const http = require('http');

http.get(process.argv[2], res => {
    let data = '';

    res.on('data', receivedChunk => data += receivedChunk);
    res.on('end', () => {
        console.log(data.length);
        console.log(data);
    });

    res.setEncoding('utf8');
});