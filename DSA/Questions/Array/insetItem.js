function insertItem(item, index, arr){
  console.time('insertItem');
  const res = [];
  if (arr.length === 0) res[0] = item;
  else if (index < arr.length && index >= 0){
    let i = 0;
    while (i < arr.length){
      if (i === index){
        res.push(item);
      }
      res.push(arr[i]);
      i++;
    }
    //? another way to do this without create a new stack, make sure you return arr for the below code to work properly.
    // for (let i = arr.length - 1; i >= 0; i--) {
    //   if (i >= index) {
    //     arr[i+1] = arr[i];
    //     if (i === index) {
    //       arr[i] = item;
    //     }
    //   }
    // }
  }
  console.timeEnd('insertItem');
  return res;
};

const l = insertItem(900, -1, [7, 9, 9, 5, 6, 78, 34, 89]);
console.log(l);
//  [7, 9, 9, 5, 6, 78, 5, 34, 89]
// 5, 6
// [arr.slice(0, 6) , 5, arr.slice(7)]