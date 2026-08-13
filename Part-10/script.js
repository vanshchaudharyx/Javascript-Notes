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
  console.log(this);//<button>Click me</button>
  //This refers to the button.
});
