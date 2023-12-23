//Question 13 : Check if a number is even or odd and return a corresponding message.
//Solution

function checkEven_Odd(num) {
  if (typeof num !== 'number') {
    return "Invalid input. Please provide a number.";
  }

  if (num % 2 === 0) {
    return `${num} is even.`;
  } else {
    return `${num} is odd.`;
  }
}
const testNumber = 13;
const result = checkEven_Odd(testNumber);
console.log(result);
