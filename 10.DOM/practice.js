// Question-1 : Create a H2 heading element with text - "Hello JavaScript". Append "from kunaal" to this text using js
let heading2 = document.querySelector("#heading2");
heading2.innerText = heading2.innerText+" from kunaal";

// Question-2 : Create 3 divs with common class name - 'box'. Access them & add some unique text to each of them
let divs = document.querySelectorAll(".box");
let val = 1;
for (div of divs){
    div.innerText = `Unique value - ${val}`;
    val++;
}

// or , we can do the below method also...
// divs[0].innerText = "unique value - 1";
// divs[1].innerText = "unique value - 2";
// divs[2].innerText = "unique value - 3";

// Question-3 : Create a new button element. Give it a text "click me", background color of red & text color of white
// Insert the button as the first element inside the body tag
let newbutton = document.createElement("button");
newbutton.innerText = "Click me.";
newbutton.style.backgroundColor = "red";
newbutton.style.color = "white";
document.querySelector("body").prepend(newbutton);

// Question-4 : Create a <p> tag in html, give it a class & some styling.
// Now create a new class in css and try to append this class to  <p> element.
// Did you notice, how you  overwrite the classname when you add a new class. 
// Solve this problem using classList

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

// para.setAttribute("class","mynewPara");
// by doing above...the original class name "myPara" will be comepletely gone and sets mynewPara... thats why in webpage we have to get text-color=red,bgcolor=yellow...but due to overwrirting text-color went off.. to avoid this use classList.

console.log(para.classList);

para.classList.add("mynewPara");
