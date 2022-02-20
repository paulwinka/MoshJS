const numbers = [3, 4];

//puts on end
numbers.push(5, 6);
console.log(`pop example: ${numbers.pop()}`);
console.log(`numbers after pop: ${numbers}`);
//puts at beginning
numbers.unshift(1, 2);
console.log(`unshift example: ${numbers.shift()}`);
console.log(`shift example: ${numbers}`);

// puts in middle. first # is index, second is elements to remove, third is what's being inserted
numbers.splice(0, numbers.length - 3, 8, 9);
console.log(numbers);
