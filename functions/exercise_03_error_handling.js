const numbers = [1, 2, 3, 4];

function countOccurrences(array, searchElement) {
  try {
    if (!Array.isArray(array)) throw new Error('This is not an array');
    return array.reduce((accumulator, current) => {
      const occurrence = current === searchElement ? 1 : 0;
      return accumulator + occurrence;
    }, 0);
  } catch (e) {
    console.log(e);
  }
}

const count = countOccurrences(numbers, 1);
console.log(count);
