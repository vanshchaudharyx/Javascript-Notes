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
