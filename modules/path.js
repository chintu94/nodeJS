const path = require('path');

//? returns the path seperator
console.log(path.sep);

const filePath = path.join('../public', 'read.txt');

console.log(filePath);

//? to get the file name we can do

console.log(`This is the file name: ${path.basename(filePath)}`);

//? To return an absolute path we can use resolve method, this is very useful as our application will run in different environments/machines so ofcourse the path for some file will be different in each machine

console.log(`The absolute path to this file is ${path.resolve(filePath)}`);

