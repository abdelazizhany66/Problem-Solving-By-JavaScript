function avarge(arr) {
  let totalNum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalNum += arr[i];
  }
  return totalNum / arr.length;
}
console.log(avarge([1,2,3]));
