const resultBoard = document.querySelector('#result');

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        resultBoard.textContent = `It's a tie! Thou hath both chosen thy same`;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
        resultBoard.textContent = `Computer's paper covers thou's rock. Computer tis victorious!`;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
        resultBoard.textContent = `Thou's Rock smashes Computer's scissors. Player tis victorious!`;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
        resultBoard.textContent = `Thou's paper covers Computer's rock. Player tis victorious!`;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
        resultBoard.textContent = `Computer's scissors cuts thou's paper. Computer tis victorious!`;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
        resultBoard.textContent = `Thou's scissors cuts computer's paper. Player tis victorious!`;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock') {
        resultBoard.textContent = `Computer's paper covers thou's rock. Computer tis victorious!`;
    } else {
        resultBoard.textContent = `Error! One of thy selves chose a false weapon!`;
    }

}


