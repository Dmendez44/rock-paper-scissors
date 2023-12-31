const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const displayResult = document.querySelector('#result');
const displayScore = document.querySelector('#score');
const displayGameEndResult = document.querySelector('#gameEndResult');
const aiImage = document.querySelector(".ai-img");
const aiWeapon = document.querySelector("div.ai-weapon")
const resultInfo = document.querySelector("div.result-info")

const content = document.querySelector('.content');

const playAgain = document.createElement('button');
playAgain.textContent = 'Play again';
playAgain.classList.add('repeat')

playAgain.addEventListener('click', () => {
    window.location.href="https://dmendez44.github.io/rock-paper-scissors/"
});

let userScore = 0;
let computerScore = 0;
let round = 0;

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
    let userChoice;
    userChoice = userChoice.toLowerCase(); // convert user input into lowercase 
    str2 = userChoice.slice(1); // get everything after the 1st letter i.e index 0
    userChoice = userChoice.charAt(0).toUpperCase() + str2; // get the 1st character uppercase it and and concatenate 2nd part
    return userChoice
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") return `Its A Tie! Rock Ties with rock`;
        else if (computerSelection === "Paper") return `Defeat! Rock is beaten by paper`;
        return `You Win! Rock beats scissors`; // its scissors
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") return `You Win! Paper beats rock`;
        else if (computerSelection === "Paper") return `Its A Tie! Paper ties with paper`;
        return `Defeat! Paper is beaten by scissors`; // its scissors
    } else {
        // player selection must be scissors no need to check
        if (computerSelection === "Rock") return`Defeat! Scissors is beaten by rock`;
        else if (computerSelection === "Paper") return `You Win! Scissors beats paper`;
        return `It's a Tie! Scissors ties with scissors`; // its scissors
    }
}

    rock.addEventListener('click', () => {
        if (userScore !== 5 && computerScore !== 5) updateScore('Rock');
        if (userScore === 5 || computerScore === 5) displayGameEnd();
    });
    paper.addEventListener('click', () => {
        if (userScore !== 5 && computerScore !== 5) updateScore('Paper');
        if (userScore === 5 || computerScore === 5) displayGameEnd();

    });
    scissors.addEventListener('click', () => {
        if (userScore !== 5 && computerScore !== 5) updateScore('Scissors');
        if (userScore === 5 || computerScore === 5) displayGameEnd();
    });

function updateScore(choice) {
    let computerChoice = getComputerChoice()
    let roundResult = playRound(choice, computerChoice);
    let userOutcome = gameResult(roundResult);
    updateAiImage(computerChoice);
    if (userOutcome === "Win") {
        userScore++;
        round++;
        displayRoundOutcome(roundResult);
        displayScoreOutcome();
        updateBorderColor("Win");
    } else if (userOutcome === 'Tie') {
        round++;
        displayRoundOutcome(roundResult);
        displayScoreOutcome();
        updateBorderColor("Tie");
    } else {
        computerScore++;
        round++;
        displayRoundOutcome(roundResult);
        displayScoreOutcome();
        updateBorderColor("Defeat");

    }
}

function gameResult(gameResult) {;
    if (gameResult.includes("Win")) {
            return "Win";
    } else if (gameResult.includes("Tie")) {
                return "Tie";
    } else {
        return "Defeat"; // then computer must have won
     }
}

function updateAiImage(computerChoice) {
    if (computerChoice === 'Rock') {
        aiImage.src = './imgs/rock.png';
    } else if (computerChoice === 'Paper') {
        aiImage.src = './imgs/paper.png';
    } else {
        aiImage.src = './imgs/scissors.png';
    }
}

function updateBorderColor(roundOutcome) {
    aiWeapon.classList.remove('win')
    aiWeapon.classList.remove('tie')
    aiWeapon.classList.remove('lose')

    resultInfo.classList.remove('win')
    resultInfo.classList.remove('tie')
    resultInfo.classList.remove('lose')

    
    if (roundOutcome === "Win") {
        aiWeapon.classList.toggle('win')
        resultInfo.classList.toggle('win')
    } else if (roundOutcome === "Defeat") {
        aiWeapon.classList.toggle('lose')
        resultInfo.classList.toggle('lose')
    } else {
        aiWeapon.classList.toggle('tie')
        resultInfo.classList.toggle('tie')
    }
}
function displayRoundOutcome(roundResult) {
    displayResult.textContent = roundResult;
}

function displayScoreOutcome() {
    displayScore.textContent = `Player score: ${userScore} | AI Score: ${computerScore}`;
}

function displayGameEnd() {
    if (userScore === 5) {
        displayGameEndResult.textContent = 'You win!';
        content.appendChild(playAgain);
    } else {
        displayGameEndResult.textContent = 'You lost...';
        content.appendChild(playAgain);

    }

}