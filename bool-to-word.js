function boolToWord(bool) {
  if (bool === true) {
    return 'Yes';
  } else {
    return 'No';
  }
  // return bool ? 'Yes' : 'No';
}

console.log(boolToWord(false));
