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
let computerSelection = getComputerChoice();
// let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

let playerScore = 0;
let computerScore = 0;
let playerSelection = 'rock';

function playGame(playerChoice, computerSelection){
    if (playerChoice === computerSelection){
        return('its a tie!')
    } else if 
        ((playerChoice === 'rock' && computerSelection === 'paper') ||
        (playerChoice === 'paper' && computerSelection === 'scissors') ||
        (playerChoice === 'scissors' && computerSelection === 'rock'))
    {
        return('you lose!')
        computerScore+=1
    } else if 
        ((playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'paper' && computerSelection === 'scissors') ||
        (playerChoice === 'scissors' && computerSelection === 'rock'))
    {
        return('you win!')
        playerScore+=1;
    }
}
// console.log(playGame(playerSelection, computerSelection))

// function game(){
//     playGame(playerSelection, computerSelection){
//         if 
//         for (let playerScore = 0; playerScore <= 5; playerScore++)
//     }
// }

// if player submits 1 of 3 responses, then output 1 of 3 results per response. 
// 1 win 1 lose 1 draw
// 2 win 2 lose 2 draw
// 3 win 3 lose 3 draw

// is there a way to streamline this.

// then first to 5 is a for loop let i=0 i<=5 i++ 

