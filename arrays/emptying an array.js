// solution 1, works if there are no other references to the original array. But there are, nonetheless here is the solution.
let numbers = [1, 2, 3, 4];
let another = numbers;

numbers = [];
console.log(`numbers: ${numbers}`);
console.log(`another: ${another}`);

// solution 2, just set array length to zero, THIS IS THE PREFERRED SOLUTION
let znumbers = [1, 2, 3, 4];
let zanother = znumbers;
znumbers.length = 0;

console.log(`znumbers: ${znumbers}`);
console.log(`zanother: ${zanother}`);

// solution 3, splice method
let ynumbers = [1, 2, 3, 4];
let yanother = ynumbers;
ynumbers.splice(0, ynumbers.length);

console.log(`ynumbers: ${ynumbers}`);
console.log(`yanother: ${yanother}`);

// solution 4, pop method, not recommended

let xnumbers = [1, 2, 3, 4];
let xanother = xnumbers;

while (xnumbers.length > 0) {
  xnumbers.pop();
}
console.log(`xnumbers: ${xnumbers}`);
console.log(`xanother: ${xanother}`);
