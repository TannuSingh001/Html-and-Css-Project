let choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        let userChoice = choice.getAttribute("id");

        let options = ["stone", "paper", "scissor"];

        let compIndex = Math.floor(Math.random() * 3);
let compChoice = options[compIndex];
playgame(userChoice, compChoice);


    })
});
fun 