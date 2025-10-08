function digitize(n) {
  return n
    .toString()
    .split('') //convert string to aray such as ==> string : ['s','t','r','i','n','g']
    .map((m) => Number(m))
    .reverse();
}
console.log(digitize(23456789))