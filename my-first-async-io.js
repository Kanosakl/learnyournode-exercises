const fs = require('fs');

let inputFilepath = process.argv[2];

fs.promises.readFile(inputFilepath, "utf-8")
.then(fileContent => {
    let splittedString = fileContent.split('\n');
    console.log(splittedString.length - 1);
})