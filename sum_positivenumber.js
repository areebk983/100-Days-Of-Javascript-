// Question 5 : Find the sum of all positive numbers in an array.

//solution:


function sumPositiveNumbers(arr) {
  const positiveNumbers = arr.filter(num => num > 0);

  
  const sum = positiveNumbers.reduce((acc, num) => acc + num, 0);

  return sum;
}
const numbers = [1, -2, 15, -4, 5, 7, -8];
const result = sumPositiveNumbers(numbers);
console.log("The sum of positive numbers is:",result); //Only add postive numbers 
