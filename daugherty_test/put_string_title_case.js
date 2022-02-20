let string = 'i love to code!';
console.log(capitalize(string));

function capitalize(string) {
  stringToArray = string.toLowerCase().split(' ');
  for (let i = 0; i < stringToArray.length; i++) {
    stringToArray[i] = stringToArray[i].charAt(0).toUpperCase() + stringToArray[i].slice(1);
  }
  return stringToArray.join(' ');
}
