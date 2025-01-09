/**
 * Star Pattern Generator
 * Creates different patterns using asterisks (*)
 *
 *
 * Pyramid Pattern:
 *
 ***
 *****
 *******
 *********
 */

// 1. Pyramid Pattern
function createPyramid(height) {
  console.log("\nPyramid Pattern:");
  for (let i = 0; i < height; i++) {
    // Create spaces
    let spaces = " ".repeat(height - i - 1);
    // Create stars
    let stars = "*".repeat(2 * i + 1);
    console.log(spaces + stars);
  }
}

// 2. Right Triangle
function createRightTriangle(height) {
  console.log("\nRight Triangle Pattern:");
  for (let i = 0; i < height; i++) {
    console.log("*".repeat(i + 1));
  }
}
