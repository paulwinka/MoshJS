console.log(fizzBuzz(20));

function fizzBuzz(n) {
  let message = '';
  if (n <= 0) {
    message += '';
    console.log('');
  }
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      message += i + 'fizzbuzz, ';
    } else if (i % 3 == 0) {
      message += i + 'fizz, ';
    } else if (i % 5 == 0) {
      message += i + 'buzz, ';
    } else {
      message += i + ', ';
    }
  }
  return message;
}
