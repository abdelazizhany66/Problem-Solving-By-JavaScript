function invertValues(array) {
  // return array.map((ele)=> -ele )
  
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(-array[i]);
  }
  return newArr;
}
console.log(invertValues([1, 2, -3, 4, 5]));
