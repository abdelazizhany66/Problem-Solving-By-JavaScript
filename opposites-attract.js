function loveFun(flower1, flower2) {
  if (flower1 % 2 !== flower2 % 2) {
    return true;
  } else {
    return false;
  }
  // return flower1 % 2 !== flower2 % 2;
}
console.log(loveFun(3, 2));
