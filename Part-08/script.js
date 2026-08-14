// Array Methods==>
// These methods takes callback as input(i.e higher order function).
// forEach,map,filter,some,every,reduce
//forEach==> arr.forEach(some function definition or name).
let arr = [1, 2, 3, 4, 5];
let print = function (el) {
  console.log(el);
};
arr.forEach(print);
// alternate way==>
arr.forEach(function (el) {
  console.log(el);
});
arr.forEach((el) => {
  console.log(el);
});
let ar = [
  { name: "Vansh", marks: 95 },
  { name: "Aman", marks: 95 },
  { name: "Sidd", marks: 78 },
];
ar.forEach((student) => {
  console.log(student.marks);
});

//Map function==> Similiar to forEach function but this uses callback and make new array for of values return for each elements of array.
// let Arr=arr.map(some function defintion or name);
let num = [1, 2, 3, 4];
let double = num.map((el) => {
  return el * el;
});

let gpa = ar.map((el) => {
  return el.marks / 10;
});

//Filter Function=>
//let newArr=arr.filter(some function definition or name);
//If this function return true in callback the we add that element in our newArr otherwise no.
let numss = [1, 2, 22, 5, 7, 9, 88, 78];
let even = numss.filter((el) => {
  return el % 2 == 0;
});

//Every Method=> Return true if every element of array gives true for some function.Else return false.

[1, 2, 3, 4].every((el) => {
  return el % 2 == 0;
}); //false
[2, 4].every((el) => {
  return el % 2 == 0;
}); //true

//Some Method=> Return true if some elements of array give true for some function.Else return false.

[1, 2, 3, 4].some((el) => {
  return el % 2 == 0;
}); //true
[2, 4].some((el) => {
  return el % 2 != 0;
}); //false

//Reduce Method==>Reduce the array to a single value..
// syntax==> arr.reduce(reducer function with 2 variables for(accumulator,element)).
let n = [1, 2, 3, 4];
let finval = n.reduce((res, el) => {
  console.log(res); //By the help of this we can observe the working of reduce method.
  return res + el;
});

//Maximum in array=> Usind reduce method
let numb = [2, 4, 3, 5, 6, 0, 9, 1];
let max = numb.reduce((max, el) => {
  if (el > max) {
    return el;
  } else {
    return max;
  }
  // Return will store in 1st arguement that is accumulator.
});

//Default Paramerters.=> Giving a default value to the arguement.
function sum(a, b = 3) {
  return a + b;
}
console.log(sum(2, 5)); //7
console.log(sum(2)); //5

//Spread=> to expand an iterable into multiple values.
// If we want to find min of all element from array then we have to pass Math.min(arr[0],arr[1],.....)like this and this is not and an efficient method.
// so we have to pass like Maths.min(...arr).
let aar = [0, 1, 3, 4, 6, 8, 9, 1, 3, 5, 7, 8];
let minn = Math.min(...aar);
console.log(minn); //O
console.log(..."hello");

//Rest=> Allows a function to take an indefinite number of arguements and bundle them in an array.
function rest(...args) {
  //arguements
  for (let i = 0; i < args.length; i++) {
    console.log("You give us:", args[i]);
  }
  // console.log(arguments);
}
function arg(a, b, c, d) {
  console.log(arguments); // This argument is a collection.
  console.log(arguments.length);
  // arguments.push(5);// This shows error because push method is for array so we can say this is now array this is collection.
}

// function sum() {
//   arguments.reduce((sum, el) /*This reduce method doesnt work with arguments because this is collection not array.*/
//   => {
//      return sum + el;
//   });
// }

// First we take arguments with rest because it converts arguments in to array.
function sum(...args) {
  return args.reduce((sum, el) => sum + el);
}

//Destructuring=> Storing values of array into multiple variables.
let names = ["tony", "bruce", "steve", "peter", "abc", "pyq", "xyz"];
//instead of=>
// let winner=names[0];
// let runnerup=names[1];
// let secondRunnerup=names[2];

// We can do this with destructuring..
let [winner, runnerup, secondRunnerup] = names;
console.log(winner, runnerup, secondRunnerup);
//lets suppose we have remaining values after assigning. for collecting that remaining 
// that values we can use rest.
let [win, run, ...others] = names;

//Destructuring on objects-->
const students = {
  name: "Vansh",
  class: "10th",
  age: 20,
  subjects: ["Math", "Science", "English"],
  username: "vansh123",
  password: "12345",
};
// let username=student.username;
// let password=student.password;
// This above way is not efficient if student have more properties.
// by destructuring==>
// let { username, password, ...otherss } = students;
// if we want to change the variable name where we want to store the properties.
let { username: user, password: pass, ...otherss } = students;
