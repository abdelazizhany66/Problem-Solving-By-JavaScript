function countBy(x, n) {
  let newArray = [];
  // for (let i = 0; i < n; i++) {
  //   newArray.push(x * (i + 1));
  // }
  
   for (let i = 1; i <= n; i++) {
    newArray.push(x * i );
  }
  return newArray;
}

console.log(countBy(1, 10));
