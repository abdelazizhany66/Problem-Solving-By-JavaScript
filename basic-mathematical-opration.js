function basicOpration(opration, value1, value2) {
  // if (opration == '/') return value1 / value2;
  // if (opration == '+') return value1 + value2;
  // if (opration == '-') return value1 - value2;
  // if (opration == '*') return value1 * value2;

  return eval(value1 + opration + value2)
}

console.log(basicOpration('+', 1, 2));
