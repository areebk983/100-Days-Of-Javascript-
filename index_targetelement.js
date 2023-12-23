// Question 6 : Find the index of the first occurrence of a specific element in an array.

//solution:

function indexOfElement(arr, target) {
  
  const index = arr.indexOf(target);

  return index;
}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetElement = 8;

const result = indexOfElement(myArray, targetElement);
console.log(result);
