function countSheeps(arr){
  //1)
  // return arr.map((i)=> i == 'true').reduce((acc,current)=> acc+current,0 )

  //2)
  // let inilValue = 0
  // arr.map((i)=> {
  //   if(i === 'true') inilValue ++
    
  // })
  // return inilValue

  //3)
  let counter = 0
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === 'true') counter++
  }
  return counter
}

console.log(countSheeps(['true','false','true','true']))