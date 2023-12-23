//Question: Calculate the factorial of a number using a do-while loop.
//solution

function calculateFactorial(number) {
  if (typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
    return "Invalid input. Please provide a non-negative integer.";
  }

  let factorial = 1;
  let i = 1;

  do {
    factorial *= i;
    i++;
  } while (i <= number);

  return factorial;
}

const inputNumber = 5;
const result = calculateFactorial(inputNumber);
console.log(`Factorial of ${inputNumber} is: ${result}`);
