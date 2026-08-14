//Loops
// Used to iterate a piece of code.
// for loops
for (let i = 1; i <= 5; i++) {
  console.log(i);
} // 1 2 3 4 5

// Print odd numbers.
console.log("Odd Numbers");

for (let i = 1; i <= 10; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
// Print Even Numbers.
console.log("Even Numbers");
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// Infinite loops are very harmful for our websites.(we must specify the terminate condition).

// Print multiplication table of 5.
console.log("Table of 5");
for (let i = 5; i <= 50; i = i + 5) {
  console.log(i);
}

//Take input from user through prompt.
// let n = prompt("Write your number");
// n = parseInt(n); // This is because the prompt take n as string.
// for (let i = n; i <= n * 10; i = i + n) {
//   console.log(i);
// }

//Nested for loops(loop inside loop).
console.log("Nested Loop");
for (let i = 1; i <= 3; i++) {
  console.log(`Outer Loop${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}

//While Loops
// Syntax-->
// while(condition){
//     do something
// }
console.log("While Loop");
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// User will have to guess out favorite movie.
// let favorite = "Farzi";
// let guess = prompt("Enter guessed movie");
// while (guess != favorite && guess != "quit") {
//   console.log("Wrong");
//   guess = prompt("Enter again");
// }

//Break Keyword-- To get us out from a loop execution.
console.log("Break Keyword");
let k = 1;
while (k <= 5) {
  if (k == 3) {
    console.log(`We used break at 3`);
    break;
  }
  console.log(k);
  k++;
}

//Loops with arrays.

console.log("Array of Fruits");
let fruits = ["apple", "banana", "mango", "orange", "grapes"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Loops with nested array
console.log("Nested Arrays");
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(matrix[row][col]);
  }
}

//For of loop-This loop will used when we have to access the item of any collection
console.log("For of loops");
// let fruits = ["apple", "banana", "mango", "orange", "grapes"];
for (fruit of fruits) {
  console.log(fruit);
}
for (char of "VanshChaudharySoftWareEngineer") {
  console.log(char);
}

// Nested for of loop - useful for iterating over arrays of arrays
console.log("Nested For of loops");
let nestedMatrix = [
  [1, 2, 3],
  [4, 5, 6],
];
for (let row of nestedMatrix) {
  for (let value of row) {
    console.log(value);
  }
}
