var sum = 0;
var length = process.argv.length;
for (let i = 2; i < length; i ++){
    sum += Number(process.argv[i]);
}

console.log(sum);
