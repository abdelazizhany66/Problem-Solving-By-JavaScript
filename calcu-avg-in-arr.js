function avarge(arr) {
  if (arr === null || arr.length === 0) return 0;
  const ele = arr.reduce((acc, current) => acc + current, 0);
  return ele / arr.length;

  // let totalNum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   totalNum += arr[i];
  // }
  // return totalNum / arr.length;
}
console.log(avarge([]));
