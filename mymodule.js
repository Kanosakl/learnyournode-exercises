const fs = require('fs');

// module.exports = async function myReadDir(path, extensionFilter){
//     return fs.promises.readdir(path)
//     .then(fileList => {
//         return fileList.filter(x => x.endsWith(`.${extensionFilter}`));
//     })
//     .catch(error => {
//         console.warn(error);
//         return [];
//     })
// }
module.exports = function myReadDir(path, extensionFilter, callback){
    fs.readdir(path, (err, fileList)=>{
        if(err){
            return callback(err);
        }

        return callback(null, fileList.filter(x => x.endsWith(`.${extensionFilter}`)));
    });
}

// module.exports = {myReadDir}