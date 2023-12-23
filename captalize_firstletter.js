//Question 3: Convert the first letter of each word in a sentence to uppercase.

//solution

function capitalizeFirstLetter(sentence) {
  
  const words = sentence.split(' ');

  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  const capitalizedSentence = capitalizedWords.join(' ');

  return capitalizedSentence;
}

const inputSentence = 'captalize the first letter of every word';
const finalresult = capitalizeFirstLetter(inputSentence);
console.log(finalresult);
