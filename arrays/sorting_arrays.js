const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

const courses = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'javascript' },
  { id: 3, name: 'PHP' },
];
console.log(courses);

// this could be used, but this ignore the case of 0, in which there is equality
const supply = courses.sort((a, b) => (a.name > b.name ? 1 : -1));
// this is better because of the base of zero
const bigSupply = courses.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(supply);
