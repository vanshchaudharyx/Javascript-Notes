// console.log()
// To write (log)a message on the console.
// console.log("This is Vansh Chaudhary Software Engineer")

// =================
// Linking a JS File
//==================
// Linking in HTMl
//<script src="script.js"></script>

//===================
// Tempelate Literals
//===================
// They are used to add embedded expresions in a string .
let pencilPrice = 10;
let eraserPrice = 10;
console.log("The total prive is:", pencilPrice + eraserPrice, "Rupees");
let output = "The total price is:" + (pencilPrice + eraserPrice) + "Rupees";
console.log(output);
// If we want add variables in bw the string then we use multiple + and ()..
// Tempelate Literals=======================
let price = `The total price is:${pencilPrice + eraserPrice}Rupees.`;
console.log(price);

//============================
//Operators in JS-----
//============================
// Arithmetic operators
let a = 5;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
// Unary operators
console.log(a++);
console.log(++a);
// Assignment operators
// (=,+=,-=,*=,/=,%=,etc)
// Comparison operator.
// Used to compare 2 values
// (>,<=,<,<=,==,!=) Output is either True or false..
let age = 18;
console.log(a > 18); //false.
console.log(a == 18); //false.
// === operator is used for comparing operator as well and value.
// Comparison for numbers.
console.log("a" > "A");
// This is possible beacause in JS there is a unique value associated with each number and charracter called UNIOCODE value.\

//============================
//Conditionals in JS-----
//============================
// if-else,nested if-else,switch.
console.log("Before my if statement");
let ag = 23;
if (ag >= 24) {
  console.log("You can vote");
}
// console.log("After my if statement");
else if (ag > 19) {
  console.log("You can also have DL");
}

//============================
//Logical Operators-----
//============================
// Operators used to combine expressions.(&&.||,!)
console.log(true && true); //true
console.log(true && false); //false
console.log(true || true); //true
console.log(true || false); //true

//============================
//Truthy and Falsy -------
//============================
// Everything in JS in true or false(in boolean context).
// This doesn't mean their value itself is false or true,but they are treated as false or true if taken in boolean context.

// falsy value 
// false,0,-0,On(Bigint value),""(empty string)"",null,undefined,NaN 
// Truthy value-everything else

//============================
//Switch Statement -------
//============================
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Banana is yellow");
    break;
  case "apple":
    console.log("Apple is red or green");
    break;
  case "orange":
    console.log("Orange is orange");
    break;
  default:
    console.log("Unknown fruit");
}

//============================
//Alerts and Prompts -------
//============================
// Alerts displays an alert message on the page.
alert("Something is wrong");
console.error("Something wrong");
// Prompt displays a dialog box that ask user for some message.
let input=prompt("Write something");
alert(input);



