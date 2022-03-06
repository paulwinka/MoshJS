const numbers = [1, 2, 3, -1];

let sum = 0;

let stuff = numbers
  .filter((n) => n > 2)
  .reduce((total, start) => {
    return total + start;
  }, 0);

console.log(stuff);
