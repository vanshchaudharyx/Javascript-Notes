//DOM(Document Object Model)==>
// The DOM represents a document with a logical tree.
//It allows us to manipulate /change webpages content (HTML elements).
//Every element of html is the object in JS.
// If we want to make changes then we have to access that object.
// First access then manipulate.
//At the highest level our document node is formed(This node is actually an object).
//For a every single webpage our dccument object is generated (in which HTML code is available).\
// Two step process to manipulate with JS==>
// 1-Select
// 2-Changes/manipulation
// console.dir(document);
// console.dir(document.all); // HTML All collection(38)
// console.dir(document.all[8]); //This 8 is the index in tree.
// console.dir((document.all[8].innerText = "Peter Parker"));

//Select Element=> getElementById= return the element as an object or null (if not found).
document.getElementById("mainImg"); //This is not a image tag or not element this is an image object.
let imgObj = document.getElementById("mainImg"); // If we print objImg then we see lots of properties associated with that object.
console.log(imgObj.tagName);
console.log(imgObj.src);
console.log(imgObj.id);

//Get Elements by class=> Returns the elements as an HTML collection or empty collection(if not found).
document.getElementsByClassName("oldImg")[0]; //First image of oldImg collection.
let smallImages = document.getElementsByClassName("oldImg");
// console.dir(smallImages);

for (let i = 0; i < smallImages.length; i++) {
  console.dir(smallImages[i]);
  console.dir(smallImages[i].src);
}

//Get Elements by tag name=> Return the elements as an HTML collection or empty collection(if not found).
document.getElementsByTagName("P");

// Query Selectors==> Allow us to use any css selector.
// document.querySelector("p"); // Selects first p element
// document.querySelector("#myId"); // Selects first  element with id= myID
// document.querySelector(".myClass"); // Selects first  element with class=myClass
// document.querySelectorAll("p"); // Selects all  p element.

//Query selector is only used for selecting single element.
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("div a")); //1st Anchor tags inside div.

//Manipulating the elements=>
// innerText= Shows the visible text contained the nodes.
// textContent=> Shows all the full text.
// innerHtml=> Shows the full markup.

let para = document.querySelector("p");
console.dir(para.innerText); //COntent of <p> tag visible in page.Takes content from whatever is visible on screen.
console.dir(para.innerHTML); //COntent of <p> tag visible in page with tags, And if we change something then .innerHtml recognizes the tags.

//Manipulating Attributes==>(class,id,styling,src)
// obj.getAttribute(attr);=>for any object gives some specific attribute value.
// obj.setAttribute(attr,val);

let img = document.querySelector("img");
img.getAttribute("id"); //mainImg
// img.setAttribute('id',"spiderImg");//mainImg img---->spiderImg

//Manipulating Style=> style property=>obj.style.
console.dir(img);
let heading = document.querySelector("h1");
heading.style.color = "purple";

//We want to change the styling for anchor tags/
let link = document.querySelectorAll(".box a");

for (let i = 0; i < link.length; i++) {
  link[i].style.color = "yellow";
}
//Styling property is not very frequently used to style objects.

//Manipulating Style==> Using classList

console.dir(img.classList); //This shows the class of any objects.
//We can also add class if not exists.
// img.classList.add("img");
// img.classList.remove("img"); to remove class.
// img.classList.contains("img"); to check is class exists
// img.classList.toggle("img"); to toggle bw add and remove (if exists then remove ,if not exists then add).

//Navigation=> By the help of navigation we go from one element to another element.
// parentElement,children,previousElementSibling,nextElementSibling.

let h4 = document.querySelector("h4");
h4.parentElement; //<div class="box">…</div>
let di = document.querySelector(".box"); //HTMLCollection(2) [h4, ul]
