/**
 * Armstrong Number:
 * An Armstrong number (also known as narcissistic number) is a number that equals
 * the sum of its own digits each raised to the power of the number of digits.
 *
 * Examples:
 * - 153: 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
 * - 370: 3³ + 7³ + 0³ = 27 + 343 + 0 = 370
 * - 407: 4³ + 0³ + 7³ = 64 + 0 + 343 = 407
 * - 8208: 8⁴ + 2⁴ + 0⁴ + 8⁴ = 4096 + 16 + 0 + 4096 = 8208
 */

function isArmstrongNumber(number) {
  // Convert number to string to get digits
  let numStr = number.toString();
  let numDigits = numStr.length;
  let sum = 0;

  // Loop through each digit
  for (let i = 0; i < numStr.length; i++) {
    let digit = parseInt(numStr[i]);
    sum += Math.pow(digit, numDigits);
  }

  return sum === number;
}

function testArmstrongNumber(number) {
  let numStr = number.toString();
  let numDigits = numStr.length;
  let sum = 0;
  let calculations = [];

  // Calculate each digit's contribution
  for (let i = 0; i < numStr.length; i++) {
    let digit = parseInt(numStr[i]);
    let power = Math.pow(digit, numDigits);
    sum += power;
    calculations.push(`${digit}^${numDigits} = ${power}`);
  }

  // Print results
  console.log(`\nTesting ${number}:`);
  console.log("Breakdown:");
  calculations.forEach((calc) => console.log(calc));
  console.log(`Sum: ${calculations.join(" + ")}`);
  console.log(`Total: ${sum}`);
  console.log(
    `Result: ${number} is ${
      sum === number ? "an Armstrong" : "not an Armstrong"
    } number`
  );
}

// Test cases
console.log("=== Armstrong Number Checker ===");
console.log(
  "\nDefinition: An Armstrong number is a number that equals the sum"
);
console.log(
  "of its own digits each raised to the power of the number of digits.\n"
);

const testNumbers = [153, 370, 407, 8208, 123];
for (let num of testNumbers) {
  testArmstrongNumber(num);
}

// Additional function to find Armstrong numbers in a range
function findArmstrongNumbers(start, end) {
  console.log(`\nFinding Armstrong numbers between ${start} and ${end}:`);
  let found = [];

  for (let i = start; i <= end; i++) {
    if (isArmstrongNumber(i)) {
      found.push(i);
    }
  }

  console.log(`Found ${found.length} Armstrong numbers: ${found.join(", ")}`);
}

// Find Armstrong numbers in range 100-1000
findArmstrongNumbers(100, 1000);
