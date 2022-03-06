// 04 moving an element

const pnumbers = [1, 2, 3, 4];

const move = (array, index, offset) => {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('too big');
    return;
  } else {
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
  }
};
const output = move(pnumbers, 1, 2);
console.log(output);
