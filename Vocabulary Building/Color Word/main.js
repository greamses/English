const colors = [
  { name: 'Black', color: '#000000' },
  { name: 'Blue', color: '#0000FF' },
  { name: 'Green', color: '#008000' },
  { name: 'Brown', color: '#A52A2A' },
  { name: 'Orange', color: '#FFA500' },
  { name: 'Purple', color: '#800080' }
];

let score = 0;
let timeLeft = 60;
let gameTimer;
let soundEnabled = true;
let currentTiles = [];
let currentTileIndex = 0;

const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const soundToggleBtn = document.getElementById('sound-toggle');
const voiceToggleBtn = document.getElementById('voice-toggle');
const instructions= document.querySelector('.instructions')
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const gameOverSound = document.getElementById('game-over-sound');

// Speech recognition setup
let recognition = null;
let isVoiceEnabled = false;

// Check if browser supports speech recognition
if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  recognition.onresult = (event) => {
    const voiceInput = event.results[0][0].transcript.toLowerCase().trim();
    processVoiceInput(voiceInput);
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    alert(`Speech recognition error: ${event.error}`);
  };
} else {
  alert('Speech recognition not supported in this browser');
}

function processVoiceInput(voiceInput) {
  if (!currentTiles.length) return;

  const currentTile = currentTiles[currentTileIndex];

  // Get the actual color of the text (not the content)
  const correctColor = getComputedStyle(currentTile.querySelector('span')).color;

  // Convert the color to a human-readable name for comparison
  const correctColorName = getColorName(correctColor).toLowerCase();

  // Check if the voice input matches the color name
  if (voiceInput === correctColorName) {
    handleCorrectAnswer(currentTile); // Correct answer
  } else{
    return
  }
}

// Helper function to map RGB to color names
function getColorName(rgb) {
  const rgbToHex = (rgb) => {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    return (
      '#' +
      ((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
      .toUpperCase()
    );
  };

  const hexColor = rgbToHex(rgb);

  // Find the color name corresponding to the hex value
  const colorObj = colors.find((c) => c.color.toUpperCase() === hexColor);
  return colorObj ? colorObj.name : 'Unknown';
}

function handleCorrectAnswer(tile) {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;

  tile.classList.add('correct'); // Add a CSS class for highlighting
  tile.classList.add('disabled'); // Disable the tile

  // Go to the next tile immediately
  goToNextTile();
}

function goToNextTile() {
  // Hide current tile
  currentTiles[currentTileIndex].style.opacity = '0.3';

  // Move to next tile
  currentTileIndex++;

  // Check if game is over
  if (currentTileIndex >= currentTiles.length) {
    endGame();
    return;
  }

  // Reveal next tile
  currentTiles[currentTileIndex].style.opacity = '1';

  // Restart voice recognition if enabled
  if (isVoiceEnabled) {
    recognition.start();
  }
}

function generateColorTiles() {
  gameContainer.innerHTML = '';
  currentTiles = [];

  const tiles = [];
  while (tiles.length < 20) {
    const randomTextColor = colors[Math.floor(Math.random() * colors.length)];
    let randomDisplayedColor;

    // Ensure the displayed text color is different from the name's color
    do {
      randomDisplayedColor = colors[Math.floor(Math.random() * colors.length)];
    } while (randomDisplayedColor.name === randomTextColor.name);

    tiles.push({
      textName: randomTextColor.name,
      textColor: randomDisplayedColor.color
    });
  }

  tiles.forEach((tile, index) => {
    const tileElement = document.createElement('div');
    tileElement.classList.add('color-tile');
    tileElement.dataset.colorName = tile.textName; // The correct answer
    tileElement.style.opacity = index === 0 ? '1' : '0';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = tile.textName; // Displayed text
    nameSpan.style.color = tile.textColor; // Text color (mismatched)

    tileElement.appendChild(nameSpan);
    currentTiles.push(tileElement);
    gameContainer.appendChild(tileElement);
  });

  currentTileIndex = 0;
}


function startGame() {
  instructions.classList.add('hide')
  
  // Reset variables
  score = 0;
  timeLeft = 60;
  currentTiles = [];
  currentTileIndex = 0;

  // Update displays
  scoreDisplay.textContent = `Score: ${score}`;
  timerDisplay.textContent = `Time: ${timeLeft}s`;
  gameContainer.innerHTML = ''; // Clear old tiles

  // Generate new tiles
  generateColorTiles();
  startBtn.disabled = true; // Disable start button during the game

  // Start the timer
  gameTimer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);

  // Start voice recognition automatically
  if (recognition) {
    isVoiceEnabled = true; // Ensure voice is enabled for the game
    recognition.start();
  }
}

function endGame() {
  clearInterval(gameTimer);
  if (recognition) {
    recognition.stop(); // Stop recognition when the game ends
  }
  alert(`Game Over! Your score: ${score}`);
  startBtn.disabled = false;
}

// Ensure recognition restarts if stopped unexpectedly
if (recognition) {
  recognition.onend = () => {
    if (isVoiceEnabled && timeLeft > 0) {
      recognition.start(); // Restart recognition during the game
    }
  };
}

// Sound toggle
soundToggleBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundToggleBtn.textContent = `Sound: ${soundEnabled ? 'ON' : 'OFF'}`;
});

// Voice toggle
voiceToggleBtn.addEventListener('click', () => {
  if (!recognition) {
    alert('Speech recognition not supported');
    return;
  }

  isVoiceEnabled = !isVoiceEnabled;
  voiceToggleBtn.textContent = `Voice: ${isVoiceEnabled ? 'ON' : 'OFF'}`;

  if (isVoiceEnabled) {
    recognition.start();
  } else {
    recognition.stop();
  }
});

startBtn.addEventListener('click', startGame);