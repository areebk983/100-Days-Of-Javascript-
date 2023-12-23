//Question 2: Count the number of vowels in a given string.

//Solution:

function countVowels(inputString) {
 
  const lowercaseString = inputString.toLowerCase();
  
  const vowels = ['a','e','i','o','u'];
  
  let vowelCount = 0;

  for (let char of lowercaseString) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

const testingString = 'Good Morning Future Stars';
const result = countVowels(testingString);
console.log(result); 