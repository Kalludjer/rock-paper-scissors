//--------------------firstt part----------------------------

let playerScore = 0;
let compiuterScore = 0;

//compiuter choice

function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomRPS = choice[Math.floor(Math.random() * choice.length)];
    return randomRPS;
  }

//------------------second part------------------------------

function playRound(playerSelection, compiuterSelection) {
    if (playerSelection === 'Rock' && compiuterSelection === 'Scissors') {
      playerScore += 1;  
      return 'You Win! Rock beats Scissors';
      } else if (playerSelection === 'Paper' && compiuterSelection === 'Rock') {
        playerScore += 1;
        return 'You Win! Paper beats Rock';
      } else if (playerSelection === 'Scissors' && compiuterSelection === 'Paper') {
        playerScore += 1;
        return 'You Win! Scissors beats Paper';
      } else if (playerSelection === 'Scissors' && compiuterSelection === 'rock') {
        compiuterScore +=1;
        return 'You Lose! Rock beats Scissors';
      } else if (playerSelection === 'Paper' &&  compiuterSelection === 'Scissors') {
        compiuterScore += 1;
        return 'You Lose! Scissors beats Paper';
      } else if (playerSelection === 'Rock' && compiuterSelection === 'Paper') {
        compiuterScore += 1;
        return 'You Lose! Paper beats Rock';
      } else if (playerSelection === compiuterSelection) {
        return 'Tie! Play Another Round';
      }
    
}

//------------------last part---------------------------------

function game() {
   for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors?")
    const compiuterSelection = getComputerChoice();
    
    alert(playRound(playerSelection, compiuterSelection));
    
    console.log(playerScore);
    console.log(compiuterScore);
    
  }
}

game();





