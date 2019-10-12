const fs = require('fs');

const inputFile = process.argv[2];

const fileContent = fs.readFileSync(inputFile,{encoding:"utf8"});

const newlineCount = fileContent.split('\n').length - 1;

console.log(newlineCount);