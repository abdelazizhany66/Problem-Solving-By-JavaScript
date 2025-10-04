// function sumPositiveValue(arr){
//   initValue = 0
//   for(i=0; i<arr.length; i++){
//     if(arr[i]>0){
//     initValue += arr[i]
//     }
//   }
//   return initValue
// }
// console.log(sumPositiveValue([1,2,-2,-2]))


function sumPositiveValue(arr){
  initValue = 0 //start value        //sorte value 
 return arr.filter((i)=> i>0).reduce((accumulator, currentValue)=>accumulator+ currentValue ,initValue)
}
console.log(sumPositiveValue([1,2,-2,-2]))


