// Helper function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize player scores
let player1Score = 0;
let player2Score = 0;

// Get DOM elements
const player1ScoreElement = document.getElementById('player1-score');
const player2ScoreElement = document.getElementById('player2-score');

const player1RollButton = document.getElementById('player1-roll');
const player2RollButton = document.getElementById('player2-roll');

const player1DiceElement = document.getElementById('player1-dice');
const player2DiceElement = document.getElementById('player2-dice');

// Add event listeners to roll buttons for both players
player1RollButton.addEventListener('click', () => {
  const roll = getRandomNumber(1, 6);

  updateDice(player1DiceElement, roll);

  if (roll === 1) {
    player1Score = 1;
    alert('Player 1 rolled a 1. Score reset to 1.');
  } else {
    player1Score += roll;
  }

  player1ScoreElement.textContent = player1Score;

  if (player1Score >= 20) {
    alert('Player 1 wins!');
    resetGame();
  }
});

player2RollButton.addEventListener('click', () => {
  const roll = getRandomNumber(1, 6);

  updateDice(player2DiceElement, roll);

  if (roll === 1) {
    player2Score = 1;
    alert('Player 2 rolled a 1. Score reset to 1.');
  } else {
    player2Score += roll;
  }

  player2ScoreElement.textContent = player2Score;

  if (player2Score >= 20) {
    alert('Player 2 wins!');
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
  player1Score = 0;
  player2Score = 0;

  player1ScoreElement.textContent = player1Score;
  player2ScoreElement.textContent = player2Score;

  player1RollButton.disabled = false;
  player2RollButton.disabled = false;

  player1DiceElement.className = 'dice';
  player2DiceElement.className = 'dice';
}
