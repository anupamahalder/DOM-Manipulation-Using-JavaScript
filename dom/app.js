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

// To select all gtml elements at a time by passing tag name/classname 
console.log(document.querySelectorAll("h1")); // getting an array
console.log(document.querySelectorAll(".title")); // getting an array

const allBox = document.getElementsByClassName("box");
console.log(allBox);
// loop through the allBox array 
for(let i=0;i<allBox.length;i++){
    const element = allBox[i];

    // make 5th box in different color 
    if(element.innerText == "Box 5"){
        element.style.backgroundColor = "orange";
    }
    else element.style.backgroundColor = "lightgreen";
}