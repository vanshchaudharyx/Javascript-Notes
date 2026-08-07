// String Methods \
// Methods- actions that can be performed on objects. 
// Format-stringName.method()
// Trim method- Trims whitespaces from both end of string & returns a new one.
let msg ="  Hello  ";
console.log(msg);
msg.trim();
console.log(msg);
// It don't remove spaces from old string it creates a new string with no stard and end spaces.. 
// Strings are immutable in JS.
console.log(msg.toUpperCase()); // Lowercase and Uppercase.

// String method with arguements. 
// Arguements is a some value that we pass to the method. 
// indexOf-return the first index of occurence of some value in string. Or gives -1 of not found 
let string="ILoveCoding";
// We can try this on console for better understanding. 
console.log(string.indexOf("Love"));

// Method Chaining - Using one method after another.Order of execution will be left to right. 
let str="  hello  ";
str.toUpperCase().trim();

// Slice method- Returns a part of the original string as a new string. 
let stri="ILoveCoding" 
stri.slice(5) //"Coding"
stri.slice(1,4)//"Lov" ending index is non-inclusive.
//str.slice(-any number)=str.slice(length-any number).
stri.slice(-2) //output-'ng'

// Replace- Searches a value in the string and return a new string with the value replaced.
let strin="ILoveCoding";
console.log(strin.replace("Love","do")); //IdoCoding 

//Repeat-Returns a string with the number of copies of a string.
let stringg="Mango";
console.log(stringg.repeat(2));// MangoMango

  
