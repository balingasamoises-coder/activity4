// 2 arrays using .filter()
const scores = [45, 80, 62, 95, 30, 71];
const passed = scores.filter((s) => s >= 60);   // [80, 62, 95, 71]
const failed = scores.filter((s) => s < 60);    // [45, 30]

// 2 let variables
let passedTotal = 0;
let failedTotal = 0;

// 1 loop (adds up the passed scores)
for (const score of passed) {
  passedTotal += score;
}

failedTotal = failed.length;

console.log(`Passed total: ${passedTotal}`);   // Passed total: 308
console.log(`Failed count: ${failedTotal}`);   // Failed count: 2