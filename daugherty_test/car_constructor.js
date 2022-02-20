// SPEED LIMIT = 70;
const limit = 70;
let speed = 280;
checkSpeed(limit, speed);
function checkSpeed(limit, speed) {
  let factor = Math.floor((speed - limit) / 5);
  // console.log(factor);
  switch (factor) {
    case factor >= 12:
      console.log('suspended');
      break;
    case factor < 12 && factor > 0:
      console.log(factor);
      break;
    // default:
    //   console.log('ok ' + factor);
  }
}
