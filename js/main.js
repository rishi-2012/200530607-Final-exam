console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number

/*Rishi Desai-200530607*/
// Step 2: Create a block scoped, immutable variable that stores an empty array

const r=[];

// Step 3: Add the 3 people's names to the array
r.push("Rishi");
r.push("jay");
r.push("Shrey");





// Step 4: Remove the second array item from the array
r.splice(1,1);

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable

let project=r.map(function(r){
    return r.toLocaleUpperCase();
});
// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";

let title =document.querySelector("aside h2");
title.addEventListener("click",function(){
    alert("Hello from booo")
});