// with just primitives

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const slice = combined.slice(2, 4);

console.log(combined);
console.log(slice);

// with reference types

const xfirst = [{ id: 10 }];
const xsecond = [4, 5, 6];

const xcombined = xfirst.concat(xsecond);
xfirst[0].id = 10;
console.log(xcombined);
