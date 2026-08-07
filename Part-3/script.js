// String Methods \
// Methods- actions that can be performed on objects.
// Format-stringName.method()
// Trim method- Trims whitespaces from both end of string & returns a new one.
let msg = "  Hello  ";
console.log(msg);
msg.trim();
console.log(msg);
// It don't remove spaces from old string it creates a new string with no stard and end spaces..
// Strings are immutable in JS.
console.log(msg.toUpperCase()); // Lowercase and Uppercase.

// String method with arguements.
// Arguements is a some value that we pass to the method.
// indexOf-return the first index of occurence of some value in string. Or gives -1 of not found
let string = "ILoveCoding";
// We can try this on console for better understanding.
console.log(string.indexOf("Love"));

// Method Chaining - Using one method after another.Order of execution will be left to right.
let str = "  hello  ";
str.toUpperCase().trim();

// Slice method- Returns a part of the original string as a new string.
let stri = "ILoveCoding";
stri.slice(5); //"Coding"
stri.slice(1, 4); //"Lov" ending index is non-inclusive.
//str.slice(-any number)=str.slice(length-any number).
stri.slice(-2); //output-'ng'

// Replace- Searches a value in the string and return a new string with the value replaced.
let strin = "ILoveCoding";
console.log(strin.replace("Love", "do")); //IdoCoding

//Repeat-Returns a string with the number of copies of a string.
let stringg = "Mango";
console.log(stringg.repeat(2)); // MangoMango

//=======================
//Array (Data Structure)
//=======================
//Linear Collection of things.
let students = ["aman", "vansh", "ayush"];
let info = ["Vansh", 22, "Software Engineer"]; //mixed array
//empty array
let emptyArr = [];
students[0][0]; // This means first letter of first element of array.
students[0].length;

//Arrays are Mutable in JS.

let fruits = ["banana", "apple"];
fruits[1] = "Mango";
console.log(fruits);

//Array Methods-push(add to end),pop(delete from end and return it),unshift(add to start),shift(delete from start and return it)..
let cars = ["Hyundai", "Audi", "Toyota"];
cars.push("BMW");
cars.unshift("Mercedes");

//indexOf:Returns index of something.
console.log(fruits.indexOf("banana")); // 0

//Include: search for a value.
console.log(fruits.includes("mango")); //True

//Concat :merge 2 arrays
let primary = ["red", "blue", "yellow"];
let secondary = ["orange", "green", "voilet"];
let all = primary.concat(secondary);
console.log(all);

//Reverse Method-reverse an array
let reverse = all.reverse();
console.log(reverse);

//Slice in Array: copies a protion of an array
all.slice();
all.slice(2); //2nd element to last index.
all.slice(1, 3); // 1 and 2 index 3 is excluded.
all.slice(-2); //last 2 elements from end

//Splice Method-remove/replace/add element in place.
//splice(start,deleteCount,item0...........itemN).
primary.splice(2); //worked same as slice
primary.splice(0, 1); // delete 1 element from starting index.
primary.splice(0, 1, "black", "grey");

//Sort in array.
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
days.sort(); // By default sort in ascending order
//Working- In sort method first all values are converted in to string and the sort.

//Array References(address in memory)
"name" == "name"; // true
"name" === "name"; //true
[1] == [1]; //false
[] == []; //false
1 == 1; //false
// Whenever array is created in JS then a reference variable is created and our array's exact location is different but we always access the array with reference variable.
//for ex--
// let num=[1,2,3]
//then num is the reference variable.(This variable stores the address of array).
//thats why the above statements return false because both have different memory locations.

//Conatant Array
const arr = [1, 2, 3, 4];
arr.push(5); //we are able to push and remove the element.
//After declaring const array we can not completely convert into new array.
// for ex--arr=[1,2,3]// shows error.

//Nested array also say Muilti-D arrays.
let numb=[[2,4],[3,5],[5,6]]; //o/p (3) [Array(2), Array(2), Array(2)]
numb;//o/p (3) [Array(2), Array(2), Array(2)]
numb[0]; // (2) [2, 4]
numb[0].length; //2
numb[0][0];//2
