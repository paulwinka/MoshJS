// join and split are useful when creating a url slug
const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined);
console.log(numbers);

const message = 'this is my first message';
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);
