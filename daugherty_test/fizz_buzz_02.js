let input = 3;
let top = 105;
fizzBuzz(input);

function fizzBuzz(input) {
  for (input = 1; input <= top; input++) {
    if (input % 3 == 0 && input % 5 == 0) console.log('fizz buzz: ' + input);
    else if (input % 3 == 0) console.log('fizz: ' + input);
    else if (input % 5 == 0) console.log('buzz: ' + input);
    else console.log(input);
  }
}
