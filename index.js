// // let input = 3;
// // let top = 105;
// // fizzBuzz(input);

// // function fizzBuzz(input) {
// //   for (input = 1; input <= top; input++) {
// //     if (input % 3 == 0 && input % 5 == 0) console.log('fizz buzz: ' + input);
// //     else if (input % 3 == 0) console.log('fizz: ' + input);
// //     else if (input % 5 == 0) console.log('buzz: ' + input);
// //     else console.log(input);
// //   }
// // }

// // SPEED LIMIT = 70;
// const limit = 70;
// let speed = 280;
// checkSpeed(limit, speed);
// function checkSpeed(limit, speed) {
//   let factor = Math.floor((speed - limit) / 5);
//   // console.log(factor);
//   switch (factor) {
//     case factor >= 12:
//       console.log('suspended');
//       break;
//     case factor < 12 && factor > 0:
//       console.log(factor);
//       break;
//     // default:
//     //   console.log('ok ' + factor);
//   }
// }

// const circle = {
//   radius: 1,
//   draw() {
//     console.log('draw');
//   },
// };

// // const another = {};

// // for (let key in circle) {
// //   another[key] = circle[key];
// // }

// // const another = Object.assign({ color: 'yellow' }, circle);
// const another = { ...circle };
// console.log(another);

const str = 'A8BcD9897eFO!';
const count = (str.match(/[0-9]/g)).length;
console.log(count);
