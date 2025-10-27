// Get DOM elements
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const questionsText = document.querySelector(".questions-text b");
const timerText = document.querySelector(".timer-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const refreshBtn = document.querySelector(".refresh-btn");
const levelCompleteModal = document.querySelector(".level-complete-modal");

const introModal = document.querySelector(".intro-modal");
const startBtn = document.querySelector(".start-btn");


// Initialize variables
let currentWord, correctLetters = [],
  wrongGuessCount = 0;
let maxGuesses = 8;
let questionCount = 1;
let questionsPerLevel = 10;
let timer;
let maxTime = 90;
let timeLeft = maxTime;

let currentDifficulty = "easy";
let completedLevels = {
  easy: { completed: false, score: 0 },
  medium: { completed: false, score: 0 },
  hard: { completed: false, score: 0 }
};

let usedWords = {
  easy: [],
  medium: [],
  hard: []
};

const loadGameState = () => {
  const savedState = localStorage.getItem('hangmanGameState');
  if (savedState) {
    try {
      const state = JSON.parse(savedState);
      currentDifficulty = state.currentDifficulty || "easy";
      questionCount = state.questionCount || 1;
      completedLevels = state.completedLevels || completedLevels;
      usedWords = state.usedWords || usedWords;
    } catch (e) {
      console.error('Error loading game state:', e);
    }
  }
};

const saveGameState = () => {
  const state = {
    currentDifficulty,
    questionCount,
    completedLevels,
    usedWords
  };
  localStorage.setItem('hangmanGameState', JSON.stringify(state));
};

const getWordsByDifficulty = (difficulty) => {
  const allWords = wordList.filter(word => word.level === difficulty);
  const availableWords = allWords.filter(word => !usedWords[difficulty].includes(word.word.toLowerCase()));
  
  // If all words have been used, reset the used words for this difficulty
  if (availableWords.length === 0) {
    usedWords[difficulty] = [];
    return allWords;
  }
  
  return availableWords;
};

const showLevelCompleteNotification = (difficulty, nextDifficulty) => {
  const levelModal = document.querySelector(".level-complete-modal");
  const levelMessage = levelModal.querySelector(".level-message");
  const nextLevelBtn = levelModal.querySelector(".next-level-btn");
  
  levelMessage.innerHTML = `
    <h3> Level Complete! </h3>
    <p>You've mastered the <strong>${difficulty}</strong> level!</p>
    <p>Get ready for <strong>${nextDifficulty}</strong> challenges!</p>
  `;
  
  levelModal.classList.add("show");
  
  nextLevelBtn.onclick = () => {
    levelModal.classList.remove("show");
    currentDifficulty = nextDifficulty;
    questionCount = 1;
    updateDifficultySettings();
    saveGameState();
    getRandomWord();
  };
};

const updateDifficultySettings = () => {
  // Update game parameters based on difficulty
  switch (currentDifficulty) {
    case "easy":
      maxGuesses = 8;
      maxTime = 90;
      break;
    case "medium":
      maxGuesses = 6;
      maxTime = 75;
      break;
    case "hard":
      maxGuesses = 5;
      maxTime = 60;
      break;
  }
  
  // Update difficulty text display
  const difficultyText = document.querySelector(".difficulty-text b");
  if (difficultyText) {
    difficultyText.innerText = currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1);
  }
};

const getRandomWord = () => {
  const availableWords = getWordsByDifficulty(currentDifficulty);
  
  if (availableWords.length === 0) {
    console.error(`No words available for difficulty: ${currentDifficulty}`);
    return;
  }
  
  const randomIndex = Math.floor(Math.random() * availableWords.length);
  const { word, hint } = availableWords[randomIndex];
  currentWord = word.toLowerCase();
  
  // Add word to used words list
  usedWords[currentDifficulty].push(currentWord);
  saveGameState();
  
  const hintElement = document.querySelector(".hint-text b");
  if (hintElement) {
    hintElement.innerText = hint;
  }
  
  resetGame();
};

const gameOver = (isVictory) => {
  clearInterval(timer);
  const modalText = isVictory ? `You found the word:` : 'The correct word was:';
  gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
  gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
  gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
  gameModal.classList.add("show");
  
  if (isVictory) {
    // Update score for current difficulty
    const score = (maxTime - timeLeft) + (maxGuesses - wrongGuessCount) * 10;
    completedLevels[currentDifficulty].score = Math.max(completedLevels[currentDifficulty].score, score);
    
    // Check if level is completed
    if (questionCount >= questionsPerLevel && !completedLevels[currentDifficulty].completed) {
      completedLevels[currentDifficulty].completed = true;
      
      // Show level complete notification and progress to next difficulty
      const difficulties = ["easy", "medium", "hard"];
      const currentIndex = difficulties.indexOf(currentDifficulty);
      
      if (currentIndex < difficulties.length - 1) {
        const nextDifficulty = difficulties[currentIndex + 1];
        setTimeout(() => {
          gameModal.classList.remove("show");
          showLevelCompleteNotification(currentDifficulty, nextDifficulty);
        }, 2000);
      }
    }
    
    saveGameState();
  } else {
    // If lost, remove the word from used words so it can be tried again
    const wordIndex = usedWords[currentDifficulty].indexOf(currentWord);
    if (wordIndex > -1) {
      usedWords[currentDifficulty].splice(wordIndex, 1);
    }
    saveGameState();
  }
};

const createKeyboard = () => {
  keyboardDiv.innerHTML = ''; // Clear existing keyboard
  
  // Standard alphabet letters
  for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
  }
  
  // Add dash/hyphen for compound terms
  const dashButton = document.createElement("button");
  dashButton.innerText = "-";
  dashButton.className = "dash-key";
  keyboardDiv.appendChild(dashButton);
  dashButton.addEventListener("click", (e) => initGame(e.target, "-"));
  
  // Add apostrophe for possessive terms
  const apostropheButton = document.createElement("button");
  apostropheButton.innerText = "'";
  apostropheButton.className = "apostrophe-key";
  keyboardDiv.appendChild(apostropheButton);
  apostropheButton.addEventListener("click", (e) => initGame(e.target, "'"));
};

const initGame = (button, clickedLetter) => {
  // Check if the letter exists in the current word
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    wrongGuessCount++;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
  }
  
  button.disabled = true;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  
  // Check for game over
  if (wrongGuessCount === maxGuesses) {
    return gameOver(false);
  }
  
  // Check if all letters are guessed (excluding spaces, dashes, apostrophes)
  const lettersToGuess = [...currentWord].filter(char =>
    char !== " " && char !== "-" && char !== "'"
  );
  const uniqueLetters = [...new Set(lettersToGuess)];
  const guessedUniqueLetters = [...new Set(correctLetters)];
  
  if (uniqueLetters.length === guessedUniqueLetters.length) {
    return gameOver(true);
  }
};

const resetGame = () => {
  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImage.src = "images/hangman-0.svg";
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  
  // Create word display with proper handling for special characters
  wordDisplay.innerHTML = currentWord.split("").map((letter) => {
    if (letter === " ") {
      correctLetters.push(" "); // Auto-include spaces
      return `<li class="letter space"></li>`;
    } else if (letter === "-") {
      correctLetters.push("-"); // Auto-include dashes
      return `<li class="letter dash"></li>`;
    } else if (letter === "'") {
      correctLetters.push("'"); // Auto-include apostrophes
      return `<li class="letter apostrophe"></li>`;
    } else {
      return `<li class="letter"></li>`;
    }
  }).join("");
  
  // Recreate keyboard with all keys enabled
  createKeyboard();
  
  gameModal.classList.remove("show");
  questionsText.innerText = `${questionCount} out of ${questionsPerLevel}`;
  
  // Reset and start the timer
  clearInterval(timer);
  timeLeft = maxTime;
  timerText.innerText = timeLeft;
  
  timer = setInterval(() => {
    timeLeft--;
    timerText.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      gameOver(false);
    }
  }, 1000);
};

const startGame = () => {
  introModal.classList.remove("show");
  createKeyboard();
  updateDifficultySettings();
  getRandomWord();
};

startBtn.addEventListener("click", startGame);

playAgainBtn.addEventListener("click", () => {
  if (questionCount < questionsPerLevel) {
    questionCount++;
  } else {
    questionCount = 1;
  }
  saveGameState();
  gameModal.classList.remove("show");
  getRandomWord();
});

refreshBtn.addEventListener("click", () => {
  // Clear localStorage and reset all game state
  localStorage.removeItem('hangmanGameState');
  
  currentDifficulty = "easy";
  questionCount = 1;
  completedLevels = {
    easy: { completed: false, score: 0 },
    medium: { completed: false, score: 0 },
    hard: { completed: false, score: 0 }
  };
  usedWords = {
    easy: [],
    medium: [],
    hard: []
  };
  
  updateDifficultySettings();
  saveGameState();
  getRandomWord();
});

document.addEventListener("DOMContentLoaded", () => {
  // Check if this is the first visit or if there's saved progress
  const savedGame = JSON.parse(localStorage.getItem('hangmanGame'));
  
  if (savedGame) {
    // If there's saved progress, show the intro modal briefly then continue
    setTimeout(() => {
      introModal.classList.remove("show");
      createKeyboard();
      updateDifficultySettings();
      loadGameProgress();
    }, 1000);
  } else {
    // If no saved progress, show intro modal and wait for start button
    introModal.classList.add("show");
  }
});

document.addEventListener("keydown", (e) => {
  if (introModal.classList.contains("show") && (e.key === "Enter" || e.key === " ")) {
    startGame();
  }
});