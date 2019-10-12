const http = require('http');


http.get(process.argv[2],response => {
    const {statusCode} = response;
    const contentType = response.headers['content-type'];
    
    if(statusCode < 200 && statusCode > 299) {
        console.warn(statusCode);
        response.resume();
        return -1;
    }

    response.setEncoding('utf8');
    let rawData = '';

    response.on('data', data => console.log(data));
});