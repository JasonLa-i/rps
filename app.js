function getComputerChoice() {
    let guess = Math.floor(Math.random() *3) +1;
    if(guess === 1) {
        return "rock"
    } else if (guess === 2) {
        return "scissors"
    } else if (guess === 3) {
        return "paper"
    }
}

let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

function playGame(playerChoice, getComputerChoice()){
    if (playerChoice === 'rock' && getComputerChoice() === 'rock'){
        console.log('its a tie! you both picked rock')
    } else if (playerChoice === 'rock' && getComputerChoice() === 'paper'){
        console.log('you lose! computer picked paper')
    } else if (playerChoice === 'rock' && getComputerChoice() === 'scissors'){
        console.log('you win!! computer picked scissors')
    }
}

// if player submits 1 of 3 responses, then output 1 of 3 results per response. 
// 1 win 1 lose 1 draw
// 2 win 2 lose 2 draw
// 3 win 3 lose 3 draw

// is there a way to streamline this.

playerchoice

// then first to 5 is a for loop let i=0 i<=5 i++ 