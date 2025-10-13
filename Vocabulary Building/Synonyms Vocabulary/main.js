function updateDOM(vocabularyData){document.addEventListener('DOMContentLoaded', function() {
  const mainWordElement = document.getElementById('main-word');
  const wordImageElement = document.getElementById('word-image');
  const synonymInput = document.getElementById('synonym-input');
  const checkButton = document.getElementById('check-btn');
  const nextButton = document.getElementById('next-btn');
  const toggleInstructionsButton = document.getElementById('toggle-instructions');
  const toggleSynonymsButton = document.getElementById('toggle-synonyms');
  const instructionsSection = document.getElementById('instructions-section');
  const synonymsSection = document.getElementById('synonyms-section');
  const feedbackSection = document.getElementById('feedback');
  const scoreElement = document.getElementById('score');
  const progressElement = document.getElementById('progress');
  const resultContainer = document.getElementById('result-container');
  const gameContainer = document.querySelector('.game-container');
  const finalScoreElement = document.getElementById('final-score');
  const performanceMessageElement = document.getElementById('performance-message');
  const restartButton = document.getElementById('restart-btn');
  const synonymsList = document.querySelector('.synonyms-list');

  const wordScoreElement = document.createElement('div');
  wordScoreElement.id = 'word-score';
  wordScoreElement.className = 'word-score';
  wordScoreElement.innerHTML = 'Word Score: <span id="current-word-score">0</span>/100';

  const scoreContainer = scoreElement.parentElement;
  scoreContainer.appendChild(wordScoreElement);

  const currentWordScoreElement = document.getElementById('current-word-score');

  const usedSynonymsContainer = document.createElement('div');
  usedSynonymsContainer.className = 'used-synonyms-container';
  usedSynonymsContainer.innerHTML = '<h3>Your Synonyms:</h3><ul id="used-synonyms-list" class="used-synonyms-list"></ul>';

  feedbackSection.parentNode.insertBefore(usedSynonymsContainer, feedbackSection.nextSibling);

  const usedSynonymsList = document.getElementById('used-synonyms-list');

  // Game state
  let currentWordIndex = 0;
  let score = 0;
  let currentWordScore = 0;
  let currentWordAttempted = false;
  let usedSynonyms = [];
  const POINTS_REQUIRED = 50;

  let completedWords = [];
  let hasViewedSynonyms = false; // Flag to track if user has viewed synonyms
  let synonymDetails = {}; // Store synonym details for used synonyms

  // Initialize game
  function initGame() {
    currentWordIndex = 0;
    score = 0;
    currentWordScore = 0;
    usedSynonyms = [];
    currentWordAttempted = false;
    completedWords = [];
    hasViewedSynonyms = false; // Reset the flag
    synonymDetails = {};
    
    currentWordScoreElement.textContent = currentWordScore;
    updateProgressDisplay();
    loadCurrentWord();
    resultContainer.style.display = 'none';
    gameContainer.style.display = 'block';
    hideSection(instructionsSection);
    hideSection(synonymsSection);

    updateSynonymsToggleButton();
  }

  // Load current word data
  function loadCurrentWord() {
    const currentWord = vocabularyData[currentWordIndex];
    mainWordElement.textContent = currentWord.word;
    wordImageElement.src = currentWord.image;
    wordImageElement.alt = `Image representing the word ${currentWord.word}`;
    synonymInput.value = '';
    synonymInput.focus();
    updateSynonymsList();
    hideFeedback();
    currentWordAttempted = false;
    currentWordScore = 0;
    currentWordScoreElement.textContent = currentWordScore;
    usedSynonyms = [];
    synonymDetails = {};
    updateUsedSynonymsList();
    hasViewedSynonyms = false; // Reset flag for new word
    enableInputs(); // Enable inputs for the new word

    nextButton.disabled = currentWordScore < POINTS_REQUIRED;

    updateSynonymsToggleButton();

    mainWordElement.style.transform = 'scale(0.8)';
    setTimeout(() => {
      mainWordElement.style.transform = 'scale(1)';
    }, 100);
  }

  function updateSynonymsToggleButton() {
    const isWordCompleted = completedWords.includes(currentWordIndex);

    if (isWordCompleted) {
      toggleSynonymsButton.disabled = false;
      toggleSynonymsButton.title = "View all synonyms for this word";
      toggleSynonymsButton.classList.remove('disabled');
    } else {
      toggleSynonymsButton.disabled = false; // Always enabled
      toggleSynonymsButton.title = "Complete this word to view all synonyms";
      toggleSynonymsButton.classList.remove('disabled');
    }
  }

  function updateProgressDisplay() {
    progressElement.textContent = `${currentWordIndex + 1}/${vocabularyData.length}`;
  }

  // Functions to disable and enable inputs
  function disableInputs() {
    synonymInput.disabled = true;
    checkButton.disabled = true;
    synonymInput.placeholder = "Inputs locked after viewing synonyms";
    showFeedback("Inputs locked after viewing synonyms. Click 'Next' to continue.", 'warning');
  }

  function enableInputs() {
    synonymInput.disabled = false;
    checkButton.disabled = false;
    synonymInput.placeholder = "Enter a synonym...";
  }

  // Create confetti function
  function createConfetti() {
    const confettiCount = 150;
    const colors = ['#FFD700', '#FF8C00', '#FF1493', '#00BFFF', '#32CD32', '#9932CC'];

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';

      // Random styling
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.width = `${Math.random() * 10 + 5}px`;
      confetti.style.height = `${Math.random() * 10 + 5}px`;
      confetti.style.position = 'fixed';
      confetti.style.zIndex = '999';
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';

      // Starting position
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.top = '-10px';

      // Animation
      const duration = Math.random() * 3 + 2;
      confetti.style.animation = `fall ${duration}s linear forwards`;

      document.body.appendChild(confetti);

      // Remove confetti after animation completes
      setTimeout(() => {
        confetti.remove();
      }, duration * 1000);
    }

    // Add CSS for animation if not already present
    if (!document.getElementById('confetti-style')) {
      const style = document.createElement('style');
      style.id = 'confetti-style';
      style.innerHTML = `
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }

  function findSynonymDetails(word) {
    const currentWord = vocabularyData[currentWordIndex];
    for (const category in currentWord.synonyms) {
      const foundSynonym = currentWord.synonyms[category].find(s => s.word === word);
      if (foundSynonym) {
        return {
          meaning: foundSynonym.meaning,
          sentence: foundSynonym.sentence
        };
      }
    }
    return null;
  }

  function checkSynonym() {
    if (hasViewedSynonyms) {
      showFeedback("You've already viewed the synonyms list. Proceed to the next word.", 'warning');
      return;
    }

    const userInput = synonymInput.value.trim().toLowerCase();
    if (!userInput) {
      showFeedback('Please enter a synonym.', 'error');
      return;
    }
    const currentWord = vocabularyData[currentWordIndex];
    const currentWordText = currentWord.word.toLowerCase();

    if (userInput === currentWordText) {
      showFeedback('That\'s the same word! Try a synonym instead.', 'error');
      return;
    }

    if (usedSynonyms.map(s => s.word).includes(userInput)) {
      showFeedback('You\'ve already used that synonym. Try another one!', 'warning');
      return;
    }

    let found = false;
    let synonymCategory = '';
    let points = 0;
    let foundSynonym = null;

    for (const category in currentWord.synonyms) {
      const synonymInCategory = currentWord.synonyms[category].find(s => s.word === userInput);
      if (synonymInCategory) {
        found = true;
        synonymCategory = category;
        points = synonymInCategory.points;
        foundSynonym = synonymInCategory;
        break;
      }
    }

    if (found) {
      // Store the details for this synonym
      synonymDetails[userInput] = {
        meaning: foundSynonym.meaning,
        sentence: foundSynonym.sentence
      };

      usedSynonyms.push({
        word: userInput,
        category: synonymCategory,
        points: points
      });

      score += points;
      currentWordScore = Math.floor(usedSynonyms.reduce((sum, syn) => sum + syn.points, 0) / usedSynonyms.length);
      currentWordScoreElement.textContent = currentWordScore;
      updateUsedSynonymsList();

      let feedbackMessage = '';
      if (points < 20) {
        feedbackMessage = `Good! "${userInput}" is worth ${points} points.`;
      } else if (points < 50) {
        feedbackMessage = `Great! "${userInput}" is worth ${points} points!`;
      } else if (points < 70) {
        feedbackMessage = `Excellent! "${userInput}" is worth ${points} points!`;
      } else {
        feedbackMessage = `Outstanding! "${userInput}" is a rare word worth ${points} points!`;
      }

      // Check for premium synonym (100 points)
      if (points === 100) {
        createConfetti();

        feedbackMessage = `PREMIUM SYNONYM! "${userInput}" is worth a perfect 100 points!`;

        // Enable next button for 100-point synonyms
        nextButton.disabled = false;
        if (!completedWords.includes(currentWordIndex)) {
          completedWords.push(currentWordIndex);
          updateSynonymsToggleButton();
        }
      }

      showFeedback(feedbackMessage, 'success');
      currentWordAttempted = true;

      // Check if score requirement is met
      if (currentWordScore >= POINTS_REQUIRED || points >= POINTS_REQUIRED) {
        if (nextButton.disabled) {
          showFeedback(`Congratulations! You've reached ${POINTS_REQUIRED} points for this word! You can now move to the next word.`, 'success');
          nextButton.disabled = false;
          if (!completedWords.includes(currentWordIndex)) {
            completedWords.push(currentWordIndex);
            updateSynonymsToggleButton();
          }
        }
      }

      synonymInput.value = '';
      synonymInput.focus();
    } else {
      showFeedback(`"${userInput}" is not a recognized synonym for "${currentWord.word}".`, 'error');
    }
  }

  function updateUsedSynonymsList() {
    usedSynonymsList.innerHTML = '';
    if (usedSynonyms.length === 0) {
      const noSynonymsElement = document.createElement('li');
      noSynonymsElement.textContent = 'No synonyms used yet.';
      noSynonymsElement.className = 'no-synonyms';
      usedSynonymsList.appendChild(noSynonymsElement);
      return;
    }

    const sortedSynonyms = [...usedSynonyms].sort((a, b) => b.points - a.points);
    sortedSynonyms.forEach(synonym => {
      const synonymElement = document.createElement('li');
      synonymElement.className = `used-synonym ${synonym.category}`;

      // Add premium class for 100-point synonyms
      if (synonym.points === 100) {
        synonymElement.classList.add('premium');
      }

      const synonymItemContent = document.createElement('div');
      synonymItemContent.className = 'used-synonym-content';
      synonymItemContent.style.cursor = 'pointer';
      
      const wordElement = document.createElement('span');
      wordElement.className = 'used-synonym-word';
      wordElement.textContent = synonym.word;
      
      const categoryElement = document.createElement('span');
      categoryElement.className = `used-synonym-category ${synonym.category}`;
      categoryElement.textContent = synonym.category;
      
      const pointsElement = document.createElement('span');
      pointsElement.className = 'used-synonym-points';
      pointsElement.textContent = `+${synonym.points}`;

      // Add toggle icon for details
      const toggleIcon = document.createElement('span');
      toggleIcon.className = 'toggle-icon';
      

      // Add premium badge for 100-point synonyms
      if (synonym.points === 100) {
        const premiumBadge = document.createElement('span');
        premiumBadge.className = 'premium-badge';
        premiumBadge.textContent = '🏆';
        pointsElement.prepend(premiumBadge);
      }

      synonymItemContent.appendChild(wordElement);
      synonymItemContent.appendChild(categoryElement);
      synonymItemContent.appendChild(pointsElement);
      synonymItemContent.appendChild(toggleIcon);
      
      synonymElement.appendChild(synonymItemContent);

      // Create details section with meaning and sentence
      if (synonymDetails[synonym.word]) {
        const detailsElement = document.createElement('div');
        detailsElement.className = 'used-synonym-details';
        
        const meaningElement = document.createElement('div');
        meaningElement.className = 'synonym-meaning';
        meaningElement.textContent = `Meaning: ${synonymDetails[synonym.word].meaning}`;
        
        const sentenceElement = document.createElement('div');
        sentenceElement.className = 'synonym-sentence';
        sentenceElement.textContent = `Example: ${synonymDetails[synonym.word].sentence}`;
        
        detailsElement.appendChild(meaningElement);
        detailsElement.appendChild(sentenceElement);
        synonymElement.appendChild(detailsElement);
        
        // Add click event to toggle details
        synonymItemContent.addEventListener('click', function() {
          detailsElement.classList.toggle('show');
        });
      }

      usedSynonymsList.appendChild(synonymElement);
    });
  }

  function showFeedback(message, type) {
    feedbackSection.textContent = message;
    feedbackSection.className = 'feedback-section show';
    feedbackSection.classList.add(type);
  }

  function hideFeedback() {
    feedbackSection.className = 'feedback-section';
    feedbackSection.textContent = '';
  }

  function nextWord() {
    if (currentWordIndex < vocabularyData.length - 1) {
      currentWordIndex++;
      loadCurrentWord();
      updateProgressDisplay();
      
      score += currentWordScore
    } else {
      showResults();
    }
  }

  function showResults() {
    gameContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    finalScoreElement.textContent = score;

    let performanceMessage = '';
    const maxPossibleScore = vocabularyData.length * 100;
    const percentage = (score / maxPossibleScore) * 100;
    
    console.log(percentage)

    if (percentage >= 80) {
      performanceMessage = 'Outstanding! You have an exceptional vocabulary and found many rare and vivid synonyms!';
    } else if (percentage >= 70) {
      performanceMessage = 'Excellent! You have a very strong vocabulary with many advanced and vivid synonyms!';
    } else if (percentage >= 60) {
      performanceMessage = 'Great job! You successfully completed the challenge with a solid vocabulary!';
    } else if (percentage >= 50) {
      performanceMessage = 'Good effort! You have a good vocabulary but could use more vivid words!';
    } else {
      performanceMessage = 'Nice try! Continue practicing with more advanced and vivid synonyms to improve your score!';
    }

    performanceMessageElement.textContent = performanceMessage;
  }

  function toggleSection(section) {
    if (section.classList.contains('show')) {
      hideSection(section);
    } else {
      section.classList.add('show');
      if (section === synonymsSection) {
        // If showing the synonyms section and word is completed
        if (completedWords.includes(currentWordIndex)) {
          hasViewedSynonyms = true;
          disableInputs();
        }
      }
    }
  }

  function hideSection(section) {
    section.classList.remove('show');
  }

  function updateSynonymsList() {
    synonymsList.innerHTML = '';
    const currentWord = vocabularyData[currentWordIndex];

    if (completedWords.includes(currentWordIndex)) {
      const userHighestPoints = usedSynonyms.length > 0 ?
        Math.max(...usedSynonyms.map(syn => syn.points)) :
        0;

      ['basic', 'advanced', 'vivid'].forEach(category => {
        const categoryHeading = document.createElement('h3');
        categoryHeading.textContent = category.charAt(0).toUpperCase() + category.slice(1) + ' Synonyms';
        categoryHeading.className = 'synonym-category-heading';
        synonymsList.appendChild(categoryHeading);

        const visibleSynonyms = currentWord.synonyms[category].filter(synonym =>
          synonym.points <= userHighestPoints
        );

        const hiddenCount = currentWord.synonyms[category].length - visibleSynonyms.length;

        if (visibleSynonyms.length === 0) {
          const noVisibleSynonyms = document.createElement('p');
          noVisibleSynonyms.className = 'no-visible-synonyms';
          noVisibleSynonyms.textContent = 'Find synonyms with higher points to unlock words in this category!';
          synonymsList.appendChild(noVisibleSynonyms);
        } else {
          const sortedSynonyms = [...visibleSynonyms].sort((a, b) => b.points - a.points);

          sortedSynonyms.forEach(synonym => {
            const synonymElement = document.createElement('div');
            synonymElement.className = 'synonym-item';

            if (synonym.points === 100) {
              synonymElement.classList.add('premium-synonym');
            }

            const synonymItemContent = document.createElement('div');
            synonymItemContent.className = 'synonym-item-content';
            synonymItemContent.style.display = 'flex';
            synonymItemContent.style.justifyContent = 'space-between';
            synonymItemContent.style.alignItems = 'center';

            const badgeElement = document.createElement('span');
            badgeElement.className = `badge ${category}`;
            badgeElement.textContent = `${synonym.points} pts`;

            if (synonym.points === 100) {
              badgeElement.innerHTML = `🏆 ${synonym.points} pts`;
              badgeElement.classList.add('premium-badge');
            }

            const wordDisplayElement = document.createElement('span');
            wordDisplayElement.textContent = synonym.word;

            const toggleIcon = document.createElement('span');
            toggleIcon.className = 'toggle-icon';
            

            synonymItemContent.appendChild(badgeElement);
            synonymItemContent.appendChild(wordDisplayElement);
            synonymItemContent.appendChild(toggleIcon);
            
            synonymElement.appendChild(synonymItemContent);

            const detailsElement = document.createElement('div');
            detailsElement.className = 'synonym-details';

            // Add meaning
            const meaningElement = document.createElement('div');
            meaningElement.className = 'synonym-meaning';
            meaningElement.textContent = `Meaning: ${synonym.meaning}`;
            detailsElement.appendChild(meaningElement);

            // Add sentence example
            const sentenceElement = document.createElement('div');
            sentenceElement.className = 'synonym-sentence';
            sentenceElement.textContent = `Example: ${synonym.sentence}`;
            detailsElement.appendChild(sentenceElement);
            synonymElement.appendChild(detailsElement);
            synonymElement.addEventListener('click', function() {
              this.classList.toggle('active');
              detailsElement.classList.toggle('show');
            });

            synonymsList.appendChild(synonymElement);
          });

          if (hiddenCount > 0) {
            const hiddenMessage = document.createElement('div');
            hiddenMessage.className = 'hidden-synonyms-message';
            hiddenMessage.textContent = `${hiddenCount} more ${category} synonym${hiddenCount > 1 ? 's' : ''} locked. Find higher point synonyms to unlock!`;
            synonymsList.appendChild(hiddenMessage);
          }
        }
      });
    } else {
      const lockedMessage = document.createElement('div');
      lockedMessage.className = 'synonyms-locked-message';
      lockedMessage.innerHTML = '<p>🔒 Complete this word by scoring 50 points to unlock all synonyms!</p>';
      synonymsList.appendChild(lockedMessage);
    }
  }

  // Event Listeners
  checkButton.addEventListener('click', checkSynonym);

  synonymInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      checkSynonym();
    }
  });

  nextButton.addEventListener('click', nextWord);

  toggleInstructionsButton.addEventListener('click', function() {
    toggleSection(instructionsSection);
    this.classList.toggle('active');
    if (synonymsSection.classList.contains('show')) {
      hideSection(synonymsSection);
      toggleSynonymsButton.classList.remove('active');
    }
  });

  toggleSynonymsButton.addEventListener('click', function() {
    updateSynonymsList(); // Always update the list first

    if (!completedWords.includes(currentWordIndex)) {
      toggleSection(synonymsSection);
      this.classList.toggle('active');
      if (instructionsSection.classList.contains('show')) {
        hideSection(instructionsSection);
        toggleInstructionsButton.classList.remove('active');
      }

      showFeedback('You need to complete this word first to see all synonyms!', 'warning');
    } else {
      toggleSection(synonymsSection);
      this.classList.toggle('active');

      // Disable inputs if showing synonyms for a completed word
      if (synonymsSection.classList.contains('show')) {
        hasViewedSynonyms = true;
        disableInputs();
      }

      if (instructionsSection.classList.contains('show')) {
        hideSection(instructionsSection);
        toggleInstructionsButton.classList.remove('active');
      }
    }
  });

  restartButton.addEventListener('click', initGame);

  initGame();
});}

export default updateDOM