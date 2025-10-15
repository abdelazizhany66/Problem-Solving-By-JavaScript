function squareOrSquareRoot(arr) {
  return arr.map((number) =>
    // .isInteger return true or false if integre return true else return false
    Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number
  );
}

console.log(squareOrSquareRoot([1, 2, 3, 7, 4]));
