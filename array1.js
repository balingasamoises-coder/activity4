// 3 let variables
let numbers = [1, 2, 3, 4, 5];
let doubled;
let label;

// 2 arrow functions
const double = (n) => n * 2;
const describe = (n) => (n % 2 === 0 ? "even" : "odd");

// 1 array using .map() (with the first arrow function)
doubled = numbers.map(double);
console.log(doubled); // [2, 4, 6, 8, 10]

// 2 conditionals
if (doubled.length > 3) {
  label = "long list";
} else {
  label = "short list";
}
console.log(label); // "long list"

if (numbers.map(describe)[0] === "odd") {
  console.log("The first number is odd");
}