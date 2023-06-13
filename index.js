function getComputerChoice() {
    // function will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
    // use math.floor(math.random() * 3) + 1 to return a random num between 1 and 3
    // if num === 1 return elif num == 2 return Paper otherwise return ‘Scissors’
    let randomNum = Math.floor(Math.random() * 3) + 1
    if (randomNum === 1) {
        return 'Rock';
    } else if (randomNum === 2){
        return 'Paper';
    }
    return 'Scissors';
}

function getUserChoice() {
    let userChoice = prompt("Select a choice, Rock Paper or Scissors"); // enter user choice
    userChoice = userChoice.toLowerCase(); // convert user input into lowercase 
    str2 = userChoice.slice(1); // get everything after the 1st letter i.e index 0
    userChoice = userChoice.charAt(0).toUpperCase() + str2; // get the 1st character uppercase it and and concatenate 2nd part
    return userChoice
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") return `Its A Tie! Your Choice: ${playerSelection} equals AI Choice: ${computerSelection}`;
        else if (computerSelection === "Paper") return `Defeat! Your Choice: ${playerSelection} loses to AI Choice: ${computerSelection}`;
        return `You Win Your Choice: ${playerSelection} beats AI Choice: ${computerSelection}`; // its scissors
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") return `You Win! Your Choice: ${playerSelection} beats AI Choice: ${computerSelection}`;
        else if (computerSelection === "Paper") return `Its A Tie! Your Choice: ${playerSelection} equals AI Choice: ${computerSelection}`;
        return `Defeat! Your Choice: ${playerSelection} loses to AI Choice: ${computerSelection}`; // its scissors
    } else {
        // player selection must be scissors no need to check
        if (computerSelection === "Rock") return`Defeat! Your Choice: ${playerSelection} loses to AI Choice: ${computerSelection}`;
        else if (computerSelection === "Paper") return `You Win Your Choice: ${playerSelection} beats AI Choice: ${computerSelection}`;
        return `Its A Tie! Your Choice: ${playerSelection} equals AI Choice: ${computerSelection}`; // its scissors
    }
}

function game() {
    userScore = 0;
    computerScore = 0;
    rounds = 0;
    keepGameGoing = true;

    while (keepGameGoing) {
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        let outcome = playRound(userChoice, computerChoice)

        if (userScore === 5) {
            console.log(`User Wins! Your Score: ${userScore} vs ${computerScore}`);
            keepGameGoing = false
        } else if (computerScore === 5) {
            console.log(`... The AI has won. Your Score ${userScore} vs ${computerScore}`);
            keepGameGoing = false
        }

        if (keepGameGoing === true) {
            if (outcome.includes("Win")) {
                console.log(outcome);
                userScore++;
                rounds++;
            } else if (outcome.includes("Tie")) {
                console.log(outcome);
                rounds++;
            } else {
                console.log(outcome);
                computerScore++; // then computer must have won
            }
        }
    }
}