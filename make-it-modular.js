// const mymodule = require('./mymodule');
const myReadDir = require('./mymodule');

const dirPath = process.argv[2];
const extensionFilter = process.argv[3];

// mymodule.myReadDir(dirPath, extensionFilter)
// .then(filteredFileList => filteredFileList.map(x => console.log(x)))
// .catch(error => console.log(error));

myReadDir(dirPath, extensionFilter, (err,filteredFileList)=>{
    if(err) 
        return console.log(err);
    
    return filteredFileList.map(x => console.log(x));
});