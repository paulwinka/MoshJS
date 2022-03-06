const numbers = [1, 2, 3, 4, 1, 1];

const countOccurences = (array, searchElement) => {
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
};

const count = countOccurences(numbers, 1);
console.log(count);

// const output = [...array];
// const myArray = output.filter((n) => n === searchElement);
// return myArray.length;
