function rentalCarCost(days) {
  let price = 40 * days;
  if (days < 3) return price;
  return days >= 7 ? price - 50 : price - 20;
}
console.log(rentalCarCost(5));
