let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let rescontainer = document.querySelector(".res-container");
let msg = document.querySelector("#msg");
let countwin = document.querySelector("#countwins");
let theme = document.querySelector("#themebtn");
let body = document.querySelector("body");

let currmode = "orange";
let turnX = true;
let countX = 0;
let countO = 0;

theme.addEventListener("click", () => {
    if (currmode === "orange") {
        currmode = "green";
        body.classList.add("green");
        body.classList.remove("orange");
        theme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#FFB86F"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>`;
    } else {
        currmode = "orange";
        body.classList.add("orange");
        body.classList.remove("green");
        theme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="green"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`;
    }
    console.log(currmode);
});

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const countwins = (winner) => {
    if (winner == "X"){
        countX++;
    }
    else if (winner == "O"){
        countO++;
    }
}

const resetgame = () => {
    turnX = true;
    enableboxes();
    rescontainer.classList.add("hide");
    i=0;
}

let i = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        i++;
        if (turnX){
            box.innerHTML = "X";
            turnX = false;
        }
        else{
            box.innerHTML = "O";
            turnX = true;
        }
        box.disabled = true;
        checkwinnner();
    });
});

const disableboxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerHTML = `Congratulations, winner is <h3 style="color:brown;">${winner}</h3>`;
    countwin.innerHTML = `X wins = ${countX} <br> O wins = ${countO}`;
    rescontainer.classList.remove("hide");
};

const draw = () => {
    msg.innerHTML = "Drawn !";
    countwin.innerHTML = `X wins = ${countX} <br> O wins = ${countO}`;
    rescontainer.classList.remove("hide");
}

const checkwinnner = () => {
    let anywinner = false;
    for (pattern of winningPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val == pos2val && pos2val == pos3val){
                countwins(pos1val);
                showwinner(pos1val);
                console.log(countX,countO);
                disableboxes();
                anywinner = true;
                i=0;
            }
        }
    };
    if (i==9 && !anywinner){
        draw();
    };
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);