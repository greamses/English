function generateActivity(sentences)
{
  document.addEventListener('DOMContentLoaded', function() {

  // DOM elements
  const sentenceContainer = document.getElementById('sentence');
  const commaSource = document.getElementById('comma-source');
  const checkButton = document.getElementById('check-btn');
  const hintButton = document.getElementById('hint-btn');
  const nextButton = document.getElementById('next-btn');
  const restartButton = document.getElementById('restart-btn');
  const hintBox = document.getElementById('hint');
  const resultsBox = document.getElementById('results');
  const currentSentenceEl = document.getElementById('current-sentence');
  const totalSentencesEl = document.getElementById('total-sentences');
  const instructionModal = document.getElementById('instruction-modal');
  const resultsModal = document.getElementById('results-modal');
  const startButton = document.getElementById('start-btn');
  const playAgainButton = document.getElementById('play-again-btn');
  const gameContainer = document.querySelector('.game-container');

  let currentSentenceIndex = 0;
  let placedCommas = [];
  let isDragging = false;
  let draggedComma = null;
  let lastTapTime = 0;
  let dropZones = [];

  instructionModal.style.display = 'flex';

  function findClosestDropZone(e) {
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;

    let closestZone = null;
    let minDistance = Infinity;

    // Reset all drop zones
    dropZones.forEach(zone => {
      zone.classList.remove('closest');
    });

    // Find the closest drop zone
    dropZones.forEach(zone => {
      const rect = zone.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(clientX - centerX, 2) +
        Math.pow(clientY - centerY, 2)
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestZone = zone;
      }
    });

    // If comma is within a reasonable distance (100px), highlight the closest zone
    if (closestZone && minDistance < 100) {
      closestZone.classList.add('closest');
    }
  }
  function startDrag(e, isNew = false) {
    e.preventDefault();
    isDragging = true;

    // Create a new comma element if dragging from source
    if (isNew) {
      draggedComma = document.createElement('div');
      draggedComma.className = 'comma';
      draggedComma.textContent = ',';
      draggedComma.dataset.isNew = 'true';
      document.body.appendChild(draggedComma);
    } else {
      // If dragging an already placed comma
      if (e.target.classList.contains('placed-comma')) {
        draggedComma = e.target;
        draggedComma.style.zIndex = '1000';
      }
    }

    // Position it at cursor/finger
    if (draggedComma) {
      const clientX = e.clientX || e.touches[0].clientX;
      const clientY = e.clientY || e.touches[0].clientY;
      draggedComma.style.position = 'fixed';
      draggedComma.style.left = clientX - 10 + 'px';
      draggedComma.style.top = clientY - 15 + 'px';
    }

    // Highlight drop zones
    document.querySelectorAll('.drop-zone').forEach(zone => {
      zone.classList.add('highlight');
    });
  }
  function moveDraggedComma(e) {
    if (!draggedComma) return;

    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;

    draggedComma.style.left = clientX - 10 + 'px';
    draggedComma.style.top = clientY - 15 + 'px';
  }
  function endDrag(e) {
    isDragging = false;

    // Remove highlight from drop zones
    document.querySelectorAll('.drop-zone').forEach(zone => {
      zone.classList.remove('highlight');
      zone.classList.remove('closest');
    });

    if (!draggedComma) return;

    // Find the closest drop zone
    const clientX = e.clientX || e.clientX;
    const clientY = e.clientY || e.clientY;

    let closestZone = null;
    let minDistance = Infinity;

    document.querySelectorAll('.drop-zone').forEach(zone => {
      const rect = zone.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(clientX - centerX, 2) +
        Math.pow(clientY - centerY, 2)
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestZone = zone;
      }
    });

    // If comma is within a reasonable distance (150px), place it at the closest zone
    if (closestZone && minDistance < 150) {
      const position = parseInt(closestZone.dataset.position);

      // Check if there's already a comma at this position
      const existingComma = placedCommas.find(comma => comma.position === position);
      if (existingComma) {
        // If we're dragging an already placed comma, just remove it from the array
        if (draggedComma.classList.contains('placed-comma')) {
          placedCommas = placedCommas.filter(comma => comma.position !== parseInt(draggedComma.dataset.position));
        }
      }

      // Add comma to this position
      if (draggedComma.classList.contains('placed-comma')) {
        // Update position if it's an already placed comma
        placedCommas = placedCommas.filter(comma => comma.position !== parseInt(draggedComma.dataset.position));
      }

      placedCommas.push({
        position: position,
        element: draggedComma
      });

      // Position it in the drop zone
      draggedComma.className = 'placed-comma';
      draggedComma.style.position = 'absolute';
      draggedComma.style.left = '-6px';
      draggedComma.style.top = '-2px';
      draggedComma.dataset.position = position;

      // Add event listeners for already placed commas
      addCommaEventListeners(draggedComma);

      closestZone.parentNode.appendChild(draggedComma);
    } else if (draggedComma.dataset.isNew === 'true') {
      // Remove the comma if not dropped in a valid zone and it was new
      draggedComma.remove();
    } else if (draggedComma.classList.contains('placed-comma')) {
      // Return to original position if it was an already placed comma
      draggedComma.style.position = 'absolute';
      draggedComma.style.left = '-6px';
      draggedComma.style.top = '-2px';
      draggedComma.style.zIndex = '';
    }

    draggedComma = null;
  }
  function addCommaEventListeners(comma) {
    // For desktop
    comma.addEventListener('mousedown', function(e) {
      e.preventDefault();
      startDrag(e, false);
    });

    // For mobile
    comma.addEventListener('touchstart', function(e) {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTapTime;

      // Detect double tap (300ms)
      if (tapLength < 300 && tapLength > 0) {
        e.preventDefault();
        // Double tap detected - remove comma
        const position = parseInt(this.dataset.position);
        placedCommas = placedCommas.filter(comma => comma.position !== position);
        this.remove();
        return;
      }

      lastTapTime = currentTime;
      startDrag(e, false);
    }, { passive: false });
  }
  function loadSentence(index) {
  currentSentenceEl.textContent = index + 1;
  sentenceContainer.innerHTML = '';
  placedCommas = [];
  dropZones = [];
  hintBox.style.display = 'none';
  nextButton.style.display = 'none';

  let sentenceText = sentences[index].text;

  // Check if the text contains paragraph tags
  if (sentenceText.includes('<p>')) {
    // Split the text by paragraph tags
    const paragraphs = sentenceText.split(/<\/?p>/).filter(p => p.trim() !== '');

    paragraphs.forEach((paragraphText, paraIndex) => {
      // Create paragraph container
      const paraDiv = document.createElement('div');
      paraDiv.className = 'paragraph';
  
      paraDiv.style.marginTop = paraIndex > 0 ? '30px' : '0';

      // Process words in this paragraph
      const words = paragraphText.split(' ').filter(word => word.trim() !== '');

      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        wordSpan.textContent = word;

        // Create drop zone before each word (except the first one)
        if (wordIndex > 0) {
          const dropZone = document.createElement('div');
          dropZone.className = 'drop-zone';
          dropZone.dataset.position = wordIndex - 1 + (paraIndex > 0 ? words.length * paraIndex : 0);
          wordSpan.appendChild(dropZone);
          dropZones.push(dropZone);
        }

        paraDiv.appendChild(wordSpan);
      });

      sentenceContainer.appendChild(paraDiv);
    });
  } else {
    // Regular text processing (no paragraphs)
    const words = sentenceText.split(' ').filter(word => word.trim() !== '');

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';
      wordSpan.textContent = word;

      if (wordIndex > 0) {
        const dropZone = document.createElement('div');
        dropZone.className = 'drop-zone';
        dropZone.dataset.position = wordIndex - 1;
        wordSpan.appendChild(dropZone);
        dropZones.push(dropZone);
      }

      sentenceContainer.appendChild(wordSpan);
    });
  }
}

  checkButton.addEventListener('click', function() {
    const correctPositions = sentences[currentSentenceIndex].correctPositions;
    const placedPositions = placedCommas.map(comma => comma.position);

    // Mark commas as correct or incorrect
    placedCommas.forEach(comma => {
      if (correctPositions.includes(comma.position)) {
        comma.element.classList.add('correct');
        comma.element.classList.remove('incorrect');
      } else {
        comma.element.classList.add('incorrect');
        comma.element.classList.remove('correct');
      }
    });

    // Check if all correct positions have commas
    const allPositionsHaveCommas = correctPositions.every(pos =>
      placedPositions.includes(pos)
    );

    // Check if no extra commas
    const noExtraCommas = placedPositions.every(pos =>
      correctPositions.includes(pos)
    );

    // If all correct, show next button
    if (allPositionsHaveCommas && noExtraCommas) {
      nextButton.style.display = 'block';
    }
  });
  hintButton.addEventListener('click', function() {
    hintBox.textContent = sentences[currentSentenceIndex].hint;
    hintBox.style.display = 'block';
  });
  nextButton.addEventListener('click', function() {
    currentSentenceIndex++;

    if (currentSentenceIndex < sentences.length) {
      loadSentence(currentSentenceIndex);
    } else {
      // Show results modal when all sentences are completed
      gameContainer.style.display = 'none';
      resultsModal.style.display = 'flex';
    }
  });
  playAgainButton.addEventListener('click', function() {
    currentSentenceIndex = 0;
    resultsModal.style.display = 'none';
    gameContainer.style.display = 'block';
    loadSentence(currentSentenceIndex);
  });
  document.addEventListener('dblclick', function(e) {
    if (e.target.classList.contains('placed-comma')) {
      const position = parseInt(e.target.dataset.position);
      placedCommas = placedCommas.filter(comma => comma.position !== position);
      e.target.remove();
    }
  });
  startButton.addEventListener('click', function() {
    instructionModal.style.display = 'none';
    gameContainer.style.display = 'block';
    totalSentencesEl.textContent = sentences.length;
    loadSentence(currentSentenceIndex);
  });
  commaSource.addEventListener('mousedown', function(e) {
    startDrag(e, true);
  });
  commaSource.addEventListener('touchstart', function(e) {
    startDrag(e, true);
  }, { passive: false });
  document.addEventListener('mousemove', function(e) {
    if (isDragging && draggedComma) {
      moveDraggedComma(e);
      findClosestDropZone(e); // Check for closest drop zone while dragging
    }
  });
  document.addEventListener('mouseup', function(e) {
    if (isDragging) {
      endDrag(e);
    }
  });
  document.addEventListener('touchmove', function(e) {
    if (isDragging && draggedComma) {
      e.preventDefault();
      moveDraggedComma(e.touches[0]);
      findClosestDropZone(e.touches[0]); // Check for closest drop zone while dragging
    }
  }, { passive: false });
  document.addEventListener('touchend', function(e) {
    if (isDragging) {
      endDrag(e.changedTouches[0]);
    }
  });

  const style = document.createElement('style');
  style.textContent = `
        .drop-zone.closest {
            background-color: rgba(0, 150, 255, 0.3);
            transform: scale(1.2);
            transition: all 0.2s ease;
        }
    `;
  document.head.appendChild(style);
});
  
}

export default generateActivity