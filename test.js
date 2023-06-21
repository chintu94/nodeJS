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
console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));