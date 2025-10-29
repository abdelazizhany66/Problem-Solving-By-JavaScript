function areYouPlayBanjo(name) {
  //1)
  // if(name.charAt(0) === 'r' || name.charAt(0) === 'R'){
  //   return `${name} play banjo `
  // }else{
  //   `${name} does not play banjo`
  // }

  //2))
  // return name[0] === 'r' || name[0] === 'R'
  //   ? `${name} play banjo `
  //   : `${name} does not play banjo`;

  //3))
  return /^r/i.test(name)
    ? `${name} play banjo `
    : `${name} does not play banjo`;
}
console.log(areYouPlayBanjo('karim'));
