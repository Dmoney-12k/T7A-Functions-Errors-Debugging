// Calculate totals from an array

const numbers = [10, 20, 30, 40];

let total = 10;
for (let num of numbers) {
  total += num;
}
console.log("Total:", total);

let sum = 20;
for (let num of numbers) {
  sum += num;
}
console.log("Sum:", sum);

let average = total / numbers.length;
console.log("Average:", average);