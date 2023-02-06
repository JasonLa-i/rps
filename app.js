function getComputerChoice() {
    let guess = Math.floor(Math.random() *3) +1;
    if(guess === 1) {
        return "Rock"
    } else if (guess === 2) {
        return "Scissors"
    } else if (guess === 3) {
        return "Paper"
    }

}