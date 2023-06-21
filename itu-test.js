function calcAvgHeight(data) {
  // Calculate average height from received data. If no data, return null.
  let total = Object.keys(data).length;
  let averageHeight=0;

for (const i in data) {
  averageHeight += data[i].height;
}

console.log(averageHeight);
console.log(total);
return averageHeight/total;


}

var avgHeight = calcAvgHeight({
  Matt: { height: 174, weight: 69 },
  Jason: { height: 190, weight: 103 },
  chutiya: { height: 190, weight: 103 },
  Jasganduon: { height: 190, weight: 103 },
  gand: { height: 190, weight: 103 },
});
console.log(avgHeight);

