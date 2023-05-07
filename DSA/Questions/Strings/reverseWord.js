//! my approch

(function (str){
  console.time("itu's code");
  const strArr = str.split(' ');
  let newstr= []
  for(let i=strArr.length-1;i>=0;i--){
    newstr.push(strArr[i]);
  }
  console.log(newstr.join(' '));
  console.timeEnd("itu's code");
})('i love pune');



