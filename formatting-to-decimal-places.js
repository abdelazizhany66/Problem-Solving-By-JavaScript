function FormattingToDecimalPlaces(n) {
  // return Number(n.toFixed(2))
  return Math.round(n *100)/100;
}

console.log(FormattingToDecimalPlaces(2.333333333333333));
