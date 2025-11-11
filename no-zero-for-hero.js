function noZeroInLastNumbers(number) {
  let numberToString = String(number);
  while (numberToString.endsWith(0)) {
    numberToString = numberToString.slice(0, numberToString.length - 1);
  }
  return Number(numberToString);
}

console.log(noZeroInLastNumbers(5704000));

// 3420 >> 342
// 5704000 >> 5704
// 9023800 >> 90238
