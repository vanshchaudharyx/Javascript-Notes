// this keyword==> This keyword refers to an object that is executing the current piece of code.
const student = {
  name: "Vansh",
  age: 22,
  city: "Gurugram",
  eng: 94,
  physics: 98,
  maths: 89,
  getAvg() {
    //in this method we cannot directly access the parameters of object.
    // let avg=(eng+physics+maths)/3; it is wrong
    let avg = (this.eng + this.physics + this.maths) / 3;
    console.log(avg);
  },
};

//Try and Catch==>
//The try statement allows you to define a block of code to be tested for errors while it is being executed.
//The catch statement allows you to define a block of code to be executed,if an error occurs in the try block.
console.log("hello");
try {
  console.log(a); // At this point code stops. If not written inside the try block.
} catch (err) {
  console.log("Caught and error a is not defined");
  console.log(err); //ReferenceError: a is not defined
}
console.log("hello");

//Miscellaneous Topics==>
// 1-Arrow Functions
// const func=(arg1,arg2)=>{
//     fucntion definition
// }
// These are not standalone functions..
const sum = (a, b) => {
  console.log(a + b);
};
sum(2, 3);
const cube = (n) => {
  console.log(n * n * n);
};
cube(3);

//Implicit return
const mul = (a, b) => a * b; // Automatic/Implicit return,
console.log(mul(2, 5));
// Alternate way=> const mul=(a,b)=>a*b;
//Set Timeout function==>
// satTimeout(function,timeout)
console.log("hi there!");

// setTimeout(() => {
//   console.log("Apna College");
// }, 4000); // In ms ie 4sec.
// console.log("Welcome to");

//Set Interval function==>
//setInterval(function,timeout) again and again executing the function after timeout period.
// setInterval(() => {
//   console.log("Vansh Chaudhary Software Engineer");
// }, 2000);
// How to stop set interval
let id = setInterval(() => {
  console.log("Vansh Chaudhary Software Engineer");
}, 2000);
console.log(id);
let id2 = setInterval(() => {
  console.log("Hello");
}, 2000);
console.log(id2);
// We can use clearInterval(id).

//This with arrow functions==>
// In functions- this always depends on calling objects.
// In arrow function the scope of this is lexical scope.
// Arrow function see whom call their parent function.

const students = {
  name: "Vansh",
  marks: 95,
  prop: this,
  getName: function () {
    return this.name; // for this function parent scope is object and object scope is global.
  },
  getMarks: () => {
    console.log(this); //parents scope. ==> window
    return this.marks;
  },
  //   arrow functions apne calling object ko apna this nhi bnate apne calling object ke this ko  apna this bnate hai.
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); //student object.
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); //window object.
    }, 2000);
  },
};
