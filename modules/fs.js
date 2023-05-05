const fs = require('fs');

//! This is the sync , blocking version of reading a writing files using NodeJS
//* const readme = fs.readFileSync('./public/read.txt', 'utf-8');
//! Creating a file
//* fs.writeFileSync('./public/write.txt', readme.concat('This is an updated file using NodeJS'))

//* console.log(fs.readFileSync('./public/write.txt', 'utf-8'));


//! This is the sync or non-blocking verion of the same

/*
* fs.readFile('./public/write.txt', 'utf-8', (err, data) => {
*    if(!err) {
*        fs.writeFile('./public/syncWrite.txt', data.concat('This is added using non blocking code.'), (err) => {
*            if(err) console.error(err);
*        })
*    }
* });
*/

//! Deleting files and creating directories 
/*
* fs.unlink('./public/write.txt', (err, success)=> {
*     if(success) console.log('write.txt deleted!!')
* });
*/

//! Creating directories blocking code
//* fs.mkdirSync('./public/SyncFolder');
//! deleting directories blocking code
//* fs.rmdirSync('./public/SyncFolder');

//! Creating directories non-blocking code
/*
fs.mkdir('./public/SyncFolder', (err)=>{
    if(!err){
        fs.writeFile('./public/SyncFolder/postCreation.txt', 'this is in SyncFolder', (err) => err && console.error(err));
    };
});
*/
//? we cannont remove a directory without it being empty so firest unlink all the files in that folder and then delete the folder like below

fs.unlink('./public/SyncFolder/postCreation.txt', (err) => {
    if(!err) fs.rmdir('./public/SyncFolder', (err) => err && console.error(err));
})



