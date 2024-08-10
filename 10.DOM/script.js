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

// Attributes :-
// getAttribute(attr) : to get the attribute value 
// support : <div class="hello" id="hi"></div>, here class and id are attributes of div
let div = document.querySelector("div");
let id = div.getAttribute("id");
console.log(id);

let clas = div.getAttribute("class");
console.log(clas);

// setAttribute(attr,value) : to set the attribute value
let d = document.querySelector("div");
d.setAttribute("class","box");

// node.style
let divii = document.querySelector(".boxe");
divii.style.backgroundColor = "cyan";
divii.style.border = "3px dotted grey";
divii.innerHTML = "<h4>Welcome</h4>";
divii.style.fontSize = "22px";


// Creation of elements in html using js
// Two step process :-
// 1. create element using its tag name
let element1 = document.createElement("button");
element1.innerText = "CLICK-1";
console.dir(element1);

let element2 = document.createElement("button");
element2.innerText = "CLICK-2";
console.dir(element2);

let element3 = document.createElement("button");
element3.innerText = "CLICK-3";
console.dir(element3);

let element4 = document.createElement("button");
element4.innerText = "CLICK-4";
console.dir(element4);

let boxx = document.querySelector("#box");
boxx.append(element1);
boxx.prepend(element2);
boxx.before(element3);
boxx.after(element4);

// without touching html file or html elements id or class...
// using this small logic we can create an element inside webpage without touching html
let newheading = document.createElement("h2");
newheading.innerHTML = "<h2>Welcome to js</h2>";
document.querySelector("body").prepend(newheading);

// deleting node
let paragraph = document.querySelector(".para");
paragraph.remove();