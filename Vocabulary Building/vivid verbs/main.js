import sentenceSets from './sentences.js'

let currentLevel = "beginner";
let currentSentenceIndex = 0;
let correctAnswers = 0;
let currentStreak = 0;
let totalAttempts = 0;
let gameHistory = [];
let selectedVerb = null;

// DOM elements
let checkBtn;
let nextBtn;
let feedback;
let explanation;
let sentenceElement;
let verbContext;
let correctCount;
let streakCount;
let completedCount;
let progressFill;
let progressText;
let difficultyModal;
let levelButtons;
let startPracticeBtn;
let helpButton;
let closeModalBtn;
let verbPlaceholder;
let verbDisplay;
let verbOptions;

document.addEventListener('DOMContentLoaded', () => {
  // Initialize DOM elements
  checkBtn = document.getElementById('check-answer');
  nextBtn = document.getElementById('next-sentence');
  feedback = document.getElementById('feedback');
  explanation = document.getElementById('explanation');
  sentenceElement = document.querySelector('.original-sentence');
  verbContext = document.querySelectorAll('.verb-context');
  correctCount = document.getElementById('correct-count');
  streakCount = document.getElementById('streak-count');
  completedCount = document.getElementById('completed-count');
  progressFill = document.querySelector('.progress-fill');
  progressText = document.querySelector('.progress-text');
  difficultyModal = document.getElementById('difficulty-modal');
  closeModalBtn = document.getElementById('close-modal');
  startPracticeBtn = document.getElementById('start-practice');
  levelButtons = document.querySelectorAll('.level-btn');
  helpButton = document.getElementById('help-button');
  
  initGame();
  
  // Close verb options when clicking outside
  document.addEventListener('click', (e) => {
    const clickedElement = e.target;
    if (!clickedElement.closest('.verb-placeholder') &&
      !clickedElement.closest('.verb-options')) {
      const openOptions = document.querySelectorAll('.verb-options.show');
      openOptions.forEach(options => {
        options.classList.remove('show');
      });
    }
  });
});

function initGame() {
  difficultyModal.style.display = "flex";
  
  closeModalBtn.addEventListener('click', () => {
    difficultyModal.style.display = "none";
  });
  
  helpButton.addEventListener('click', () => {
    difficultyModal.style.display = "flex";
  });
  
  levelButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      levelButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLevel = btn.dataset.level;
    });
  });
  
  startPracticeBtn.addEventListener('click', () => {
    difficultyModal.style.display = "none";
    resetGame();
    loadSentence();
  });
  
  checkBtn.addEventListener('click', () => {
    if (selectedVerb) {
      checkAnswer();
    } else {
      // Give user feedback that they need to select a verb
      feedback.style.display = 'block';
      feedback.className = 'feedback incorrect';
      feedback.querySelector('.feedback-header i').className = 'fas fa-times-circle';
      feedback.querySelector('.feedback-header span').textContent = 'Please select a verb';
      explanation.textContent = "Tap on the highlighted verb and select an alternative to continue.";
    }
  });
  
  nextBtn.addEventListener('click', nextSentence);
  
  loadSentence();
  loadGameState();
}

function saveGameState() {
  const gameState = {
    currentLevel,
    currentSentenceIndex,
    correctAnswers,
    currentStreak,
    totalAttempts,
    gameHistory
  };
  
  localStorage.setItem('vividVerbsGameState', JSON.stringify(gameState));
}

function loadGameState() {
  const savedState = localStorage.getItem('vividVerbsGameState');
  
  if (savedState) {
    const gameState = JSON.parse(savedState);
    currentLevel = gameState.currentLevel;
    currentSentenceIndex = gameState.currentSentenceIndex;
    correctAnswers = gameState.correctAnswers;
    currentStreak = gameState.currentStreak;
    totalAttempts = gameState.totalAttempts || 0;
    gameHistory = gameState.gameHistory || [];
    
    updateStats();
    updateProgress();
    
    levelButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.level === currentLevel) {
        btn.classList.add('active');
      }
    });
  }
}

function resetGame() {
  currentSentenceIndex = 0;
  updateStats();
  updateProgress();
}

function loadSentence() {
  const currentSet = sentenceSets[currentLevel];
  
  if (currentSentenceIndex >= currentSet.length) {
    showLevelComplete();
    return;
  }
  
  const currentSentence = currentSet[currentSentenceIndex];
  const parts = currentSentence.text.split('[VERB]');
  
  // Reset selected verb
  selectedVerb = null;
  
  // Clear previous sentence
  sentenceElement.innerHTML = '';
  
  // Create the sentence with verb placeholder
  const beforeContext = document.createElement('span');
  beforeContext.className = 'verb-context';
  beforeContext.textContent = parts[0];
  sentenceElement.appendChild(beforeContext);
  
  // Create verb placeholder
  const verbPlaceholder = document.createElement('span');
  verbPlaceholder.className = 'verb-placeholder';
  verbPlaceholder.dataset.baseVerb = currentSentence.baseVerb;
  
  // Create verb display
  const verbDisplay = document.createElement('span');
  verbDisplay.className = 'verb-display';
  verbDisplay.textContent = currentSentence.baseVerb;
  verbPlaceholder.appendChild(verbDisplay);
  
  // Create verb options
  const verbOptions = document.createElement('div');
  verbOptions.className = 'verb-options';
  
  // Add options (excluding the base verb)
  currentSentence.substitutes.forEach(sub => {
    const option = document.createElement('div');
    option.className = 'verb-option';
    option.dataset.value = sub.word;
    option.textContent = sub.word;
    
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      selectedVerb = sub.word;
      verbDisplay.textContent = sub.word;
      verbDisplay.classList.add('highlighted');
      
      // Remove the highlight after animation completes
      setTimeout(() => {
        verbDisplay.classList.remove('highlighted');
      }, 1000);
      
      verbOptions.classList.remove('show');
    });
    
    verbOptions.appendChild(option);
  });
  
  verbPlaceholder.appendChild(verbOptions);
  sentenceElement.appendChild(verbPlaceholder);
  
  // Add click event to verb placeholder
  verbPlaceholder.addEventListener('click', (e) => {
    e.stopPropagation();
    verbOptions.classList.toggle('show');
  });
  
  // After context
  const afterContext = document.createElement('span');
  afterContext.className = 'verb-context';
  afterContext.textContent = parts[1];
  sentenceElement.appendChild(afterContext);
  
  nextBtn.style.display = 'none';
  checkBtn.style.display = 'inline-block';
  feedback.style.display = 'none';
  
  sentenceElement.classList.remove('celebrate');
  
  updateProgress();
}

function checkAnswer() {
  if (!selectedVerb) return;
  
  const currentSet = sentenceSets[currentLevel];
  const currentSentence = currentSet[currentSentenceIndex];
  
  feedback.style.display = 'block';
  totalAttempts++;
  
  let isCorrect = false;
  
  const verbDisplay = document.querySelector('.verb-display');
  
  if (selectedVerb === currentSentence.bestChoice) {
    // Selected the best vivid verb
    feedback.className = 'feedback correct';
    feedback.querySelector('.feedback-header i').className = 'fas fa-check-circle';
    feedback.querySelector('.feedback-header span').textContent = 'Excellent choice!';
    const sub = currentSentence.substitutes.find(s => s.word === selectedVerb);
    explanation.textContent = `"${selectedVerb}" ${sub.explanation}.`;
    sentenceElement.classList.add('celebrate');
    verbDisplay.classList.add('correct-verb');
    correctAnswers++;
    currentStreak++;
    isCorrect = true;
  } else {
    feedback.className = 'feedback partial';
    feedback.querySelector('.feedback-header i').className = 'fas fa-info-circle';
    feedback.querySelector('.feedback-header span').textContent = 'Good, but not the best choice';
    const sub = currentSentence.substitutes.find(s => s.word === selectedVerb);
    const bestSub = currentSentence.substitutes.find(s => s.word === currentSentence.bestChoice);
    explanation.textContent = `"${selectedVerb}" ${sub.explanation}, but "${currentSentence.bestChoice}" would be better as it ${bestSub.explanation.split(" that")[1] || bestSub.explanation}.`;
    currentStreak = 0;
    verbDisplay.classList.add('partial-verb');
  }
  
  gameHistory.push({
    level: currentLevel,
    sentence: currentSentence.text,
    selectedVerb,
    correctVerb: currentSentence.bestChoice,
    isCorrect
  });
  
  nextBtn.style.display = 'inline-block';
  checkBtn.style.display = 'none';
  updateStats();
  
  saveGameState();
}

function nextSentence() {
  currentSentenceIndex++;
  loadSentence();
}

function updateStats() {
  correctCount.textContent = correctAnswers;
  streakCount.textContent = currentStreak;
  completedCount.textContent = `${currentSentenceIndex}/${sentenceSets[currentLevel].length}`;
}

function updateProgress() {
  const total = sentenceSets[currentLevel].length;
  const percentage = ((currentSentenceIndex) / total) * 100;
  progressFill.style.width = `${percentage}%`;
  progressText.textContent = `${currentSentenceIndex + 1}/${total}`;
}

function showLevelComplete() {
  const levelComplete = document.createElement('div');
  levelComplete.className = 'level-complete';
  
  const levelStats = calculateLevelStats();
  
  levelComplete.innerHTML = `
    <h2>Level Complete!</h2>
    <div class="level-stats">
      <p>Accuracy: ${levelStats.accuracy}%</p>
      <p>Best streak: ${levelStats.bestStreak}</p>
    </div>
    <div class="level-actions">
      <button id="retry-level" class="btn primary">Retry Level</button>
      <button id="next-level" class="btn success">Next Level</button>
    </div>
  `;
  
  const gameContainer = document.querySelector('.card-body');
  gameContainer.appendChild(levelComplete);
  
  document.getElementById('retry-level').addEventListener('click', () => {
    gameContainer.removeChild(levelComplete);
    currentSentenceIndex = 0;
    loadSentence();
  });
  
  document.getElementById('next-level').addEventListener('click', () => {
    gameContainer.removeChild(levelComplete);
    const levels = Object.keys(sentenceSets);
    const currentLevelIndex = levels.indexOf(currentLevel);
    if (currentLevelIndex < levels.length - 1) {
      currentLevel = levels[currentLevelIndex + 1];
      levelButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.level === currentLevel) {
          btn.classList.add('active');
        }
      });
    }
    currentSentenceIndex = 0;
    loadSentence();
  });
}

function calculateLevelStats() {
  const levelHistory = gameHistory.filter(entry => entry.level === currentLevel);
  const correctCount = levelHistory.filter(entry => entry.isCorrect).length;
  const accuracy = levelHistory.length > 0 ? Math.round((correctCount / levelHistory.length) * 100) : 0;
  
  let currentStreak = 0;
  let bestStreak = 0;
  
  levelHistory.forEach(entry => {
    if (entry.isCorrect) {
      currentStreak++;
      bestStreak = Math.max(bestStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  });
  
  return {
    accuracy,
    bestStreak
  };
}