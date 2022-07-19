const bl = require('bl')
const http = require('http')
const url = process.argv[2]

http.get(url, callback)

function callback(response){
    response.setEncoding('utf8')
    response.pipe(bl(function(err, data){
        const str = data.toString()
        console.log(str)
        console.log(typeof str)
    }))
}