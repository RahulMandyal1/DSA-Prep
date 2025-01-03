// Validating Leap Years
// Difficulty: Easy
// Topics: Basic Programming, Date Handling
// Description: Write a program to check if a given year is a leap year.
// Example:
// Input: year = 2020
// Output: Leap Year
// Explanation: 2020 is divisible by 4 but not by 100, or it is divisible by 400, so it is a leap year.

function isLeapYear(year) {
  // A year is a leap year if:
  // 1. It's divisible by 4 AND not divisible by 100
  // OR
  // 2. It's divisible by 400

  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020) ? "is a leap year" : "sorry not a leap year");
