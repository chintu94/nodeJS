function deleteItem(item, arr){
  console.time('deleteItem');
  if (arr.length === 0) return;
  const res = [];
  let i = arr.indexOf(item);
  while (i < arr.length) {
    arr[i] = arr[i + 1];
    i++;
  } 
  arr.length = arr.length - 1;
  console.timeEnd('deleteItem');
  return arr;
}

const h = deleteItem(1, [1,6,4,9,2,0,5,3]);

console.log(h);