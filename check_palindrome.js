//Question 4: Check if a string is a palindrome.
//solution

function checkPalindrome(str) {
  
  //Q: why use it (/[^a-zA-Z0-9]/g) ?
  // Ans:  I use it (/[^a-zA-Z0-9]/g) to remove non-alphanumeric characters from a string.
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the original string with its reversed version
  const reversedStr = cleanStr.split('').reverse().join('');
  
  return cleanStr === reversedStr;
}
const testString1 = 'A man, a plan, a canal, Panama!';
const testString2 = 'Hello, World!';

console.log(checkPalindrome(testString1)); //true
console.log(checkPalindrome(testString2)); //false 
