//Question 15: Determine if a year is a leap year or not.
//Solution

function isLeapYear(year) {
  // Leap years are divisible by 4
  // Exception: If a year is divisible by 100, it must also be divisible by 400 to be a leap year
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const testYear = 2024;
if (isLeapYear(testYear)) {
  console.log(`${testYear} is a leap year.`);
} else {
  console.log(`${testYear} is not a leap year.`);
}
