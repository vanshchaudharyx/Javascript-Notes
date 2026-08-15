//Advanced portion of JS=>
// Call Stack=> Whenever in our JS code function called at that time call stack formed.\
function hello() {
  console.log("inside hello function");
  console.log("Hello");
}
function demo() {
  console.log("Calling hello function");
  hello();
}
console.log("Calling demo function");
demo();
console.log("Done");
//By this we can easily observe how function calling works.
//Each website has its own call stack for tracking which function call is going on right now.

// Visualizing the call stack=>
console.log("Visualizing the call stack");
function one() {
  return 1;
}
function two() {
  return one() + one();
}
function three() {
  let ans = two() + one();
  console.log(ans);
}
//After termination of three function we won't able to access the ans.(Function scope).
