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
