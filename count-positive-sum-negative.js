function countPositiveSumNegative(arr) {
  // let countPositive = [];
  // let sumNegative = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > 0) {
  //     countPositive.push(arr[i]);
  //   } else {
  //     sumNegative += arr[i];
  //   }
  // }
  // return [countPositive.length, sumNegative];
  const countPositive =arr.filter((e)=> e>0).length 
  const sumNegative = arr.filter((e)=> e<0).reduce((acc,current)=> acc+current,0)
  return [countPositive,sumNegative]
}

console.log(countPositiveSumNegative([-1, -2, -3, 1, 2, 3]));
