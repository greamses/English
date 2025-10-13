const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const questionsText = document.querySelector(".questions-text b");
const timerText = document.querySelector(".timer-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const refreshBtn = document.querySelector(".refresh-btn");

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;
let questionCount = 1;
let timer;
const maxTime = 60;

const saveGameProgress = () => {
  localStorage.setItem('hangmanGame', JSON.stringify({
    currentWord,
    correctLetters,
    wrongGuessCount,
    questionCount,
    timer: timerText.innerText
  }));
}

const loadGameProgress = () => {
  const savedGame = JSON.parse(localStorage.getItem('hangmanGame'));
  if (savedGame) {
    currentWord = savedGame.currentWord;
    correctLetters = savedGame.correctLetters;
    wrongGuessCount = savedGame.wrongGuessCount;
    questionCount = savedGame.questionCount;
    timerText.innerText = savedGame.timer;

    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    questionsText.innerText = `${questionCount} out of ${wordList.length}`;

    // Display correct letters in wordDisplay
    wordDisplay.innerHTML = currentWord.split("").map((letter) => {
      if (correctLetters.includes(letter)) {
        return `<li class="letter guessed">${letter}</li>`;
      } else {
        return `<li class="letter"></li>`;
      }
    }).join("");

    // Disable already clicked buttons
    keyboardDiv.querySelectorAll("button").forEach((btn) => {
      const letter = btn.innerText;
      if (correctLetters.includes(letter) || currentWord.includes(letter)) {
        btn.disabled = true;
      }
    });

    // Display hangman image
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;

    // Start timer or end game if time is up
    const remainingTime = parseInt(timerText.innerText);
    if (remainingTime > 0) {
      timer = setInterval(() => {
        timerText.innerText = parseInt(timerText.innerText) - 1;
        if (timerText.innerText === '0') {
          clearInterval(timer);
          gameOver(false); // Game over due to time out
        }
      }, 1000);
    } else {
      gameOver(false); // Game over due to time out
    }
  } else {
    getRandomWord();
  }
}

const resetGame = () => {
  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImage.src = "images/hangman-0.svg";
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
  keyboardDiv.querySelectorAll("button").forEach((btn) => btn.disabled = false);
  gameModal.classList.remove("show");
  questionsText.innerText = `${questionCount} out of ${wordList.length}`;

  // Reset and start the timer
  clearInterval(timer);
  let timeLeft = maxTime;
  timerText.innerText = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerText.innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      gameOver(false); // Game over due to time out
    }
  }, 1000);

  saveGameProgress(); // Save game progress after reset
}

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  const { word, hint } = wordList[randomIndex];
  currentWord = word;
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();
}

const gameOver = (isVictory) => {
  clearInterval(timer); 
  const modalText = isVictory ? `You found the word:` : 'The correct word was:';
  gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
  gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
  gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
  gameModal.classList.add("show");

  localStorage.removeItem('hangmanGame');
}

const initGame = (button, clickedLetter) => {
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
  if (wrongGuessCount === maxGuesses) return gameOver(false);
  if (correctLetters.length === currentWord.length) return gameOver(true);

  saveGameProgress();
}

for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

document.addEventListener("DOMContentLoaded", loadGameProgress);

playAgainBtn.addEventListener("click", () => {
  questionCount++;
  getRandomWord();
});

refreshBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload(); 
});

window.addEventListener("beforeunload", () => {
  localStorage.clear();
});