// this is a factory function
const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  },
};

// const another = {};

// for (let key in circle) {
//   another[key] = circle[key];
// }

// const another = Object.assign({ color: 'yellow' }, circle);

// this is the best way of cloning a cirlcle
const another = { ...circle };
console.log(another);
