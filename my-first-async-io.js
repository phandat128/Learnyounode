const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', callback);

function callback(err, fileContent){
    if (err){
        console.log('error');
        return;
    } 
    const arr = fileContent.toString().split('\n');
    console.log(arr.length - 1);
}
