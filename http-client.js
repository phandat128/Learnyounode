const http = require('http');
const url = process.argv[2];

http.get(url,callback);

function callback(response){
    response.setEncoding('utf8');
    response.on('data', function(chunk){
        console.log(chunk);
    })
    response.on('error', () => {
        console.log('error');
    })
}