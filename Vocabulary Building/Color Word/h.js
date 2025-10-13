const colors = [
  { name: 'Black', color: '#000000' },
  { name: 'Green', color: '#00FF00' },
  { name: 'Blue', color: '#0000FF' },
  { name: 'Green', color: '#008000' },
  { name: 'Brown', color: '#A52A2A' },
  { name: 'Orange', color: '#FFA500' },
  { name: 'Purple', color: '#800080' }
        ];

const colorMappings = {
  'Black': 'k',
  'Green': 'g',
  'Blue': 'b',
  'Brown': 'br',
  'Orange': 'o',
  'Purple': 'p'
};

let score = 0;
let timeLeft = 60;
let gameTimer;
let soundEnabled = true;

const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const soundToggleBtn = document.getElementById('sound-toggle');

const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const gameOverSound = document.getElementById('game-over-sound');

function generateColorTiles() {
  gameContainer.innerHTML = '';
  let selectedColors = [];

  while (selectedColors.length < 20) {
    const randomColorObject = colors[Math.floor(Math.random() * colors.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)].color;

    selectedColors.push({
      name: randomColorObject.name,
      color: randomColor
    });
  }

  selectedColors.forEach(item => {
    const tile = document.createElement('div');
    tile.classList.add('color-tile');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = item.name;
    nameSpan.style.color = item.color;

    tile.appendChild(nameSpan);
    tile.addEventListener('click', () => checkAnswer(tile, item));
    gameContainer.appendChild(tile);
  });
}

function checkAnswer(tile, item) {
  const userAnswer = prompt(`What COLOR do you see? (k/g/b/br/o/p)`).toLowerCase();
  const correctColor = colorMappings[item.name].toLowerCase();

  if (userAnswer === correctColor) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    tile.classList.add('disabled');

    if (soundEnabled) {
      correctSound.currentTime = 0;
      correctSound.play();
    }
  } else {
    if (soundEnabled) {
      wrongSound.currentTime = 0;
      wrongSound.play();
    }
    alert(`Wrong! The color was ${item.name}`);
  }
}

function startGame() {
  score = 0;
  timeLeft = 60;
  scoreDisplay.textContent = `Score: ${score}`;
  timerDisplay.textContent = `Time: ${timeLeft}s`;
  generateColorTiles();
  startBtn.disabled = true;

  gameTimer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(gameTimer);

      if (soundEnabled) {
        gameOverSound.currentTime = 0;
        gameOverSound.play();
      }

      alert(`Game Over! Your score: ${score}`);
      startBtn.disabled = false;
    }
  }, 1000);
}

soundToggleBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundToggleBtn.textContent = `Sound: ${soundEnabled ? 'ON' : 'OFF'}`;
});

startBtn.addEventListener('click', startGame);