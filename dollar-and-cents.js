function formatMony(amount) {
  return `$${amount.toFixed(2)}`;
}

console.log(formatMony(2))