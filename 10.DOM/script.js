// DOM Manipulation :-
// Selecting with id : document.getElementById("id")
let heading1 = document.getElementById("heading1");
console.log(heading1);
console.dir(heading1);
heading1.innerHTML = "domming";
console.dir(heading1);

// Selecting with class : document.getElementByClassName("class")
let par = document.getElementsByClassName("para");
console.dir(par);

// Selecting with tag : document.getElementByTagName("p") 
let tag = document.getElementsByTagName("button");
console.dir(tag);

// Query Selector :-
// i. document.querySelector("id | class | tag") -> return first element
let firstelement = document.querySelector("p"); // given based on tag
console.dir(firstelement);

let firele = document.querySelector(".para") // given based on class
console.dir(firele);

let firstele = document.querySelector("#heading1") // given based on id
console.dir(firstele); 

let element = document.querySelector("div");
console.dir(element);

// ii. document.querySelectorAll("id | class | tag") -> return all elements in NodeList
let allelements = document.querySelectorAll("p");
console.dir(allelements);

let allele = document.querySelectorAll(".para");
console.dir(allele);

let allelemen =  document.querySelectorAll("#heading4");
console.dir(allelemen);


// Properties :-
// tagName : returns tag for element nodes
console.log(heading1.tagName); // can get tagName if we check for 'id' only

// innerText : return the text content of the element and all its children
console.log(firstele.innerText);
// can also be changed
console.log(element.innerText);
element.innerText = "editing innertText";


// innerHTML : returns the plain text or HTML contents in the element 
console.log(firstele.innerHTML);
console.log(element.innerText);
element.innerHTML = "<div>One-div<div>Other div</div></div>";

// textContent : returns textual content even for hidden elements
// since here heading4 is hidden. but keeping .innerText  we wil get empty string for hideen heading
// but if we keep .textContent, it gives hidden value also
let heading4 = document.querySelector("#heading4");
console.log(`Using .innerText => ${heading4.innerText}`);
console.log(`Using .textContent => ${heading4.textContent}`);

