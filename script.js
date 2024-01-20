//--------------------firstt part----------------------------
//compiuter choice

function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomRPS = choice[Math.floor(Math.random() * choice.length)];
    console.log(randomRPS);
    return randomRPS;
  }

//------------------second part------------------------------

function playRound(playerSelection, compiuterSelection) {
    if (playerSelection === 'Rock' && compiuterSelection === 'Scissors') {
        return 'You Win! Rock beats Scissors';
      } else if (playerSelection === 'Paper' && compiuterSelection === 'Rock') {
        return 'You Win! Paper beats Rock';
      } else if (playerSelection === 'Scissors' && compiuterSelection === 'Paper') {
        return 'You Win! Scissors beats Paper';
      } else if (playerSelection === 'Scissors' && compiuterSelection === 'rock') {
        return 'You Lose! Rock beats Scissors';
      } else if (playerSelection === 'Paper' &&  compiuterSelection === 'Scissors') {
        return 'You Lose! Scissors beats Paper';
      } else if (playerSelection === 'Rock' && compiuterSelection === 'Paper') {
        return 'You Lose! Paper beats Rock';
      } else if (playerSelection === compiuterSelection) {
        return 'Tie! Play Another Round';
      }
    
}

const playerSelection = "Rock";
const compiuterSelection = getComputerChoice()
console.log(playRound(playerSelection, compiuterSelection));   
 