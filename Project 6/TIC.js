const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset");
const turnText = document.querySelector(".turn");

let turn = "X";
let gameOver = false;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];

// Box Click
boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (box.innerText !== "" || gameOver) {
            return;
        }

        box.innerText = turn;

        checkWinner();

        if (!gameOver) {

            turn = turn === "X" ? "O" : "X";
            turnText.innerText = `Player ${turn}'s Turn`;

        }

    });

});

// Winner Check
function checkWinner(){

    for(let pattern of winPatterns){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){

            if(pos1 === pos2 && pos2 === pos3){

                gameOver = true;

                turnText.innerText = `🎉 Player ${pos1} Wins!`;

                boxes[pattern[0]].style.background = "#d1fae5";
                boxes[pattern[1]].style.background = "#d1fae5";
                boxes[pattern[2]].style.background = "#d1fae5";

                return;
            }

        }

    }

    // Draw Check

    let filled = true;

    boxes.forEach((box)=>{

        if(box.innerText === ""){
            filled = false;
        }

    });

    if(filled){

        gameOver = true;
        turnText.innerText = "🤝 Match Draw";

    }

}

// Reset Game

resetBtn.addEventListener("click", resetGame);

function resetGame(){

    turn = "X";
    gameOver = false;

    turnText.innerText = "Player X's Turn";

    boxes.forEach((box)=>{

        box.innerText = "";
        box.style.background = "#fff";

    });

}