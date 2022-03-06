// 03 except
// first is my solution

const justNumbersArray = [1, 2, 3, 4, 1, 1];
const exceptionArray = [1, 2, 4];

const except1 = (array, excluded) => {
  let output = array;
  for (let i = 0; i < excluded.length; i++) output = output.filter((n) => n !== excluded[i]);
  return output;
};

console.log(except1(justNumbersArray, exceptionArray));

// second is Mosh solution

const except2 = (array, excluded) => {
  const output = [];
  for (let element of array) {
    if (!excluded.includes(element)) {
      output.push(element);
    }
  }
  return output;
};

console.log(except2(justNumbersArray, exceptionArray));
