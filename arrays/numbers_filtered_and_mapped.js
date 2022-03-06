const numbers = [1, 2, -1, 3, 4, 5];

// the parentheses around ({value: n})) are needed because of the object notation, otherwise they would be curly; this
// way the return keyword is not needed.
console.log(numbers.filter((n) => n > 1).map((n) => ({ value: n })));
