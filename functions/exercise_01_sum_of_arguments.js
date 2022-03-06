// create a function that can take a series of numbers or an array and sum all the digits.
const sum = (...items) => {
  if (Array.isArray(items[0])) {
    return items[0].reduce((a, b) => a + b);
  }
  return items.reduce((a, b) => a + b);
};
const myArray = [1, 8, 9];
console.log(sum([1, 2, 3, 4]));
// console.log(sum(myArray));
