//DOM Events=> Events are signals that something has occured.(user inputs/actions).
// onclick(when an element is clicked)
// onmousenter(when mouse enters an element)
let btn = document.querySelector("button");
console.dir(btn);
btn.onclick = function () {
  console.log("button was clicked");
};
let btn2 = document.querySelector(".hello");
function sayHello() {
  alert("Say Hello!");
}
function sayName() {
  alert("Name!");
}
btn2.onclick = sayHello;
btn2.onmouseenter = function () {
  console.log("You entered a sayhello button");
};
// If we want multiple event happen then that thing is not possible with onclick or onmouseenter.
//Thats why we use Event listener

//Event Listener-=>
// addEventListener
// element.addEventListener(event,callback)==>
btn.addEventListener("click", function () {
  console.log("button clicked");
});
let eventbtn = document.querySelector(".eventlist");
eventbtn.addEventListener("click", sayHello);
eventbtn.addEventListener("click", sayName);
//These both will run line by line.

//Event listener for elements.
let para = document.querySelector("p");
para.addEventListener("click", function () {
  console.log("Para was clicked");
});

//this in Event Listeners=>
// When 'this' is used in a callback of event handler of something,it refers to that something.
//When we create event listener for any object then we use this at the place of callback.
btn.addEventListener("click", function () {
  console.log(this); //<button>Click me</button>
  //This refers to the button.
});

//Keyboard Events==>
let keyEvent = document.querySelector(".keyEvent");
keyEvent.addEventListener("dblclick", function (event) {
  console.log(event); //MouseEvent
  console.log("button clicked");
});

let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
  console.log(event);
  console.log(event.key);
  console.log(event.code);
  console.log("key was pressed goes down");
});
inp.addEventListener("keyup", function () {
  console.log("key was pressed goes up");
});

//Form Events.
let form = document.querySelector("form");
form.addEventListener("submit", function () {
  event.preventDefault(); //Prevent the default work.
  alert("form submitted");
});

//Extracting form data==>
let form2 = document.querySelector(".extractdata");
form2.addEventListener("submit", function (event) {
  event.preventDefault();
  let inp = document.querySelector(".input");
  console.log(inp); //<input placeholder="Input" class="input"></input>
  console.log(inp.value); //Here innertext property not work for input.
});

//More Events==>
// change event==> The change event occurs when the value of an element has been changed(only work on <input>,<textarea>,and<select> elements).
//input event==> The input event fires when the value of an <input>,<select>, or <textarea> element has been changed.

let forms = document.querySelector(".extractdata");
forms.addEventListener("change", function () {
  //This change only tracks the state bw initial and final.
  event.preventDefault();

  console.log("input changed");
  console.log("final value", forms.value);
});
//For every element tracking we use input// This only detects character keys.
