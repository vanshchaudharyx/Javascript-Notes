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
