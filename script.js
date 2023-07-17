function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize player score
let playerScore = 0;

// Get DOM elements
const playerScoreElement = document.getElementById('player-score');
const playerRollButton = document.getElementById('player-roll');
const playerDiceElement = document.getElementById('player-dice');

// Add event listener to roll button
playerRollButton.addEventListener('click', () => {
  const roll = getRandomNumber(1, 6);

  updateDice(playerDiceElement, roll);

  if (roll === 1) {
    playerScore = 1;
    alert('You rolled a 1. Score reset to 1.');
  } else {
    playerScore += roll;
  }

  playerScoreElement.textContent = playerScore;

  if (playerScore >= 20) {
    alert('You win!');
    resetGame();
  }
});

// Function to update dice face based on roll
function updateDice(diceElement, roll) {
  diceElement.className = 'dice'; // Reset dice class for each roll

  switch (roll) {
    case 1:
      diceElement.classList.add('dice-1');
      break;
    case 2:
      diceElement.classList.add('dice-2');
      break;
    case 3:
      diceElement.classList.add('dice-3');
      break;
    case 4:
      diceElement.classList.add('dice-4');
      break;
    case 5:
      diceElement.classList.add('dice-5');
      break;
    case 6:
      diceElement.classList.add('dice-6');
      break;
    default:
      break;
  }
}

// Function to reset the game
function resetGame() {
  playerScore = 0;

  playerScoreElement.textContent = playerScore;

  playerRollButton.disabled = false;

  playerDiceElement.className = 'dice';
}
