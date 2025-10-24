function squareOrSquareRoot(arr) {
  // return arr.map((number) =>
  //   // .isInteger return true or false if integre return true else return false
  //   Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number
  // );

  resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(Math.sqrt(arr[i]))) {
      resultArr.push(Math.sqrt(arr[i])); //if have sqrt return number else number * number
    } else {
      resultArr.push(arr[i] * arr[i]);
    }
  }
  return resultArr;
}

console.log(squareOrSquareRoot([1, 2, 3, 7, 4]));
