// Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again
let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

modebtn.addEventListener("click", () => {
    if (currmode === "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        modebtn.innerHTML = "to dark";
    }
    else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        modebtn.innerHTML = "to light";
    }
    console.log(currmode)
});