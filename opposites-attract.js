function loveFun(flower1, flower2) {
  //solution 1
  // if (flower1 % 2 !== flower2 % 2) {
  //   return true;
  // } else {
  //   return false;
  // }
  // return flower1 % 2 !== flower2 % 2;
  // solution 2
  return (flower1 + flower2) % 2 != 0;
}
console.log(loveFun(3, 3));
