function sumWithoutTheHighestAndTheLowestNumber(arr) {
  if (arr == null) return 0;
  return arr
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);

  //
  // const maxValue = Math.max(...arr)
  // const minValue = Math.min(...arr)
  // let result =  arr.filter((i)=> i !== maxValue && i !== minValue).reduce((acc,current)=> acc+current,0)
  // return result
}

console.log(
  sumWithoutTheHighestAndTheLowestNumber([1, 1, 2, 3, 10, 4, 5, 6, 10])
);
