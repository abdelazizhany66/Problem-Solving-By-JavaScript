function monkeyCount(num) {
  let count = [];
  let n = 0
  for(let i =1; i<=num; i++){
    count.push(i)
  }
  return count
}

console.log(monkeyCount(10));
