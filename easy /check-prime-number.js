// Checking for Prime Numbers
// Difficulty: Easy
// Topics: Basic Programming, Number Theory
// Description: Write a program to determine if a number is prime.
// Example:
// Input: number = 7
// Output: Prime
// Explanation: 7 has no divisors other than 1 and itself, so it is a prime number.

function isPrime(number) {
  if (number < 2) return false;
  if (number === 2) return true;
  //any even number greater than two can not be a prime number
  if (number % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false;
  }
  return true;
}

const number = 7;
console.log(number + " is " + (isPrime(number) ? "Prime" : "Not Prime"));
