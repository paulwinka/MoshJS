const nestArray = [1, 1, 1, [3, 4, [8]], [5]]; // 23!

const sumNested = (nestArray) => {
  let sum = 0;
  for (let i = 0; i < nestArray.length; i++) {
    if (!Array.isArray(nestArray[i])) {
      sum += nestArray[i];
    } else {
      for (let j = 0; j < nestArray[i].length; j++) {
        if (!Array.isArray(nestArray[i][j])) {
          sum += nestArray[i][j];
        } else {
          for (let k = 0; k < nestArray[i][j].length; k++) {
            if (!Array.isArray(nestArray[i][j][k])) {
              sum += nestArray[i][j][k];
            }
          }
        }
      }
    }
  }
  return sum;
};

console.log(sumNested(nestArray));
