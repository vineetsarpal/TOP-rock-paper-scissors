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
        //Scissors
        computerChoice = "scissor";
    }
    return computerChoice;
}

function getHumanChoice() {
    return prompt("Please enter your choice: rock or paper or scissor");
}

function playRound(humanChoice, computerChoice) {
    let hc = humanChoice.toLowerCase();
    console.log(`Human choice = ${hc}`);

    let cc = computerChoice;
    console.log(`Computer choice = ${cc}`);

    if (hc === cc) {
        console.log("It\'s a draw!")
    }
    else if (hc === "rock") {
        if (cc === "paper") {
            console.log(`You lose! ${cc} beats ${hc}`);
            computerScore++;
        }
        else if (cc === "scissor") {
            console.log(`You win! ${hc} beats ${cc}`);
            humanScore++;
        }
    }
    else if (hc === "paper") {
        if (cc === "rock") {
            console.log(`You win! ${hc} beats ${cc}`);
            humanScore++;
        }
        else if (cc === "scissor") {
            console.log(`You lose! ${cc} beats ${hc}`);
            computerScore++;
        }
    } 
    else if (hc === "scissor") {
        if (cc === "rock") {
            console.log(`You lose! ${cc} beats ${hc}`);
            computerScore++;
        }
        else if (cc === "paper") {
            console.log(`You win! ${hc} beats ${cc}`);
            humanScore++;
        }
    }
    else (console.log("Hmm.. Something went wrong! Did you enter the choice text properly dude?"))
}

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

playGame();