// every returns a boolean, therefore it is good to test
const numbers = [1, 2, 3];
const allPositive = numbers.every((value) => value >= 0);
console.log(allPositive);

// some returns a boolean, so it is easier to find true.

const numbers1 = [-1, -2, -3, -1];
const somePositive = numbers1.some((value) => value >= 0);
console.log(somePositive);
