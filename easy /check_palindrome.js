/**
 * Palindrome:
 * A word, phrase, number, or sequence that reads the same backward as forward.
 * Examples: 'radar', 'level', '12321'
 */

// Method 1: Using Array Methods (reverse)
function isPalindrome1(str) {
  // Convert to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  // Compare with reversed version
  return str === str.split("").reverse().join("");
}

// Method 2: Using Two Pointers
function isPalindrome2(str) {
  // Clean the string
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Method 3: Using Recursion
function isPalindrome3(str) {
  // Clean the string
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Base cases
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;

  // Recursive case: check substring without first and last characters
  return isPalindrome3(str.slice(1, -1));
}

// Test function to demonstrate all methods
function testPalindrome(input) {
  console.log(`\nTesting "${input}":`);

  // Method 1 result
  console.log(
    "Method 1 (Array Reverse):",
    isPalindrome1(input) ? "Palindrome" : "Not a Palindrome"
  );

  // Method 2 result
  console.log(
    "Method 2 (Two Pointers):",
    isPalindrome2(input) ? "Palindrome" : "Not a Palindrome"
  );

  // Method 3 result
  console.log(
    "Method 3 (Recursion):",
    isPalindrome3(input) ? "Palindrome" : "Not a Palindrome"
  );
}

// Test cases
const testCases = [
  "radar",
  "A man, a plan, a canal: Panama",
  "race a car",
  "12321",
  "hello",
];

console.log("=== Palindrome Checker ===");
testCases.forEach(testPalindrome);
