//We want to add the input in our list so here we need to listen only one event.
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let del = document.querySelector(".delete");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);

  ul.appendChild(item);
  //   console.log("Clicked");
  //   console.log(inp.value);
  //After printing our input we want our input box automatically cleared==>
  inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");

// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     console.log("Element Deleted");
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//     //New created tasks not deleted with parent this now working for new elememt.
//     //if we want for our new elements our old event listeners works then we use==>\
//     //Event Delegation==>
//   });
// }
//Instead of this we apply eventListener to the ul
//Event Dekegation==> If we want for a child element our parent event happens.
ul.addEventListener("click", function (event) {
  // console.dir(event.target.nodeName);//There is a special property in the target object that is nodename.
  // console.log("Clicked element:", event.target);

  // if (event.target.nodeName === "BUTTON") {
  //   console.log("Delete");
  // } else {
  //   console.log("Don't Delete");
  // }
  //Main Logic==>
  if (event.target.nodeName == "BUTTON") {
    console.log("Delete");
    event.target.parentElement.remove();
  } else {
    console.log("Don't Delete");
  }
});
