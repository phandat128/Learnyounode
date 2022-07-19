const mymodule = require('./mymodule.js')

const dir_name = process.argv[2];
const ext = process.argv[3];

mymodule(dir_name, ext, function(err, list){
    if (err) {
        console.log('error');
        return;
    }
    for (const e of list) console.log(e);
});
