//Question:Find the maximum of three numbers using nested ternary operators.
//Solution

function findMax(a, b, c) {
  return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
const num1 = 10;
const num2 = 5;
const num3 = 13;

const maxNumber = findMax(num1, num2, num3);
console.log(`The maximum number is: ${maxNumber}`);
