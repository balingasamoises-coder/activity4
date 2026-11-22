// 2 arrow functions
const isEven = (n) => n % 2 === 0;
const isLong = (word) => word.length > 4;

// 2 arrays using .filter()
const numbers = [1, 2, 3, 4, 5, 6];
const words = ["cat", "horse", "dog", "elephant"];

const evenNumbers = numbers.filter(isEven);   // [2, 4, 6]
const longWords = words.filter(isLong);       // ["horse", "elephant"]

// Spread operator on arrays: combine them into one new array
const combined = [...evenNumbers, ...longWords];

console.log(combined); // [2, 4, 6, "horse", "elephant"]