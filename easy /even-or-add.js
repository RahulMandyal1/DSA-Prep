// Determining Even/Odd Numbers
// Difficulty: Easy
// Topics: Basic Programming
// Description: Write a program to check whether a number is even or odd.
// Example:
// Input: number = 4
// Output: Even
// Explanation: Since 4 is divisible by 2, it is an even number.

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}

//should return true as 2 is a even number
console.log(isEven(2));
