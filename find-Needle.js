function findNeedle(arr){
  // for(let i =0; i<arr.length; i++){
  //   if(arr[i] == 'needle'){
  //     return `found the ${arr[i]} at position ${i} `
  //   }
  // }
  return `found the needle at position `+ arr.indexOf('needle')
}


console.log(findNeedle(['shank','sheep','tssss','nkonko','cr7','needle']))