//! Binary search with reccursion
function findItem(item, arr, start, end) {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === item) return true;
  if (arr[mid] > item) {
    return findItem(item, arr, start, mid - 1);
  }else{
    return findItem(item, arr, mid + 1, end);
  }
};
const array = [1,6,4,9,2,0,5,3];
const item = 90
console.log(findItem(item, array, 0, array.length));