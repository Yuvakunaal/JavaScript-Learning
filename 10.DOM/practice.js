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