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
btn2.onclick = sayHello;
btn2.onmouseenter = function () {
  console.log("You entered a sayhello button");
};
