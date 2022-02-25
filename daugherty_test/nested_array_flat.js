const nestArray = [1, 1, 1, [3, 4, [8]], [5]]; // 23!

const sumNestedFlat = (nestArray) => {
  let sum = 0;
  for (let i = 0; i < nestArray.length; i++) {
    if (nestArray[i].isArray) {
      nestArray[i] = sumNestedFlat(nestArray[i]);
    }
    sum += nestArray[i];
  }
  return sum;
};

console.log(sumNestedFlat(nestArray));
