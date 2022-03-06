// 01 array from range
const arrayFromRange = (min, max) => {
  const arrayOutput = [];
  for (let i = min; i <= max; i++) {
    arrayOutput.push(i);
  }
  return arrayOutput;
};
console.log(arrayFromRange(-22, 44));
