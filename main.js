function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log(`It's a tie! Thou hath both chosen thy same`)
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
        console.log(`Paper covers thou's rock. Computer tis victorious!`)
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
        console.log(`Rock smashes thou's scissors. Player tis victorious!`)
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
        console.log(`Paper covers thou's rock. Player tis victorious!`)
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
        console.log(`Scissors cuts thou's paper. Computer tis victorious!`)
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
        console.log(`Scissors cuts thou's paper. Player tis victorious!`)
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock') {
        console.log(`Paper covers thou's rock. Computer tis victorious!`)
    } else {
        console.log(`Error! One of thy selves chose a false weapon!`)
    }

}

function game() {

    let getPlayerChoice = prompt('Thou must choose thy weapon: Rock, Paper, or Scissors.')

    if (getPlayerChoice == null) {
        console.log('Game cancelled! Reload page to restart.')
        return;
    }

    playRound(getPlayerChoice, getComputerChoice());

}

game();