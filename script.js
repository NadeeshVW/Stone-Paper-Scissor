let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    //stone, paper, scissors
    const options = ["stone", "paper", "scissor"];
    let randomIdx = Math.floor(Math.random() * 3);/*generates a num btw 0 to 2*/
    return options[randomIdx];
};
const drawGame = () => {
    // console.log("Game was draw.")
    // msg.innerText = ""
    msg.innerText = `Game draw. Play again`
    msg.style.backgroundColor = "#081b31";
};
const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    //modular : har kaam k liye alag fnunction; resuable 
    const compChoice = genCompChoice();
    // console.log("computer choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame(); //draw
    } else {
        let userWin = true;
        if (userChoice === "stone") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You WIN, Your ${userChoice} beats ${compChoice}.`
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You LOSE, Your ${userChoice} losses to ${compChoice}.`
        msg.style.backgroundColor = "red";
    }
}


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked.", userChoice)
        playGame(userChoice);
    });
});