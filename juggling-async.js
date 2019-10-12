const fetch = require('node-fetch');

const urls = process.argv.filter((url,index) => index > 1);
let promises = urls.map(x => {
    return fetch(x)
    .then(res => res.text());
});
Promise.all(promises)
.then(results => {
    results.map(x => console.log(x));
})