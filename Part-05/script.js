// JS object literals.
// Used to store keyed collection & complex entities.
// property=>(key,value)pair
// Object are a collection of properties.
let arr = [];
typeof arr; // 'object' this is literal
//Creating object literals.
let delhi = {
  latitude: "28.7041 N",
  longitude: "77.0125  E",
};
const student = {
  name: "Vansh",
  age: 20,
  marks: 85,
  city: "New Delhi",
}; //There is no specific order in object.
const item = {
  price: 200,
  discount: 0,
  colors: ["white", "black"],
};

// Thread/Twitter Post-->
// Create an object literal for the properties of thread/twitter post which includes--
// username,content,likes,repost,tags.
const post = {
  username: "@Vansh",
  content: "Photo",
  likes: 1500,
  repost: 100,
  tags: ["@vineet", "@vaibhav"],
};
//Get values
post["username"]; //using big braces.
post.username; //using dot operator.

//JS automatically converts object keys to strings.
// Even if we made the number as a key, the number will be converted to string.

//Add/Update Value..
// Change city to Gurugram,Add a new property,gender:Male,Change the marks of "A".
student.city = "Gurugram";
student.gender = "Male"; // Add new property
student.marks = "A"; // Updation one data type to another

// delete
delete student.gender;

// Nested Objects--> Storing information of multiple students.
const classInfo = {
  aman: {
    grade: "A+",
    city: "Gola",
  },
  vansh: {
    grade: "A+",
    city: "Gola",
  },
  shraddha: {
    grade: "O",
    city: "Delhi",
  },
};
// Three individual objects inside classInfo object.

// Array of objects-Storing information of multiple students.
const stud = [
  {
    name: "Vansh",
    age: 20,
    city: "Gurugram",
  },
  {
    name: "Shraddha",
    age: 19,
    city: "Delhi",
  },
  {
    name: "Aman",
    age: 21,
    city: "Gola",
  },
];

//Math Object.
// Properties-->
// Math.PI,Math.E
//Methods-->
// Math.abs(n),Math.pow(a,b),Math.floor(n)-->roundoff on smaller number,Math.ceil(n)-->roundoff on larger integer value,Math.random()-->gives value b/w 0and1 and 1 in inclusive..

// By the help of Math.random we can generate number from 1 to 10.
let num = Math.random();
num = num * 10; // This is range in which we want to generate the numbers(i.e 10).
num = Math.floor(num);
num = num + 1;
console.log(num);

//================
//Guessing Game---
//================

// User Enter a max number and then tries to guess a random generated number b/w 1 to max.
const maxNum = prompt("Enter maximum number");
console.log(maxNum);
let randomNum = Math.floor(Math.random() * maxNum) + 1;
// console.log(randomNum);
let guess = prompt("Guess the number");
while (true) {
  if (guess == "quit") {
    console.log("User Quit");
    break;
  }
  if (guess == randomNum) {
    console.log("You are right Congrats!! random number was", randomNum);
    break;
  } else if (guess < randomNum) {
    guess = prompt("hint:Your guess was to small. plesse try again");
  } else if (guess > randomNum) {
    guess = prompt("hint:Your guess was to large. plesse try again");
  }
  // else {
  //   guess = prompt("Your guess was wrong. please try again ");
  // }
}
