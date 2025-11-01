function removingElemints(arr) {
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (i % 2 === 0) {
  //     newArr.push(arr[i]);
  //   }
  // }
  // return newArr;
  return arr.filter((a, i) => i % 2 === 0); //return any value the index %2 === 0
}

console.log(
  removingElemints(['Keep', 'Remove', 'Keep', 'Remove', 'Keep', 'Remove'])
);
