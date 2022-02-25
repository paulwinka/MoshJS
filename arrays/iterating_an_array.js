// FOR OF method
const numbers = [1, 2, 3];
const iterator = (numbers) => {
  for (let number of numbers) {
    console.log(number);
  }
};
iterator(numbers);

// FOR EACH method
// the index appears to be a built-in automatic second parameter.

const listNumbers = numbers.forEach((number, index) => console.log(index, number));
