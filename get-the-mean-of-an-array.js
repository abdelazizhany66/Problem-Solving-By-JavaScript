function getAverage(marks){
  // let sum =0
  // let avarage;
  // for(let i=0; i<marks.length; i++){
  //   sum += marks[i]
  // }
  // avarage = sum / marks.length
  // return Math.floor(avarage)
  return Math.floor(marks.reduce(((acc,current)=> acc+current),0)/marks.length)
}

console.log(getAverage([23,43,56,76,43,23]))