function calcAvgHeight(data) {
  // Calculate average height from received data. If no data, return null.
  const numberOfPerson = Object.keys(data || {}).length;
  if (numberOfPerson === 0) return null;
  const values = Object.values(data);
  let totalHeight = 0;
  for (let i of values){
    totalHeight += i.height;
  }
  return totalHeight/numberOfPerson;
}

var avgHeight = calcAvgHeight({
  Matt: { height: 174, weight: 69 },
  Jason: { height: 190, weight: 103 }
});
// console.log(avgHeight);


function numberOfItems(arr, item) {
  // Write the code that goes here
  let total = 0;
  for (let element of arr) {
    if (Array.isArray(element)) {
      total += numberOfItems(element, item); 
    } else {
      if (element === item) {
        total += 1;
      }
    }
  }
  return total;
}

var arr = [
  25,
  "apple",
  ["banana", "strawberry", "apple", 25]
];
// console.log(numberOfItems(arr, 25));
// console.log(numberOfItems(arr, "apple"));

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//! Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
function solution(A) {
  // Implement your solution here
  const sortedArray = A.sort((a,b) => a-b);
  let ans = undefined;
  let largestNum = sortedArray[sortedArray.length - 1];
  for (let i = largestNum; i> 0; i--){
      if (!A.includes(i)){
          ans = i;
          break;
      }
  }
  if (!ans){
      if (largestNum < 0){
          ans = 1
      }else{
          ans = largestNum + 1
      }
  }
  return ans;
}

/**





 */