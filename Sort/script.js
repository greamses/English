// Define multiple topics
const topics = [
  {
  title: 'My Numbers',
  steps: [
    { value: 1, img: 'numbers/number1.jpg', text: 'One', audio: 'numbers/one.mp3' },
    { value: 2, img: 'numbers/number2.jpg', text: 'Two', audio: 'numbers/two.mp3' },
    { value: 3, img: 'numbers/number3.jpg', text: 'Three', audio: 'numbers/three.mp3' },
    { value: 4, img: 'numbers/number4.jpg', text: 'Four', audio: 'numbers/four.mp3' },
    { value: 5, img: 'numbers/number5.jpg', text: 'Five', audio: 'numbers/five.mp3' },
    { value: 6, img: 'numbers/number6.jpg', text: 'Six', audio: 'numbers/six.mp3' }
    ]
},
 {
   title: 'My Letters 1',
   steps: [
     { value: 1, img: 'letters/letterA.png', text: 'ei/ay', audio: 'letters/A.mp3' },
     { value: 2, img: 'letters/letterB.png', text: 'b', audio: 'letters/B.mp3' },
     { value: 3, img: 'letters/letterC.png', text: 'k/s', audio: 'letters/C.mp3' },
     { value: 4, img: 'letters/letterD.png', text: 'd', audio: 'letters/D.mp3' },
     { value: 5, img: 'letters/letterE.png', text: 'e', audio: 'letters/E.mp3' },
     { value: 6, img: 'letters/letterF.png', text: 'f', audio: 'letters/F.mp3' },
    ]
 },
 {
   title: 'My Letters 2',
   steps: [
     { value: 1, img: 'animals/letter1.jpg', text: 'Apple', audio: 'animals/apple.mp3' },
     { value: 2, img: 'animals/letter2.jpg', text: 'Ball', audio: 'animals/ball.mp3' },
     { value: 3, img: 'animals/letter3.jpg', text: 'Cat', audio: 'animals/cat.mp3' },
     { value: 4, img: 'animals/letter4.jpg', text: 'Dog', audio: 'animals/dog.mp3' },
     { value: 5, img: 'animals/letter5.jpg', text: 'Elephant', audio: 'animals/elephant.mp3' },
     { value: 6, img: 'animals/letter6.jpg', text: 'Fish', audio: 'animals/fish.mp3' },
    ]
 },
  {
    title: 'School Readiness',
    steps: [
      { value: 1, img: 'steps/step1.jpg', text: 'Wake Up', audio: 'steps/wakeup.mp3' },
      { value: 2, img: 'steps/step2.jpg', text: 'Say Prayers', audio: 'steps/prayers.mp3' },
      { value: 3, img: 'steps/step3.jpg', text: 'Brush and Bath', audio: 'steps/brush.mp3' },
      { value: 4, img: 'steps/step4.jpg', text: 'Pack School Items', audio: 'steps/pack.mp3' },
      { value: 5, img: 'steps/step5.jpg', text: 'Dress Up and Eat', audio: 'steps/dress.mp3' },
      { value: 6, img: 'steps/step6.jpg', text: 'Head to School', audio: 'steps/school.mp3' }
    ]
  },
];

let currentTopicIndex = 0;
let { title, steps } = topics[currentTopicIndex];
let audioPlayer = new Audio();
let backgroundMusic = new Audio('sounds/background-music.mp3'); // Add background music

// Set background music properties
backgroundMusic.loop = true;
backgroundMusic.volume = 0.3; // Set to 30% volume so it's not too loud

// Variable to track music state
let isMusicPlaying = false;

// Select DOM elements
const gameTitle = document.querySelector('.game-title');
const cardsContainer = document.querySelector('.cards-container');
const sortContainer = document.querySelector('.sort-container');
const reshuffleButton = document.getElementById('reshuffle');
const checkOrderButton = document.getElementById('checkOrder');

// Create music control button
function createMusicButton() {
  const musicButton = document.createElement('button');
  musicButton.id = 'music-toggle';
  musicButton.className = 'control-button';
  musicButton.innerHTML = '<i class="fas fa-music"></i> Off';
  
  musicButton.addEventListener('click', toggleBackgroundMusic);
  
  // Add the button to the UI (assuming there's a control panel)
  const controlPanel = document.querySelector('.controls') || document.body;
  controlPanel.appendChild(musicButton);
  
  return musicButton;
}

// Toggle background music function
function toggleBackgroundMusic() {
  const musicButton = document.getElementById('music-toggle');
  
  if (isMusicPlaying) {
    backgroundMusic.pause();
    musicButton.innerHTML = '<i class="fas fa-music"></i> Off';
  } else {
    // Start playing music
    backgroundMusic.play().catch(error => {
      console.error('Error playing background music:', error);
    });
    musicButton.innerHTML = '<i class="fas fa-music"></i> On';
  }
  
  isMusicPlaying = !isMusicPlaying;
}

// Function to handle auto-play restrictions
function setupBackgroundMusic() {
  // Create the music button
  const musicButton = createMusicButton();
  
  // Add event listener for user interaction to enable audio
  document.addEventListener('click', function enableAudio() {
    // Only try to play if it's not already playing
    if (!isMusicPlaying) {
      // User has interacted with the page, we can now play audio
      document.removeEventListener('click', enableAudio);
    }
  }, { once: true });
}

// Function to update the UI based on the current topic
function updateTopic() {
  ({ title, steps } = topics[currentTopicIndex]);
  gameTitle.textContent = title;
  shuffleArray(steps);
  renderCards();
  renderDropzones();
}

// Shuffle the steps array
shuffleArray(steps);

function renderCards() {
  cardsContainer.innerHTML = ''; // Clear current cards
  steps.forEach(step => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.value = step.value;
    card.dataset.audio = step.audio;
    card.draggable = true;

    card.innerHTML = `
          <div class="card-inner">
              <div class="card-front">
                  <img src="${step.img}" alt="Step ${step.value}">
              </div>
              <div class="card-back">
                  <p>${step.text}</p>
              </div>
          </div>
      `;

    card.addEventListener('touchstart', touchStart);
    card.addEventListener('touchmove', touchMove);
    card.addEventListener('touchend', touchEnd);
    card.addEventListener('click', handleCardClick);
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);

    cardsContainer.append(card);
  });
document.getElementById('nextTopic').classList.remove('bounce');
}

function renderDropzones() {
  sortContainer.innerHTML = ''; // Clear current dropzones
  steps.forEach(() => {
    const dropzone = document.createElement('div');
    dropzone.className = 'dropzone';
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('drop', drop);

    sortContainer.appendChild(dropzone);
  });
}

// Initial render
updateTopic();
setupBackgroundMusic(); // Setup background music

// Next Button Event Listener
document.getElementById('nextTopic').addEventListener('click', () => {
  currentTopicIndex = (currentTopicIndex + 1) % topics.length;
  updateTopic();
});

// Add event listener to reshuffle button
reshuffleButton.addEventListener('click', () => {
  shuffleArray(steps);
  renderCards();
  renderDropzones(); // Re-render dropzones to clear them
});

cardsContainer.addEventListener('dragover', dragOver);
cardsContainer.addEventListener('drop', drop);

function touchStart(e) {
  draggedElement = e.target.closest('.card');
  originalDropzone = draggedElement.parentElement;
  draggedElement.style.opacity = '0.5';
}

function touchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  const dropzone = document.elementFromPoint(touch.clientX, touch.clientY);
  if (dropzone && dropzone.classList.contains('dropzone') && !dropzone.querySelector('.card')) {
    dropzone.appendChild(draggedElement);
  }
}

function touchEnd() {
  draggedElement.style.opacity = '1';
  draggedElement = null;
}

function dragStart(e) {
  draggedElement = e.target;
  e.dataTransfer.setData('text/plain', draggedElement.dataset.value);
}

function dragEnd() {
  draggedElement.style.opacity = '1';
  draggedElement = null;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const dropzone = e.target;

  if (dropzone.classList.contains('dropzone') || dropzone === cardsContainer) {
    if (draggedElement) {
      if (dropzone === cardsContainer) {
        cardsContainer.appendChild(draggedElement);
      } else if (!dropzone.querySelector('.card')) {
        dropzone.appendChild(draggedElement);
      } else {
        originalDropzone.appendChild(draggedElement);
      }
    }
  }
}

function handleCardClick(e) {
  const card = e.target.closest('.card');
  
  // Play the associated audio
  playCardAudio(card);
  
  // Also flip the card
  flipCard(card);
}

function playCardAudio(card) {
  const audioSrc = card.dataset.audio;
  
  // Stop any currently playing audio
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  
  // Set the new audio source and play
  audioPlayer.src = audioSrc;
  audioPlayer.play().catch(error => {
    console.error('Error playing audio:', error);
  });
}

function flipCard(card) {
  card.classList.toggle('flip');
}

function showPopup(message) {
  const popup = document.getElementById('popup-alert');
  const messageElement = document.getElementById('popup-message');
  const closeButton = document.getElementById('popup-close');
  const okButton = document.getElementById('popup-ok');
  messageElement.textContent = message;
  popup.style.display = 'flex';

  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  okButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}

checkOrderButton.addEventListener('click', () => {
  const dropzoneCards = Array.from(document.querySelectorAll('.dropzone')).map(dropzone => dropzone.querySelector('.card'));

  let allFilled = dropzoneCards.every(card => card !== null);

  if (!allFilled) {
    showPopup('Please fill all the dropzones. 😉');
    return;
  }

  let correctOrder = true;

  dropzoneCards.forEach((card, index) => {
    if (parseInt(card.dataset.value) !== index + 1) {
      correctOrder = false;
    }
  });

  if (correctOrder) {
    showPopup('Congratulations! You are awesome! 😍');
    document.getElementById('nextTopic').classList.add('bounce');
    
    // Play a success sound
    playSuccessSound();
    
    // Show confetti animation
    showConfetti();
  } else {
    showPopup('You can do this! 🥺');
    
    // Play a try again sound
    playTryAgainSound();
  }
});

function playSuccessSound() {
  const successAudio = new Audio('sounds/success.mp3');
  successAudio.play().catch(error => {
    console.error('Error playing success sound:', error);
  });
}

function playTryAgainSound() {
  const tryAgainAudio = new Audio('sounds/tryagain.mp3');
  tryAgainAudio.play().catch(error => {
    console.error('Error playing try again sound:', error);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Confetti animation function
function showConfetti() {
  // Create confetti container if it doesn't exist
  const confettiContainer = document.getElementById('confetti-container') || createConfettiContainer();
  
  // Create confetti pieces
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  
  // Generate confetti pieces
  for (let i = 0; i < 100; i++) {
    createConfettiPiece(confettiContainer, colors);
  }
  
  // Remove confetti after animation completes
  setTimeout(() => {
    if (confettiContainer && confettiContainer.parentNode) {
      confettiContainer.parentNode.removeChild(confettiContainer);
    }
  }, 3000);
}

function createConfettiContainer() {
  const container = document.createElement('div');
  container.id = 'confetti-container';
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '9999';
  document.body.appendChild(container);
  return container;
}

function createConfettiPiece(container, colors) {
  const piece = document.createElement('div');
  
  // Random confetti styling
  piece.style.position = 'absolute';
  piece.style.width = `${Math.random() * 10 + 5}px`;
  piece.style.height = `${Math.random() * 10 + 5}px`;
  piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
  piece.style.top = '0';
  piece.style.left = `${Math.random() * 100}vw`;
  piece.style.opacity = '1';
  
  // Add to container
  container.appendChild(piece);
  
  // Animate the piece
  const duration = Math.random() * 3 + 2;
  const keyframes = [
    { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
    { transform: `translateY(${Math.random() * 100 + 400}px) translateX(${(Math.random() - 0.5) * 400}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
  ];
  
  const animation = piece.animate(keyframes, { 
    duration: duration * 1000, 
    easing: 'cubic-bezier(0.1, 0.8, 0.9, 0.2)',
    iterations: 1,
    fill: 'forwards'
  });
  
  // Remove the piece after animation completes
  animation.onfinish = () => {
    if (piece.parentNode) {
      piece.parentNode.removeChild(piece);
    }
  };
}