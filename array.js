// 2 arrays using .map()
const prices = [10, 20, 30];
const names = ["pen", "book", "bag"];

const doubledPrices = prices.map((p) => p * 2);        // [20, 40, 60]
const upperNames = names.map((n) => n.toUpperCase());  // ["PEN", "BOOK", "BAG"]

// 2 destructured arrays
const [firstPrice, secondPrice] = doubledPrices;
const [firstName, secondName] = upperNames;

// 2 template literals
console.log(`${firstName} costs ${firstPrice} pesos.`);    // PEN costs 20 pesos.
console.log(`${secondName} costs ${secondPrice} pesos.`);  // BOOK costs 40 pesos.