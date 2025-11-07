function position(letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return`alphabet is ${alphabet.indexOf(letter)+1}`;
  // for (let i = 0; i < alphabet.length; i++) {
  //   if (alphabet[i] === letter) {
  //     return `alphabet is ${i + 1}`;
  //   }
  // }
}

console.log(position('d'));
