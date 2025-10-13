// Game constants
const CELL_SIZE = 20;
const PACMAN_SPEED = 2;
const GHOST_SPEED = 1.5;
const GAME_DURATION = 60; // seconds

// Game variables
let canvas, ctx;
let pacman = { x: 0, y: 0, radius: 8, direction: 'right', nextDirection: 'right', mouthAngle: 0 };
let ghosts = [];
let walls = [];
let wordCells = [];
let collectedWords = [];
let score = 0;
let timeLeft = GAME_DURATION;
let gameInterval;
let timerInterval;
let isGameRunning = false;
let currentSentence = "";
let highlightedWord = "";
let correctSynonym = "";

// Vocabulary data
const vocabularySets = [
  {
    sentence: "The <span class='highlight'>enormous</span> tree cast a shadow over the entire park.",
    highlighted: "enormous",
    correct: "gigantic",
    incorrect: ["tiny", "small", "average"]
            },
  {
    sentence: "She gave a <span class='highlight'>brief</span> explanation before moving on.",
    highlighted: "brief",
    correct: "concise",
    incorrect: ["lengthy", "extended", "long"]
            },
  {
    sentence: "His <span class='highlight'>courageous</span> act saved the child from danger.",
    highlighted: "courageous",
    correct: "brave",
    incorrect: ["fearful", "timid", "cowardly"]
            },
  {
    sentence: "The <span class='highlight'>ancient</span> ruins attracted many tourists.",
    highlighted: "ancient",
    correct: "old",
    incorrect: ["new", "modern", "recent"]
            },
  {
    sentence: "She had a <span class='highlight'>vivid</span> imagination that inspired her art.",
    highlighted: "vivid",
    correct: "bright",
    incorrect: ["dull", "faded", "dim"]
            }
        ];

// Maze layout (1 = wall, 0 = path, W = word cell)
const mazeLayout = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
            [1, 'W', 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 'W', 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 1, 1, 1, 'W', 1, 1, 'W', 1, 1, 1, 0, 1, 1, 1, 1],
            [0, 0, 0, 1, 0, 1, 'W', 0, 0, 0, 0, 0, 0, 'W', 1, 0, 1, 0, 0, 0],
            [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
            [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
            [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
            [1, 'W', 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 'W', 1],
            [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 'W', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'W', 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];

// Initialize game
function initGame() {
  canvas = document.getElementById('gameCanvas');
  ctx = canvas.getContext('2d');

  // Set canvas size
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Initialize game elements
  initMaze();
  initPacman();
  initGhosts();
  initWordCells();

  // Set up controls
  setupControls();

  // Show start modal
  document.getElementById('startModal').style.display = 'flex';

  // Play background music
  document.getElementById('backgroundMusic').volume = 0.3;
}

function resizeCanvas() {
  const cellSize = Math.min(
    Math.floor(window.innerWidth * 0.9 / mazeLayout[0].length),
    Math.floor((window.innerHeight * 0.6) / mazeLayout.length)
  );

  canvas.width = mazeLayout[0].length * CELL_SIZE;
  canvas.height = mazeLayout.length * CELL_SIZE;
  canvas.style.width = `${canvas.width}px`;
  canvas.style.height = `${canvas.height}px`;
}

function initMaze() {
  walls = [];
  for (let y = 0; y < mazeLayout.length; y++) {
    for (let x = 0; x < mazeLayout[y].length; x++) {
      if (mazeLayout[y][x] === 1) {
        walls.push({ x, y });
      }
    }
  }
}

function initPacman() {
  // Find starting position for Pacman (first 0 in maze)
  for (let y = 0; y < mazeLayout.length; y++) {
    for (let x = 0; x < mazeLayout[y].length; x++) {
      if (mazeLayout[y][x] === 0) {
        pacman.x = x * CELL_SIZE + CELL_SIZE / 2;
        pacman.y = y * CELL_SIZE + CELL_SIZE / 2;
        return;
      }
    }
  }
}

function initGhosts() {
  ghosts = [];
  const ghostColors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff'];

  // Find positions for ghosts (W cells)
  let ghostPositions = [];
  for (let y = 0; y < mazeLayout.length; y++) {
    for (let x = 0; x < mazeLayout[y].length; x++) {
      if (mazeLayout[y][x] === 'W') {
        ghostPositions.push({ x, y });
      }
    }
  }

  // Create ghosts (up to 4)
  for (let i = 0; i < Math.min(4, ghostPositions.length); i++) {
    const pos = ghostPositions[i];
    ghosts.push({
      x: pos.x * CELL_SIZE + CELL_SIZE / 2,
      y: pos.y * CELL_SIZE + CELL_SIZE / 2,
      radius: 8,
      color: ghostColors[i % ghostColors.length],
      direction: ['up', 'down', 'left', 'right'][Math.floor(Math.random() * 4)],
      speed: GHOST_SPEED
    });
  }
}

function initWordCells() {
  wordCells = [];
  collectedWords = [];

  // Select a random vocabulary set
  const vocabSet = vocabularySets[Math.floor(Math.random() * vocabularySets.length)];
  currentSentence = vocabSet.sentence;
  highlightedWord = vocabSet.highlighted;
  correctSynonym = vocabSet.correct;

  // Update sentence display
  document.getElementById('sentence-display').innerHTML = currentSentence;

  // Find positions for word cells (W cells)
  const wordPositions = [];
  for (let y = 0; y < mazeLayout.length; y++) {
    for (let x = 0; x < mazeLayout[y].length; x++) {
      if (mazeLayout[y][x] === 'W') {
        wordPositions.push({ x, y });
      }
    }
  }

  // Shuffle positions
  wordPositions.sort(() => Math.random() - 0.5);

  // Assign correct word to first position
  if (wordPositions.length > 0) {
    wordCells.push({
      x: wordPositions[0].x,
      y: wordPositions[0].y,
      word: correctSynonym,
      isCorrect: true,
      collected: false
    });
  }

  // Assign incorrect words to remaining positions
  const incorrectWords = [...vocabSet.incorrect];
  for (let i = 1; i < wordPositions.length && i - 1 < incorrectWords.length; i++) {
    wordCells.push({
      x: wordPositions[i].x,
      y: wordPositions[i].y,
      word: incorrectWords[i - 1],
      isCorrect: false,
      collected: false
    });
  }
}

function setupControls() {
  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (!isGameRunning) return;

    switch (e.key) {
      case 'ArrowUp':
        pacman.nextDirection = 'up';
        break;
      case 'ArrowDown':
        pacman.nextDirection = 'down';
        break;
      case 'ArrowLeft':
        pacman.nextDirection = 'left';
        break;
      case 'ArrowRight':
        pacman.nextDirection = 'right';
        break;
    }
  });

  // Mobile controls
  document.getElementById('up-btn').addEventListener('click', () => pacman.nextDirection = 'up');
  document.getElementById('down-btn').addEventListener('click', () => pacman.nextDirection = 'down');
  document.getElementById('left-btn').addEventListener('click', () => pacman.nextDirection = 'left');
  document.getElementById('right-btn').addEventListener('click', () => pacman.nextDirection = 'right');

  // Start and restart buttons
  document.getElementById('startBtn').addEventListener('click', startGame);
  document.getElementById('restartBtn').addEventListener('click', restartGame);
}

function startGame() {
  document.getElementById('startModal').style.display = 'none';
  document.getElementById('backgroundMusic').play();

  score = 0;
  timeLeft = GAME_DURATION;
  updateScore();
  updateTimer();

  isGameRunning = true;

  // Start game loop
  gameInterval = setInterval(updateGame, 1000 / 60);

  // Start timer
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function restartGame() {
  document.getElementById('gameOverModal').style.display = 'none';
  clearInterval(gameInterval);
  clearInterval(timerInterval);

  initPacman();
  initGhosts();
  initWordCells();

  startGame();
}

function endGame() {
  isGameRunning = false;
  clearInterval(gameInterval);
  clearInterval(timerInterval);

  document.getElementById('backgroundMusic').pause();
  document.getElementById('backgroundMusic').currentTime = 0;

  document.getElementById('final-score').textContent = score;
  document.getElementById('gameOverModal').style.display = 'flex';
}

function updateGame() {
  updatePacman();
  updateGhosts();
  checkCollisions();
  drawGame();
}

function updatePacman() {
  // Try to change direction if possible
  const originalDirection = pacman.direction;
  if (canMove(pacman.x, pacman.y, pacman.nextDirection)) {
    pacman.direction = pacman.nextDirection;
  }

  // If still can't move in new direction, try current direction
  if (!canMove(pacman.x, pacman.y, pacman.direction)) {
    pacman.direction = originalDirection;
    return;
  }

  // Move Pacman
  switch (pacman.direction) {
    case 'up':
      pacman.y -= PACMAN_SPEED;
      break;
    case 'down':
      pacman.y += PACMAN_SPEED;
      break;
    case 'left':
      pacman.x -= PACMAN_SPEED;
      break;
    case 'right':
      pacman.x += PACMAN_SPEED;
      break;
  }

  // Animate mouth
  pacman.mouthAngle = (pacman.mouthAngle + 0.2) % (Math.PI / 4);

  // Wrap around if going through tunnel
  if (pacman.x < -pacman.radius) {
    pacman.x = canvas.width + pacman.radius;
  } else if (pacman.x > canvas.width + pacman.radius) {
    pacman.x = -pacman.radius;
  }
}

function canMove(x, y, direction) {
  // Check if Pacman can move in the given direction without hitting a wall
  const radius = pacman.radius;
  let nextX = x;
  let nextY = y;

  switch (direction) {
    case 'up':
      nextY -= PACMAN_SPEED;
      break;
    case 'down':
      nextY += PACMAN_SPEED;
      break;
    case 'left':
      nextX -= PACMAN_SPEED;
      break;
    case 'right':
      nextX += PACMAN_SPEED;
      break;
  }

  // Check against all walls
  for (const wall of walls) {
    const wallLeft = wall.x * CELL_SIZE;
    const wallRight = wallLeft + CELL_SIZE;
    const wallTop = wall.y * CELL_SIZE;
    const wallBottom = wallTop + CELL_SIZE;

    if (
      nextX + radius > wallLeft &&
      nextX - radius < wallRight &&
      nextY + radius > wallTop &&
      nextY - radius < wallBottom
    ) {
      return false;
    }
  }

  return true;
}

function updateGhosts() {
  for (const ghost of ghosts) {
    // Change direction randomly or when hitting a wall
    if (Math.random() < 0.02 || !canMove(ghost.x, ghost.y, ghost.direction, true)) {
      const directions = ['up', 'down', 'left', 'right'];
      ghost.direction = directions[Math.floor(Math.random() * directions.length)];
    }

    // Move ghost
    switch (ghost.direction) {
      case 'up':
        ghost.y -= ghost.speed;
        break;
      case 'down':
        ghost.y += ghost.speed;
        break;
      case 'left':
        ghost.x -= ghost.speed;
        break;
      case 'right':
        ghost.x += ghost.speed;
        break;
    }

    // Wrap around if going through tunnel
    if (ghost.x < -ghost.radius) {
      ghost.x = canvas.width + ghost.radius;
    } else if (ghost.x > canvas.width + ghost.radius) {
      ghost.x = -ghost.radius;
    }
  }
}

function checkCollisions() {
  // Check word cell collisions
  for (const wordCell of wordCells) {
    if (wordCell.collected) continue;

    const cellX = wordCell.x * CELL_SIZE + CELL_SIZE / 2;
    const cellY = wordCell.y * CELL_SIZE + CELL_SIZE / 2;
    const distance = Math.sqrt(
      Math.pow(pacman.x - cellX, 2) +
      Math.pow(pacman.y - cellY, 2)
    );

    if (distance < pacman.radius + 10) {
      wordCell.collected = true;
      collectedWords.push(wordCell.word);

      if (wordCell.isCorrect) {
        score += 10;
        document.getElementById('eatSound').play();
      } else {
        score -= 5;
      }

      updateScore();

      // Check if all correct words are collected
      const allCorrectCollected = wordCells.every(w =>
        !w.isCorrect || w.collected
      );

      if (allCorrectCollected) {
        initWordCells();
      }
    }
  }

  // Check ghost collisions
  for (const ghost of ghosts) {
    const distance = Math.sqrt(
      Math.pow(pacman.x - ghost.x, 2) +
      Math.pow(pacman.y - ghost.y, 2)
    );

    if (distance < pacman.radius + ghost.radius) {
      document.getElementById('ghostSound').play();
      endGame();
      return;
    }
  }
}

function drawGame() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw maze
  drawMaze();

  // Draw word cells
  drawWordCells();

  // Draw ghosts
  drawGhosts();

  // Draw Pacman
  drawPacman();
}

function drawMaze() {
  ctx.fillStyle = '#1a1a6e';
  ctx.strokeStyle = '#3333ff';
  ctx.lineWidth = 2;

  for (const wall of walls) {
    ctx.fillRect(
      wall.x * CELL_SIZE,
      wall.y * CELL_SIZE,
      CELL_SIZE,
      CELL_SIZE
    );
    ctx.strokeRect(
      wall.x * CELL_SIZE,
      wall.y * CELL_SIZE,
      CELL_SIZE,
      CELL_SIZE
    );
  }
}

function drawWordCells() {
  ctx.font = '10px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (const wordCell of wordCells) {
    if (wordCell.collected) continue;

    const cellX = wordCell.x * CELL_SIZE + CELL_SIZE / 2;
    const cellY = wordCell.y * CELL_SIZE + CELL_SIZE / 2;

    // Draw door entrance (only if not collected)
    ctx.fillStyle = wordCell.isCorrect ? '#00ff00' : '#ff0000';
    ctx.beginPath();
    ctx.arc(cellX, cellY, 10, 0, Math.PI * 2);
    ctx.fill();

    // Draw word
    ctx.fillStyle = '#ffffff';
    ctx.fillText(wordCell.word, cellX, cellY);
  }
}

function drawGhosts() {
  for (const ghost of ghosts) {
    // Draw ghost body
    ctx.fillStyle = ghost.color;
    ctx.beginPath();
    ctx.arc(ghost.x, ghost.y, ghost.radius, Math.PI, 0, false);
    ctx.lineTo(ghost.x + ghost.radius, ghost.y + ghost.radius);

    // Draw ghost bottom waves
    const waveSize = ghost.radius / 3;
    for (let i = 0; i < 3; i++) {
      ctx.lineTo(
        ghost.x + ghost.radius - (i * waveSize * 2) - waveSize,
        ghost.y + ghost.radius
      );
      ctx.lineTo(
        ghost.x + ghost.radius - (i * waveSize * 2) - (waveSize * 2),
        ghost.y + ghost.radius - waveSize
      );
    }
    ctx.lineTo(ghost.x - ghost.radius, ghost.y + ghost.radius);
    ctx.closePath();
    ctx.fill();

    // Draw ghost eyes
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(ghost.x - 3, ghost.y - 2, 3, 0, Math.PI * 2);
    ctx.arc(ghost.x + 3, ghost.y - 2, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#0000ff';
    ctx.beginPath();
    ctx.arc(ghost.x - 3, ghost.y - 2, 1, 0, Math.PI * 2);
    ctx.arc(ghost.x + 3, ghost.y - 2, 1, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawPacman() {
  ctx.fillStyle = '#ffcc00';

  // Calculate mouth angles based on direction
  let startAngle, endAngle;
  switch (pacman.direction) {
    case 'right':
      startAngle = 0.2 + pacman.mouthAngle;
      endAngle = Math.PI * 2 - 0.2 - pacman.mouthAngle;
      break;
    case 'left':
      startAngle = Math.PI + 0.2 + pacman.mouthAngle;
      endAngle = Math.PI - 0.2 - pacman.mouthAngle;
      break;
    case 'up':
      startAngle = Math.PI * 1.5 + 0.2 + pacman.mouthAngle;
      endAngle = Math.PI * 1.5 - 0.2 - pacman.mouthAngle;
      break;
    case 'down':
      startAngle = Math.PI * 0.5 + 0.2 + pacman.mouthAngle;
      endAngle = Math.PI * 0.5 - 0.2 - pacman.mouthAngle;
      break;
  }

  ctx.beginPath();
  ctx.arc(pacman.x, pacman.y, pacman.radius, startAngle, endAngle);
  ctx.lineTo(pacman.x, pacman.y);
  ctx.closePath();
  ctx.fill();
}

function updateScore() {
  document.getElementById('score').textContent = score;
}

function updateTimer() {
  document.getElementById('timer').textContent = timeLeft;
}

// Initialize game when page loads
window.onload = initGame;
