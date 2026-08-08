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
