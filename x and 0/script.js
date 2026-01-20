
let turn = 1
function turns() {
    if (turn == 1) {
        document.getElementById("coPilot").innerText = "0's Turn";
        turn = 0;
    }
    else {
        document.getElementById("coPilot").innerText = "X's Turn";
        turn = 1;
    }
}

function reset() {
    document.querySelectorAll(".box").forEach(element => {
        element.innerText = "";
    });
    turn = 1;
    document.getElementById("coPilot").innerText = "X's Turn";
    document.getElementById("descision").innerText = "";
    document.getElementById("line").style.width = "0px";
}
b1.addEventListener("click", reset);

let box = document.getElementsByClassName("box");
Array.from(box).forEach(el => {
    el.addEventListener("click", function (event) {
        turns(event);
        placeBlock(event);
    });

});


function placeBlock(event) {
    if (turn == 1 && event.target.innerText == "") {
        event.target.innerText = "0";
        checkWin();
    }
    else if (turn == 0 && event.target.innerText == "") {
        event.target.innerText = "X";
        checkWin();
    }

}
function checkWin() {
    let list = [
        [0, 1, 2, 0, 50, 0],
        [3, 4, 5, 0, 150, 0],
        [6, 7, 8, 0, 250, 0],
        [0, 4, 8, 0, 150, 45],
        [2, 4, 6, 0, 150, -45],
        [0, 3, 6, -100, 150, 90],
        [2, 5, 8, 100, 150, 90]
    ]
    list.forEach(e => {
        if (box[e[0]].innerText == box[e[1]].innerText && box[e[0]].innerText == box[e[2]].innerText && box[e[0]].innerText != "") {
            document.getElementById("descision").innerText = box[e[0]].innerText + " Wins !!";
            document.getElementById("line").style.width = "300px"
            document.getElementById("line").style.transform = `translate(${e[3]}px,${e[4]}px) rotate(${e[5]}deg)`;
        }
    });

}

