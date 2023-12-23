//Question: Remove all duplicates from an array without built-in methods

//solution

function removeDuplicates(arr) {
  const finalArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (finalArray.indexOf(arr[i]) === -1) {
      finalArray.push(arr[i]);
    }
  }
  return finalArray;
}
const originalArray = [1, 2, 3, 4, 2, 1, 5, 10, 5, 100, 100, 4, 4];
const finalArray = removeDuplicates(originalArray);
console.log("After Removing Duplication the final array is",finalArray); 
