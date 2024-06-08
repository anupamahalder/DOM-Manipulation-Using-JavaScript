console.log("This is my dom project");


// ----------------Using selectors to select html elements------------ //
console.log(document.getElementsByTagName('h1')); // getting an array

// selecting a tag by class name 
const target =  document.getElementsByClassName("title");
console.log(target); // getting an array 

// To not get array we can select by id 
const target2 = document.getElementById("title");
console.log(target2); // getting the element directly

target2.style.color = "blue";