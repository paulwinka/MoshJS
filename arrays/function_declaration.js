// function declaration; this can be called BEFORE it is defined, probably not good.
const walk = () => {
  console.log('walk');
};

// function expression

// anonymous

let run = function () {
  console.log('run');
};
// named
let scurry = function run() {
  console.log('run');
};

// also, there is a special case called "arguments" tahat's a keyword in js

function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  console.log(arguments);
  // return total;
}

console.log(sum(1, 2, 3, 4, 5, 10));

// the rest operator