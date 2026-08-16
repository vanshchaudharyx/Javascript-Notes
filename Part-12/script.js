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

// Breakpoints==> We track call stack through our browser with the help opf breakpoint.
// Breakpoints are generally used for debugging.
three(); // after this line we can see the call stack on the browser's console.

//JS is single threaded language that means one thing of a code is executed at a time..
console.log("JS is Single Threaded");
let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a + b);
//This above code shows the synchronus nature of JS.

//Sometimes while doing programmming with JS it is not possible that some tasks continously worked in sequence.
// Like api calling-- sometimes recieving response from API takes time so at that instance JS waits or not or what happens.
//For dealing with single threaded nature of JS we have some things like Callbacks.
//WE can also make setTimeout function to tackle that situation.
setTimeout(() => {
  console.log("Vansh Chaudhary");
}, 2000);
setTimeout(() => {
  console.log("Software Engineer");
}, 2000);
console.log("hello...");
//This above code the asynchronus nature of JS.

// As a begininer we thought that how this possible that JS waits because wait is a work in programming languages.
//If JS is multithreaded so how's that possible.
//This waiting work is done by the browser and browsers are generally written in C++ or Java languages that are multithreaded language.
//Working=> setTimeout function is kept by the browser and wait for that and JS runs normal code,when the delay comoleted browser put that function in the callStack at top and then JS executes that function.

//Callback Hell=> This cause due to asynchronus nature of JS.
function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}
h1 = document.querySelector("h1");
// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000);
// setTimeout(() => {
//   h1.style.color = "orange";
// }, 2000);
// setTimeout(() => {
//   h1.style.color = "green";
// }, 3000);
//We dont calculate the delay again and again. Let we create a function in line no= 63
// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);
changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000);
    //Callback nesting=> This phenomenon is knows as callback hell.
  });
});
//This is not a good way to do such things, we put a callback in changeColor func

//There are multiple things in JS that prevent us from callback hell that is promises,async,await.

//Promises=> The promise object represents the eventual completion (or failure) of an asynchronus operation and its resulting value.

//Here we use a small concept of Databases=>
function savetoDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    // console.log("data saved");
    success();
  } else {
    // console.log("weak connection");
    failure();
  }
}
savetoDb(
  "Vansh Chaudhary",
  () => {
    console.log("data1:data saved");
    //If this executes successfully then we add out 2nd data
    savetoDb(
      "Software Engineer",
      () => {
        console.log("data2:data saved");
        //If this executes successfully then we add out 3rd data
        savetoDb(
          "Hello",
          () => {
            console.log("data3:data saved");
          },
          () => {
            console.log("data3:weak connection. data not saved ");
          },
        );
      },
      () => {
        console.log("data2:weak connection. data not saved");
      },
    );
  },
  () => {
    console.log("weak connection. data not saved");
  },
);
//This dangerous nesting is called callback hell.
//This type of situation in exists in real life situations.

//Promises=> The promise object represents the eventual completion (or failure) of an asynchronus operation and its resulting value.
//Promise is an object
// Resolve=>success
// Reject=>failure
// Now made the new version of above code.
function PromiseSavetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("data was saved"); //[[PromiseResult]]: "data was saved"
    } else {
      reject("weak connection");
    }
  });
}

//Promises frequently used methods=> then()& catch().
// If we want some work after fulfilling promise then we use then() method.
//If we want some work after failure of promise then we use catch() method.
let req = PromiseSavetoDb("Vansh");
req
  .then(() => {
    console.log("promise was resolved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });

//Promise chaining==>
let request = PromiseSavetoDb("Vansh");
request
  .then(() => {
    console.log("data1 saved");
    PromiseSavetoDb("hello world").then(() => {
      console.log("data2 saved");
    });
  })
  //Single catch handles all promises errors.
  .catch(() => {
    console.log("promise was rejected");
  });

//============================================
// This is actual promise chaining============
//============================================
// let request = PromiseSavetoDb("Vansh");
// request
//   .then(() => {
//     console.log("data1 saved");
//     return PromiseSavetoDb("data2");
//   })
//   .then(() => {
//     console.log("data2 saved");
//   })
//   //Single catch handles all promises errors.
//   .catch(() => {
//     console.log("promise was rejected");
//   });

//Promises are rejected and resolved with some data(valid results or errors).

// .then((result)=>{
//   console.log(result)
// })

// .catch((error)=>{
//   console.log(error)
// })
