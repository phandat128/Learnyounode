const fs = require('fs')

function mymodule(dir_name, ext, callback){
    fs.readdir(dir_name, function(err,list){
        if (err) return callback(err);
        var filtered_list = [];
        for (const filename of list){
            if (filename.split('.')[1] === ext) filtered_list.push(filename);
        }
        return callback(null, filtered_list);
    })
}

module.exports = mymodule;