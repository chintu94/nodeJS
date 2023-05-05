const { readFile } = require('fs');

//* For example we want to read data from a file and then write that data to another file, we will have something called as a Callback hell. To avoid it, we can use Promise.

const getFile = (path) => new Promise((resolve, reject) => {
  readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

(async () => {
  try {
    const fileData = await getFile('./public/read.txt');
    console.log('hey');
    console.log(fileData);
  } catch (error) {
    console.error(error);
  }
})();

//? We can also return Promisified async methods directly from the inbuilt libraries like fs just by adding .promises after the require function call, just like below :
//! const { readFile, writeFile } = require('fs').promises
