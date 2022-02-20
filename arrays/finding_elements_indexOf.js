// basic way to see first index
const numbers = [1, 2, 3, 4];
console.log(numbers.indexOf(1));
// returns -1 if not present, otherwise the index of the first appearance on the array.

// USING INDEXOF, THERE IS NOT A WAY TO USE IT DETECT ALL INSTANCE, BUT IT IS POSSIBLE
// TO START THE SEARCH LATER, LIKE THIS ONE THAT BEGINS AT SEARCH INDEX 2, THE RESULT
// EXPECTED IS 2.

const numeros = [1, 2, 1, 4, 5, 6];
console.log(`numeros is: ${numeros.indexOf(1, 1)}`);

const otherNumbers = [1, 2, 3, 1];
console.log(otherNumbers.lastIndexOf(1));

// UGLY WAY OF CHECKING IF NUMBER IS IN ARRAY

const potherNumbers = [1, 2, 3, 1];
console.log(potherNumbers.indexOf(1) !== -1);

// BETTER WAY OF CHECKING

const botherNumbers = [1, 2, 3, 1];
console.log(botherNumbers.includes(1));
