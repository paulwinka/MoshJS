const array = [1, 1, 1, [3, 4, [8]], [5]]; // 23!

var countArray = function (array) {
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].isArray) {
      array[i] = countArray(array[i]);
    }
    sum += array[i];
  }

  return sum;
};

console.log(countArray(array));
