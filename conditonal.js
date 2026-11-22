// 1 array (also 1 const variable)
const fruits = ["apple", "banana", "mango"];

// 3 arrow functions (the second const variable holds the first one)
const capitalize = (word) => word[0].toUpperCase() + word.slice(1);
const describe = (fruit) => `${capitalize(fruit)} has ${fruit.length} letters.`; // template literal 1
const printAll = (list) => {
  for (let i = 0; i < list.length; i++) {
    console.log(describe(list[i]));
  }
};

printAll(fruits);
// Apple has 5 letters.
// Banana has 6 letters.
// Mango has 5 letters.

console.log(`Total fruits: ${fruits.length}`); // template literal 2