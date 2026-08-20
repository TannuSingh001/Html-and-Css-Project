const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");

const userScoreText = document.getElementById("userScore");
const compScoreText = document.getElementById("compScore");

const resetBtn = document.getElementById("reset");

let userScore = 0;
let compScore = 0;

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        let userChoice = choice.getAttribute("id");

        let options = ["stone", "paper", "scissor"];

        let compIndex = Math.floor(Math.random() * 3);

        let compChoice = options[compIndex];

        playGame(userChoice, compChoice);

    });

});

function playGame(userChoice, compChoice) {

    if (userChoice === compChoice) {

        result.innerText = "It's a Tie!";

    }

    else if (

        (userChoice === "stone" && compChoice === "scissor") ||

        (userChoice === "paper" && compChoice === "stone") ||

        (userChoice === "scissor" && compChoice === "paper")

    ) {

        userScore++;

        userScoreText.innerText = userScore;

        result.innerText = "You Win 🎉";

    }

    else {

        compScore++;

        compScoreText.innerText = compScore;

        result.innerText = "Computer Wins 🤖";

    }

}

resetBtn.addEventListener("click", () => {

    userScore = 0;

    compScore = 0;

    userScoreText.innerText = 0;

    compScoreText.innerText = 0;

    result.innerText = "Choose One";

});