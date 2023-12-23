//Question: Iterate through the properties of an object using a for-in loop.
//Solution:
const person = {
  firstName: 'Areeb',
  lastName: 'Khalid',
  age: 21,
  city: 'Karachi',
};

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}
