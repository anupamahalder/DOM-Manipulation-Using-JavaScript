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

// addEventListener takes two parameter first one is the name of event and second one is the function
// default parameter of a function is event parameter
// Way 1
// document.getElementById("handle-add-btn").addEventListener("click", 
//     (event)=>{
//         console.log("Hello btn!");
//     }
// )
// Way 2 : Call function by adding onClick property at the element and put the function name there
const handleSearch = (event) =>{
    const inputValue = document.getElementById("search-box").value;
    if(!inputValue) return;
    console.log(inputValue);
    const container = document.getElementById("comment-container");
    // create a paragraph tag 
    const para = document.createElement("p");
    // add a class name to this tag 
    para.classList.add("child-para");
    para.innerText = inputValue;
    // then put the p tag inside container 
    container.appendChild(para);
    // clear the input field 
    document.getElementById("search-box").value = '';
}

const removeComment = (e)=>{
    // get all the comments as an array 
    const allComments = document.getElementsByClassName("child-para");
    // remove the clicked comment 
    for(const element of allComments){
        element.addEventListener("click", (e)=>{
            // remove this child 
            e.target.parentNode.removeChild(element);
        })
    }
}

// ----------------------------API-------------------------
fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then(data =>{
    console.log(data);
    displayData(data);
})
.catch(err=>{
    console.log(err);
})

const displayData = (userData) =>{
    const container = document.getElementById("user-data-container");
    // foreach doesnot return 
    userData.forEach(user => {
        // create an element 
        const div = document.createElement("div");
        div.classList.add("user-div");
        div.innerHTML = `
        <h4><b>Name:</b> ${user.name}</h4>
        <p><b>Username:</b> ${user.username}</p>
        <p><b>Email:</b> ${user.email}</p>
        <button>Details</button>
        `
        container.appendChild(div);
    })
}