const http = require('http');
const fs = require('fs');

const PORT = process.argv[2];
const TEXTFILEPATH = process.argv[3];
const SERVER = http.createServer(listener);

//prepare text filestream first

SERVER.listen(PORT);

function listener(request, response){
    const textFileStream = fs.createReadStream(TEXTFILEPATH);    
    textFileStream.pipe(response);    
}