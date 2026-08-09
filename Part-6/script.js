//Functions in Javascript.
// Functions Definition (telling JS){
//     //do something
// }

// Function Calling (USing the fuinction).
// funcName();
function hello() {
  console.log("Hello");
}
hello(); //Hello

//Create a funtion to roll a dice and always display the value of dice(1to6).
function dice() {
  let num = Math.floor(Math.random() * 6) + 1;
  return num; //We can also print instead of returning..
}
console.log(dice());
console.log(dice());

//Function with arguement
// Value we pass to the function.
console.log("Funtions with auguements:");
function printname(name) {
  console.log(name);
}
printname("Vansh Chaudhary Software Engineer");
//Return Keyword--> Return keyword is used to return some value from the function.
function sum(a, b) {
  return a + b;
  //   after return statement function stops.
}
sum(2, 3); //5

//Create a function that returns the concatenation of all strings in an array.
function concati(arr) {
  let final = "";
  for (let i = 0; i < arr.length; i++) {
    final = final + arr[i];
  }
  return final;
}
let arrayy = ["Vansh", "Chaudhary", "Software", "Engineer"];
console.log(concati(arrayy));

//Scope====>
// Scope determines the accessibility of variables,object and functions form different parts of code.
// Function scope
// Block scope
// Lexical scope

//Function Scope==> Variables defined inside a function are not accessible(visible) from outside the function.
let result = 10; // Global scope.
function summ(a, b) {
  let result = a + b; //Function scope.
}
summ(2, 3);
//console.log(result);//Uncaught ReferenceError: result is not defined

//Block scoper==> Variable declared inside a {} blcok cannot be accessed from outside the block.
//It only applied on let and cosnt keywords
//This block scope introduced in 2015 and also let and const was introduced thats why it is not applicable on var.
{
  let a = 25;
}
//console.log(a); //Uncaught ReferenceError: a is not defined
// This also observed in for loop (we cannot access iterator outside the for block).

// Lexical Scope==> A variable defined outside a function can be accessible inside the another function defined after the variable declaration.
//The opposite is NOT true.
function outerFunc() {
  let x = 5;
  let y = 6;
  function innerFunc() {
    console.log(x);
  }
  innerFunc();
}

outerFunc(); // 5
// Important:
// Scope is determined by the position of code,
// not by where the function is called.

// Inner scope → can access outer scope
// Outer scope → cannot access inner scope

//Function Expressions==>
// const variable=function(arg1,arg2){
//     do something
// }
let div = function (a, b) {
  return a / b;
};
div(2, 2); //1 We call function with variable name.

//Higher Order Function==> A function that does one or both.
//1-takes one or multiple functions as arguements.
//2-returns a function.
function multipleGreet(func, n) {
  //This is higher order function.
  for (let i = 1; i <= n; i++) {
    func();
  }
}
let greet = function () {
  console.log("Hello");
};
multipleGreet(greet, 10);
multipleGreet(function () {
  // Alternate way to call higher order function.
  console.log("Namaste");
}, 10);

//Higher order function(return a function)
function oddEvenFactory(request) {
  // This is factory function.
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("Wrong Request");
  }
}

//Method==>Actions that can be performed on an object.
const calculator = {
  num: 55,
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};
//Calculator is an object with multiple functions.
//Method in array and strings possible because array and strings are internally objects.

//Alternate shorthand method to define methods in JS.
const calc = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  }
};
