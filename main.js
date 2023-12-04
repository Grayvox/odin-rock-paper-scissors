const resultBoard = document.querySelector('#result');

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        resultBoard.textContent = `It's a tie! Thou hath both chosen thy same`;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
        resultBoard.textContent = `Paper covers thou's rock. Computer tis victorious!`;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
        resultBoard.textContent = `Rock smashes thou's scissors. Player tis victorious!`;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
        resultBoard.textContent = `Paper covers thou's rock. Player tis victorious!`;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
        resultBoard.textContent = `Scissors cuts thou's paper. Computer tis victorious!`;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
        resultBoard.textContent = `Scissors cuts thou's paper. Player tis victorious!`;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock') {
        resultBoard.textContent = `Paper covers thou's rock. Computer tis victorious!`;
    } else {
        resultBoard.textContent = `Error! One of thy selves chose a false weapon!`;
    }

}

/*
function game() {

    let getPlayerChoice = prompt('Thou must choose thy weapon: Rock, Paper, or Scissors.')

    if (getPlayerChoice == null) {
        console.log('Game cancelled! Reload page to restart.')
        return;
    }

    playRound(getPlayerChoice, getComputerChoice());

}

game();
*/


