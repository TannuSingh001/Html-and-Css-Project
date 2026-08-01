// User Hand
const userHand = document.querySelector(".you-div");

// Computer Hand
const computerHand = document.querySelector(".computert-div");

// Result
const result = document.getElementById("result");

// All Choices
const choices = document.querySelectorAll(".choices");

// Buttons
const gameOverBtn = document.getElementById("gameOver");
const resetBtn = document.getElementById("reset");

// Emoji Object
const emoji = {
    stone: "👊",
    paper: "✋",
    scissor: "✌️"
};

// Computer Choices
const computerChoices = ["stone", "paper", "scissor"];

// Game Start
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        // User Choice
        const userChoice = choice.id;

        // Show User Hand
        userHand.innerText = emoji[userChoice];

        // Random Computer Choice
        const random = Math.floor(Math.random() * computerChoices.length);
        const computerChoice = computerChoices[random];

        // Show Computer Hand
        computerHand.innerText = emoji[computerChoice];

        // Winner Logic
        if (userChoice === computerChoice) {

            result.innerText = "🤝 Match Draw";

        }

        else if (

            (userChoice === "stone" && computerChoice === "scissor") ||
            (userChoice === "paper" && computerChoice === "stone") ||
            (userChoice === "scissor" && computerChoice === "paper")

        ) {

            result.innerText = "🎉 You Win";

        }

        else {

            result.innerText = "💻 Computer Wins";

        }

    });

});

// Game Over
gameOverBtn.addEventListener("click", () => {

    choices.forEach((choice) => {

        choice.style.pointerEvents = "none";

    });

    result.innerText = "❌ Game Over";

    gameOverBtn.disabled = true;

});

// Reset
resetBtn.addEventListener("click", () => {

    // Enable Choices
    choices.forEach((choice) => {

        choice.style.pointerEvents = "auto";

    });

    // Reset Hands
    userHand.innerText = "👊";
    computerHand.innerText = "👊";

    // Reset Result
    result.innerText = "Choose Your Move";

    // Enable Game Over Button
    gameOverBtn.disabled = false;

});