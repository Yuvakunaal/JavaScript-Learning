// event
// The change in the state of an object is known as an Event.
// i. Mouse event (click,double click,...)
// ii. Keyboard event (keypress,keyup,keydown,...)
// iii. Form event (submit,...)
// iv. Print event & many more

// event handling in js
let btn1 = document.querySelector("#btn1");
let i = 1;
btn1.onclick = () => {
    console.log(`Btn1 is clicked = ${i} times`);
    i++;
}

let div1 = document.querySelector("#div1");
let j = 1;
div1.onmouseover = () => {
    console.log(`div1 is hovered = ${j} times`);
    j++;
}

// Event object :-
// It is special object that has object details about the event.
// All event handlers have access to the Event object's properties and methods.
let btn2 = document.querySelector("#btn2");
let a = 1;
btn2.onclick = (evt) => { // evt = event object
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(`Btn2 is clicked = ${a} times`); 
    a++;
}

let div2 = document.querySelector("#div2");
let b = 1;
div2.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(`div2 is hovered = ${b} times`);
    b++;
}

// Event Listeners :-
// we can do more events on single (which we cannot do by using above process)
let btn3 = document.querySelector("#btn3");
let c = 1;
btn3.addEventListener("click", (evt) => {
    console.log(c,"btn is clicked");
    c++;
    console.log(evt.type);
});
btn3.addEventListener("click", (evt) => {
    alert("btn3 is clicked");
});

// in the above we created two eventlisteners to btn3... those 2 performs without overwriting

// if we want to remove on eventlistener :-
// we cannot write same func in removeListener since they both located in diff locations in memory..so if you want to remove an eventlistener store that arrow function in a variable and then use it

btn3.addEventListener("click", (evt) => {
    console.log("eventlisteneing-2");
});
let listener3 = (evt) => {
    console.log("eventlisteneing-3");
};
btn3.addEventListener("click",listener3);

btn3.addEventListener("click", (evt) => {
    console.log("eventlisteneing-4");
});

// removing listener3
btn3.removeEventListener("click",listener3);