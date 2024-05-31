console.log("Rock Paper Scisscors Game! Let\'s Play!")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = "";
    let randNo = Math.random();
    if (randNo <= 0.33) {
        //Rock
        computerChoice = "rock";
    }
    else if (randNo <= 0.66) {
        //Paper
        computerChoice = "paper";
    }
    else {
        //Scissor
        computerChoice = "scissor";
    }
    return computerChoice;
}

/*
function getHumanChoice() {
    return prompt("Please enter your choice: rock or paper or scissor");
}
*/


function playRound(humanChoice, computerChoice) {
    let hc = humanChoice.toLowerCase();
    console.log(`Human choice = ${hc}`);

    let cc = computerChoice;
    console.log(`Computer choice = ${cc}`);

    const humanScoreElement = document.querySelector("#humanScore");
    const computerScoreElement = document.querySelector("#computerScore");

    const roundResultElement = document.querySelector("#roundResult");
    const gameResultElement = document.querySelector("#gameResult");

    if (hc === cc) {
        //console.log("It\'s a draw!")
        roundResultElement.textContent = "It\'s a draw!";
    }
    else if (hc === "rock") {
        if (cc === "paper") {
            //console.log(`You lose! ${cc} beats ${hc}`);
            roundResultElement.textContent = `You lose! ${cc} beats ${hc}`;
            computerScore++;
        }
        else if (cc === "scissor") {
            //console.log(`You win! ${hc} beats ${cc}`);
            roundResultElement.textContent = `You win! ${hc} beats ${cc}`;
            humanScore++;
        }
    }
    else if (hc === "paper") {
        if (cc === "rock") {
            //console.log(`You win! ${hc} beats ${cc}`);
            roundResultElement.textContent = `You win! ${hc} beats ${cc}`;
            humanScore++;
        }
        else if (cc === "scissor") {
            //console.log(`You lose! ${cc} beats ${hc}`);
            roundResultElement.textContent = `You lose! ${cc} beats ${hc}`;
            computerScore++;
        }
    } 
    else if (hc === "scissor") {
        if (cc === "rock") {
            //console.log(`You lose! ${cc} beats ${hc}`);
            roundResultElement.textContent = `You lose! ${cc} beats ${hc}`;
            computerScore++;
        }
        else if (cc === "paper") {
            //console.log(`You win! ${hc} beats ${cc}`);
            roundResultElement.textContent = `You win! ${hc} beats ${cc}`;
            humanScore++;
        }
    }
    else (console.log("Hmm.. Something went wrong!"))

    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;

    if(humanScore >= 5) {
        gameResultElement.textContent = "You win the game!"
        isPlayGame = false;
    }
    else if(computerScore >= 5) {
        gameResultElement.textContent = "You lose the game!"
        isPlayGame = false;
    }

    if (humanScore >= 5) {
        gameResultElement.textContent = "Game Over! You win the game! :)";
        disableButtons();
    } else if (computerScore >= 5) {
        gameResultElement.textContent = "Game Over! You lose the game! :(";
        disableButtons();
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll("#rpsButton button");
    buttons.forEach(button => {
        button.disabled = true;
    });
}

/*
function playGame() {
    noOfRounds = 5;
    for (let i = 1; i <= noOfRounds; i++) {
        console.log(`Round ${i}/${noOfRounds} begins!`);
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    }
    else {
        console.log("You lose the game!");
    }
    console.log(`Your score is ${humanScore}/${noOfRounds}`);
    
}
*/

const rpsButton = document.querySelector("#rpsButton");

rpsButton.addEventListener("click", (event) => {
    let target = event.target;

    let humanChoice = '';
    let computerChoice = getComputerChoice();

    switch(target.id) {
        case "rock":
            console.log(`${target.id} selected`);
            humanChoice = target.id;
            playRound(humanChoice, computerChoice);
            break;
        case "paper":
            console.log(`${target.id} selected`);
            humanChoice = target.id;
            playRound(humanChoice, computerChoice);
            break;
        case "scissor":
            console.log(`${target.id} selected`);
            humanChoice = target.id;
            playRound(humanChoice, computerChoice);
            break;
        }  
    }
    
)

