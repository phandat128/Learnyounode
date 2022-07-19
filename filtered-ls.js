const fs = require('fs');

fs.readdir(process.argv[2], callback);

function callback(err, list){
    if (err){
        console.log("error");
        return;
    }
    for (const filename of list){
        if (filename.split('.')[1] == process.argv[3]) console.log(filename);
    }
}