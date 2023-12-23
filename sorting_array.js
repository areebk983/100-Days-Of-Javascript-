//Question:Sort the array in ascending and descending without built-in methods.
//solution
//ascending order sorting: 
function bubbleSortAscending(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const originalArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5,10];
const ascendingResult = bubbleSortAscending(originalArray.slice());
console.log('Ascending Order:', ascendingResult);

//decending order sorting: 

function bubbleSortDescending(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap elements if they are in the wrong order
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}


const descendingResult = bubbleSortDescending(originalArray.slice());
console.log('Descending Order:', descendingResult);
