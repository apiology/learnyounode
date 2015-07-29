var fs = require('fs');

var filename = process.argv[2];
contents = fs.readFileSync(filename);
console.log(contents.toString().split('\n').length - 1);
