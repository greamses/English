const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const mathProblemElement = document.getElementById('mathProblem');
const choicesElement = document.getElementById('choices');
const scoreElement = document.getElementById('score');
const gameOverElement = document.getElementById('gameOver');
const finalScoreElement = document.getElementById('finalScore');
const restartButton = document.getElementById('restartButton');

let bird = {
  x: 50,
  y: 300,
  velocity: 0,
  radius: 25
};
let pipes = [];
let score = 0;
let gameOver = false;
let currentProblem = {};

let gravity = 0.03;
const jump = -5;
const pipeWidth = 50;
const minPipeHeight = 100;
const maxPipeHeight = 300;
let pipeSpeed = 2; // Base pipe speed
let pipeGap = 200; // Base gap between pipes

const birdImg = new Image();
birdImg.src = 'images/bird.png';

const pipeImg = new Image();
pipeImg.src = 'images/pipe.png';

const cloudImg = new Image();
cloudImg.src = 'images/cloud.png';

const backgroundImg = new Image();
backgroundImg.src = 'images/background.png';

let clouds = [
  { x: -100, y: 50, width: 120, height: 80, speed: 0.5 },
  { x: -200, y: 150, width: 100, height: 70, speed: 0.3 }
];

let usedQuestions = [];

document.addEventListener('keydown', handleJump);
document.addEventListener('touchstart', handleJump);
canvas.addEventListener('click', handleJump);
restartButton.addEventListener('click', resetGame);

function handleJump(e) {
  if (e.target.classList.contains('choice')) {
    return;
  }
  if (gameOver) {
    resetGame();
  } else {
    bird.velocity = jump;
  }
}

function handleChoice(choice) {
  // Disable all buttons to prevent multiple clicks
  document.querySelectorAll('.choice').forEach(button => button.disabled = true);

  if (choice === currentProblem.sound) {
    bird.velocity = jump;
    generateDictionProblem();
    score++;
    updateScore();
  } else {
    // Find the correct choice button and highlight it green
    document.querySelectorAll('.choice').forEach(button => {
      if (button.textContent === currentProblem.sound) {
        button.style.backgroundColor = 'green';
      }
    });

    // End the game
    setTimeout(() => endGame(), 500); // Delay to show the highlight before ending the game
  }
}

function resetGame() {
  bird.y = 300;
  bird.velocity = 0;
  pipes = [];
  score = 0;
  gameOver = false;
  gameOverElement.style.display = 'none';
  updateScore();
  generateDictionProblem();
}

function createPipe() {
  let pipeHeight = Math.random() * (maxPipeHeight - minPipeHeight) + minPipeHeight;
  pipes.push({
    x: canvas.width,
    height: pipeHeight,
    passed: false
  });
}

function updateGame() {
  // Increase difficulty as the score increases
  gravity = 0.03 + score * 0.002; // Increase gravity slightly
  pipeSpeed = 2 + score * 0.05; // Increase pipe speed slightly
  pipeGap = 200 - Math.min(score * 5, 150); // Decrease gap between pipes

  bird.velocity += gravity;
  bird.y += bird.velocity;

  // Prevent bird from flying off the top of the screen
  if (bird.y - bird.radius < 0) {
    bird.y = bird.radius;
    bird.velocity = Math.abs(bird.velocity) * 0.8;
  }

  // End game if bird hits the bottom of the canvas
  if (bird.y + bird.radius > canvas.height) {
    endGame();
  }

  // Update pipes
  pipes.forEach(pipe => {
    pipe.x -= pipeSpeed;

    // Check for collision with bird
    if (bird.x + bird.radius > pipe.x && bird.x - bird.radius < pipe.x + pipeWidth &&
      bird.y + bird.radius > canvas.height - pipe.height) {
      endGame();
    }

    // Mark pipe as passed when bird crosses it
    if (!pipe.passed && pipe.x + pipeWidth < bird.x) {
      pipe.passed = true;
    }
  });

  // Remove pipes that are off-screen
  pipes = pipes.filter(pipe => pipe.x > -pipeWidth);

  // Create new pipe if needed
  if (pipes.length === 0 || pipes[pipes.length - 1].x < canvas.width - pipeGap) {
    createPipe();
  }
}

function drawBird() {
  ctx.drawImage(birdImg, bird.x - bird.radius, bird.y - bird.radius, bird.radius * 2, bird.radius * 2);
}

function drawPipes() {
  pipes.forEach(pipe => {
    ctx.drawImage(pipeImg, pipe.x, canvas.height - pipe.height, pipeWidth, pipe.height);
  });
}

function updateScore() {
  scoreElement.textContent = `Score: ${score}`;
}

function speakWord(word) {
  const speech = new SpeechSynthesisUtterance(word);

  function setBritishVoice() {
    const voices = window.speechSynthesis.getVoices();

    let britishVoice = voices.find(voice => voice.name.includes('UK English'));

    if (!britishVoice) {
      britishVoice = voices.find(voice => voice.lang === 'en-GB');
    }
    if (britishVoice) {
      speech.voice = britishVoice;
    }

    speech.lang = 'en-GB';
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
  }

  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.addEventListener('voiceschanged', setBritishVoice);
  } else {
    setBritishVoice();
  }
}

function initializeGame() {
  window.speechSynthesis.onvoiceschanged = () => {
    generateDictionProblem(); 
    speakFirstWord();
  };

  if (window.speechSynthesis.getVoices().length > 0) {
    generateDictionProblem(); 
    speakFirstWord(); 
  }
}

function speakFirstWord() {
  const firstWord = currentProblem.word.replace(/\*/g, ''); // Remove the asterisks
  speakWord(firstWord); 
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Jolly Phonics Sounds
const wordList = [
  // Beginning Sounds
  { word: '*b*at', sound: 'b', position: 'beginning' },
  { word: '*d*og', sound: 'd', position: 'beginning' },
  { word: '*p*et', sound: 'p', position: 'beginning' },
  { word: '*c*up', sound: 'k', position: 'beginning' },
  { word: '*f*it', sound: 'f', position: 'beginning' },
  { word: '*g*ot', sound: 'g', position: 'beginning' },
  { word: '*t*ap', sound: 't', position: 'beginning' },
  { word: '*r*un', sound: 'r', position: 'beginning' },
  { word: '*s*it', sound: 's', position: 'beginning' },
  { word: '*h*en', sound: 'h', position: 'beginning' },
  { word: '*m*ud', sound: 'm', position: 'beginning' },
  { word: '*l*og', sound: 'l', position: 'beginning' },
  { word: '*w*et', sound: 'w', position: 'beginning' },
  { word: '*k*it', sound: 'k', position: 'beginning' },

  // Ending Sounds
  { word: 'ca*p*', sound: 'p', position: 'end' },
  { word: 'bu*d*', sound: 'd', position: 'end' },
  { word: 'hi*t*', sound: 't', position: 'end' },
  { word: 'ru*n*', sound: 'n', position: 'end' },
  { word: 'lo*g*', sound: 'g', position: 'end' },
  { word: 'ki*t*', sound: 't', position: 'end' },
  { word: 'su*n*', sound: 'n', position: 'end' }
];

function generateDictionProblem() {
  if (wordList.length === 0) {
    // Refill the word list from used questions
    wordList = [...usedQuestions];
    usedQuestions = [];
  }

  // Shuffle the word list before picking a word
  shuffleArray(wordList);

  // Pop the last word from the shuffled list
  const currentWord = wordList.pop();

  // Remove asterisks and display full word with sound information
  const cleanWord = currentWord.word.replace(/\*/g, '');
  mathProblemElement.innerHTML = `
    <div>${cleanWord}</div>
    <div class="top" style="font-size: 20px;">
      ${currentWord.position === 'beginning' ? 'Beginning' : 'Ending'}
    </div>
  `;

  currentProblem = currentWord;

  // Speak the word
  const wordToSpeak = cleanWord;
  speakWord(wordToSpeak);

  // Prepare answer choices
  let choices = [currentWord.sound];
  const jollyPhonicsConsonantSounds = [
    'b', 'd', 'p', 'k', 'f', 'g', 't', 'r', 's', 'ks',
    'h', 'm', 'l', 'w', 'n', 'c', 'j'
  ];

  while (choices.length < 4) {
    let randomSound = jollyPhonicsConsonantSounds[Math.floor(Math.random() * jollyPhonicsConsonantSounds.length)];
    if (!choices.includes(randomSound)) {
      choices.push(randomSound);
    }
  }

  // Shuffle the choices before displaying
  shuffleArray(choices);

  // Display the choices as buttons
  choicesElement.innerHTML = '';
  choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.classList.add('choice');
    button.onclick = () => handleChoice(choice);
    choicesElement.appendChild(button);
  });

  // Move the current word to the used questions list
  usedQuestions.push(currentWord);
}

function endGame() {
  gameOver = true;
  gameOverElement.style.display = 'block';
  finalScoreElement.textContent = `Score: ${score}`;
}

function drawClouds() {
  clouds.forEach(cloud => {
    cloud.x += cloud.speed;
    if (cloud.x > canvas.width) {
      cloud.x = -cloud.width;
    }
    ctx.drawImage(cloudImg, cloud.x, cloud.y, cloud.width, cloud.height);
  });
}

function drawGame() {
  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

  drawClouds();
  drawPipes();
  drawBird();
}

function gameLoop() {
  if (!gameOver) {
    updateGame();
  }
  drawGame();
  requestAnimationFrame(gameLoop);
}

updateScore();
generateDictionProblem();
gameLoop();