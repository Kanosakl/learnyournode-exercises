const fs = require('fs');

const dirPath = process.argv[2];
const fileExtensionFilter = process.argv[3];

fs.promises.readdir(dirPath)
.then(fileList => {
    const filteredList = fileList.filter(x=> x.endsWith(`.${fileExtensionFilter}`));
    filteredList.map(x => {console.log(x)});
});