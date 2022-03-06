const numbers = [315, 888131, 15178, 1962];
// const numbers = [];
/// this was my solution
// const getMax = (array) => {
//   if (array.length === 0) return undefined;
//   return array.reduce((accumulator, current) => {
//     current > accumulator ? (accumulator = current) : accumulator;
//     return accumulator;
//   }, array[0]);
// };

// const getMax = (array) => {
//   return array.reduce((accumulator, current) => (accumulator > current ? accumulator : current));
// };

const getMax = (array) => {
  if (array.length === 0) return undefined;
  return array.reduce((a, b) => (a > b ? a : b));
};

const max = getMax(numbers);
console.log(max);
