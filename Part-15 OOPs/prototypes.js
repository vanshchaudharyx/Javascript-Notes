//Object prototypes-Prototypes are the mechanism by which JS objects inherit feature from one another.
//It is like a single template object that all object inherit methods and properties from without having their own copy.
//Every object in JS has a builtin property which is called its prototype.
let arr = [1, 2, 3];
arr.sayHello = () => {
  console.log("hello i m arr");
};
//There is refernce of prototype object in each array.
// arr.__proto__(reference)//Points to actual prototype object.
//Changes the push function definition
arr.__proto__.push = (n) => {
  console.log("Pushing number", n);
};
// Array.prototype (actual)
