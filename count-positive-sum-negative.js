function countPositiveSumNegative(arr) {
  let countPositive = [];
  let sumNegative = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPositive.push(arr[i]);
    } else {
      sumNegative += arr[i];
    }
  }
  return [countPositive.length, sumNegative];
}

console.log(countPositiveSumNegative([-1, -2, -3, 1, 2, 3]));
