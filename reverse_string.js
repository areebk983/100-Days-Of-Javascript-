//Question 1: Reverse a string without using the built-in reverse() method

//Solution:

function reverseString(inputString) {
  let reversedString = '';

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  return reversedString;
}


const originalString = "My Name Is Muhammad Areeb";
const reversedResult = reverseString(originalString);
console.log(reversedResult);
