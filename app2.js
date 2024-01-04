//Assignment 02
//Q1
// let score = 80;
// let result = score >= 80 ? "Pass" : "Fail";
// console.log(result);

//Q2

// Introduced in ECMAScript 2020 (ES11), the optional chaining operator (?.) makes it easier to access an object's nested properties when some of the intermediary properties can be null or undefined.

//Program 
// const user = {
//     profile: {
//       name: 'Muhammad Areeb Khalid',
//       address: {
//         city: 'karachi',
//         zip: '74600'
//       }
//     },
//     // profile: null,
//   };
  
  
//   const nameWithoutOptionalChaining = user && user.profile && user.profile.name;
  
  
//   const nameWithOptionalChaining = user?.profile?.name;
  
//   console.log('Name without optional chaining:', nameWithoutOptionalChaining);
//   console.log('Name with optional chaining:', nameWithOptionalChaining);
  
  
//   // user = null;
  
  
//   const cityWithOptionalChaining = user?.profile?.address?.city;
//   console.log('City with optional chaining:', cityWithOptionalChaining);
  
  
//   const zipCode = user?.profile?.address?.zip ?? 'No zip code available';
//   console.log('Zip Code:', zipCode);
  
  //Q:03

// //for in vs for of loop
// //for of only access the value in array and objects
// let x = [1, 2, 3, 5, 8, 76, 4, 7, 8, 5, 69, 12];
// for (let index of x) {
//   console.log("elements in x  " + index);
// }

// //for in provide the index number in an array and also they provide the object value

// let y = [1, 2, 3, 5, 4, 7, 8];
// for (let index in y) {
//   console.log("elements in y  " + index);
// }
// let person = {
//   name: "Areeb",
//   contact: "areebk983@gmail.com",
//   address: "Nazimabad",
// };
// for (let p in person) {
//   console.log(p);
// }

//Q 04

// function calculateavg(numbers) {
//   if (numbers.length === 0) {
//     return 0;
//   }
//   let sum = 0;
//   for (let j = 0; j < numbers.length; j++) {
//     sum = sum + numbers[j];
//   }
//   let avg = sum / numbers.length;
//   return avg;
// }
// let numarray = [10, 20, 30, 40, 50, 60];
// let result = calculateavg(numarray);
// console.log(result);


//Q 05

//Closures in JavaScript refer to the ability of a function to retain access to variables from its outer (enclosing) scope, even after that scope has finished executing. This allows functions to "close over" and capture external variables, creating a persistent lexical scope. Closures are fundamental for maintaining state, creating private variables, and enabling callback functions in JavaScript.

// function createcounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// let counter_f = createcounter();
// counter_f();
// counter_f();
// counter_f();
// counter_f();

//Q 06

// const student = {
//   name: "Areeb Khalid",
//   school: "City School",
//   grade: [80, 90, 70, 50, 60, 80, 82, 69],
//   calcavg: function () {
//     let sum = this.grade.reduce((total, grade) => total + grade, 0);
//     return sum / this.grade.length;
//   },
// };
// let avg = student.calcavg();
// console.log(`the average of student is ${avg}`);


//Q 07
//you can clone an object using various methods such as deep copy, shallow copy, and reference copy.


// const originalObject = {
//     name: 'Areeb',
//     age: 22,
//     address: {
//       city: 'Karachi',
//       zip: '74600'
//     }
//   };
  
//   // Shallow copy using Object.assign()
//   //Shallow copying creates a new object but only copies the references of nested objects. Changes to nested objects will affect both the original and the shallow copy.
//   const shallowCopy = Object.assign({}, originalObject);
  
//   // Deep copy using JSON.parse() and JSON.stringify()
//   //Deep copying creates a completely independent copy, including nested objects. Changes to the original object or its nested objects won't affect the deep copy.
//   const deepCopy = JSON.parse(JSON.stringify(originalObject));
  
//   // Reference copy
//   //Reference copying doesn't create a new object; it simply points to the same object in memory. Changes to the original object will also be reflected in the reference copy.
//   const referenceCopy = originalObject;
  
//   // Modify the original object
//   originalObject.name = 'Khalid';
//   originalObject.address.city = 'Lahore';
  
//   console.log('Original Object:', originalObject);
//   console.log('Shallow Copy:', shallowCopy);
//   console.log('Deep Copy:', deepCopy);
//   console.log('Reference Copy:', referenceCopy);
  
//Q 08
// let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 30, 74, 50, 60, 70, 100];
// i.forEach((i) => {
//   let result = i % 2 === 0 ? "even " : "odd";
//   console.log(`${i} is ${result}`);
// });

// Q 09
// 1. For Loop:
//Structure:for (initialization; condition; update) { // code }
//Use Case:Suitable for iterating a specific number of times or over a known range.

// 2. While Loop:
//Structure:while (condition) { // code }
//Use Case:Used when the loop condition is based on a boolean expression, and the number of iterations may vary.

// 3. Do While Loop:
//Structure:do { // code } while (condition);
//Use Case:Similar to a while loop, but guarantees at least one execution of the code block before checking the condition; useful when you want the code to run at least once regardless of the condition.

// Choose a for loop for a known number of iterations, a while loop for a variable number of iterations based on a condition, and a do...while loop when you want to ensure the code block executes at least once.



//Q 10

// const users = [
//     { name: 'Areeb', profile: { age: 22 } },
//     { name: 'Ali' },
//     { name: 'Hassan', profile: { age: 25 } },
//   ];
  
//   for (const user of users) {
//     const age = user?.profile?.age ?? 'Age not available';
//     console.log(`${user.name}'s Age: ${age}`);
//   }

  //Q 11

// const person = {
//     name:'Areeb',
//     age: 22,
//     city:'Karachi',
//   };
  

//   for (const property in person) {
//     if (person.hasOwnProperty(property)) {
//       console.log(`Property: ${property}, Value: ${person[property]}`);
//     }
//   }
  

//Q 12

// Example using break statement
// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//       console.log('Break at i = 3');
//       break;
//     }
//     console.log(i);
//   }

// // Example using continue statement
// for (let j = 10; j < 15; j++) {
//     if (j === 12) {
//       console.log('Skipping at j = 12');
//       continue;
//     }
//     console.log(j);
//   }
  
//Q 13
// function calculateTax(income) {
//     const taxRate = income <= 50000 ? 0.1 : income <= 100000 ? 0.15 : 0.2;
//     const taxAmount = income * taxRate;
//     return taxAmount;
//   }
//   const income1 = 300000;
//   const income2 = 78000;
//   const income3 = 120000;
  
//   console.log(`Tax for income $${income1}: $${calculateTax(income1)}`);
//   console.log(`Tax for income $${income2}: $${calculateTax(income2)}`);
//   console.log(`Tax for income $${income3}: $${calculateTax(income3)}`);

//Q 14

const car = {
    make: 'Toyota',
    model: 'Camry',
    startEngine: function() {
      console.log('Engine started!');
    }
  };
  car.startEngine();
  
  


  