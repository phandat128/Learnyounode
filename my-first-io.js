const fs = require('fs');

// console.log(process.argv[2]);

const file = fs.readFileSync(process.argv[2]).toString();

const array = file.split('\n');

console.log(array.length - 1);

