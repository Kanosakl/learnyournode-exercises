const sumOfArguments = process.argv.reduce((accum,curr,index) => {
    if(index < 2)
        return 0;

    return accum + Number(curr);
});

console.log(sumOfArguments);