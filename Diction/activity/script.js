// Array of congratulatory messages with emojis for correct answers
const congratulations = [
  "Well done! 🎉",
  "Great job! 👍",
  "Fantastic! 🌟",
  "Awesome! 👏",
  "Nice work! 💯",
  "Brilliant! 💡",
  "You're amazing! 😎",
  "Excellent! 🎈",
  "Superb! 🥇",
  "You nailed it! 🏆"
];

// Array of messages with emojis for incorrect answers
const tryAgainMessages = [
  "Oops! Try again! 😅",
  "Not quite! Give it another shot! 🔄",
  "Keep going! You got this! 💪",
  "Almost there! Don’t give up! 🙌",
  "Keep trying! 🌱",
  "Not correct, but you're getting closer! ✨",
  "Stay determined! 💥",
  "Keep practicing! 🎶",
  "You’re learning! Keep at it! 🧠",
  "Not this time, but don't worry! 🌻"
];

const words = [
  { word: 'cat', phonetic: '/kæt/' },
  { word: 'dog', phonetic: '/dɒg/' },
  { word: 'bird', phonetic: '/bɜːd/' },
  { word: 'sheep', phonetic: '/ʃiːp/' },
  { word: 'mouse', phonetic: '/maʊs/' },
  { word: 'fish', phonetic: '/fɪʃ/' },
  { word: 'tree', phonetic: '/triː/' },
  { word: 'book', phonetic: '/bʊk/' },
  { word: 'house', phonetic: '/haʊs/' },
  { word: 'phone', phonetic: '/fəʊn/' },
  { word: 'car', phonetic: '/kɑː/' },
  { word: 'chair', phonetic: '/ʧeə/' },
  { word: 'light', phonetic: '/laɪt/' },
  { word: 'rain', phonetic: '/reɪn/' },
  { word: 'blue', phonetic: '/bluː/' },
  { word: 'sun', phonetic: '/sʌn/' },
  { word: 'cup', phonetic: '/kʌp/' },
  { word: 'pen', phonetic: '/pen/' },
  { word: 'cake', phonetic: '/keɪk/' },
  { word: 'road', phonetic: '/rəʊd/' },
  { word: 'shoe', phonetic: '/ʃuː/' },
  { word: 'leaf', phonetic: '/liːf/' },
  { word: 'ball', phonetic: '/bɔːl/' },
  { word: 'coin', phonetic: '/kɔɪn/' },
  { word: 'moon', phonetic: '/muːn/' },
  { word: 'flag', phonetic: '/flæg/' },
  { word: 'snow', phonetic: '/snəʊ/' },
  { word: 'cloud', phonetic: '/klaʊd/' },
  { word: 'star', phonetic: '/stɑː/' },
  { word: 'fruit', phonetic: '/fruːt/' },
  { word: 'key', phonetic: '/kiː/' },
  { word: 'plant', phonetic: '/plɑːnt/' },
  { word: 'horse', phonetic: '/hɔːs/' },
  { word: 'bell', phonetic: '/bel/' },
  { word: 'sand', phonetic: '/sænd/' },
  { word: 'soap', phonetic: '/səʊp/' },
  { word: 'milk', phonetic: '/mɪlk/' },
  { word: 'rock', phonetic: '/rɒk/' },
  { word: 'game', phonetic: '/geɪm/' },
  { word: 'wind', phonetic: '/wɪnd/' },
  { word: 'ring', phonetic: '/rɪŋ/' },
  { word: 'flag', phonetic: '/flæg/' },
];
const phoneticsSymbols = [
  'ŋ', 'j', 'p', 'ʧ', 'θ', 'uː', 'd', 'z', 'w', 'ɜː', 's', 'b', 'aɪ', 'æ', 'ʊ', 'ɔɪ',
  'ɪə', 'ʃ', 'm', 'r', 'ɪ', 'eɪ', 'l', 'g', 'iː', 't', 'v', 'ɔɪ', 'k', 'ə', 'h', 'ʒ', 'aʊ', 'e',
  'f', 'ʤ', 'əʊ', 'ʌ', 'n', 'ɑː', 'ɒ','ŋ', 'ɔː', 'eə', 'ˈ', 'ˌ', '/', 
  'bsp'
];

let currentWordIndex = -1;
let score = 0;

// DOM elements
const wordDisplay = document.getElementById('wordDisplay');
const transcriptionInput = document.getElementById('transcriptionInput');
const phoneticsKeyboard = document.getElementById('phoneticsKeyboard');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const scoreDisplay = document.getElementById('score');
const feedback = document.getElementById('feedback');
const checkBtn = document.getElementById('checkBtn'); // Check button

// Create keyboard
function createKeyboard(characters, container) {
  characters.forEach(char => {
    const button = document.createElement('button');
    button.className = 'key';
    button.textContent = char === 'bsp' ? '⌫' : char === 'del' ? '⌦' : char;
    button.onclick = () => {
      if (char === 'bsp') {
        deleteCharacter('backward');
      } else if (char === 'del') {
        deleteCharacter('forward');
      } else {
        insertCharacter(char);
      }
    };
    container.appendChild(button);
  });
}

createKeyboard(phoneticsSymbols, phoneticsKeyboard);

function insertCharacter(char) {
  const start = transcriptionInput.selectionStart;
  const end = transcriptionInput.selectionEnd;
  const text = transcriptionInput.value;
  const before = text.substring(0, start);
  const after = text.substring(end);
  transcriptionInput.value = before + char + after;
  transcriptionInput.focus();
  transcriptionInput.setSelectionRange(start + char.length, start + char.length);
}

function deleteCharacter(direction) {
  const start = transcriptionInput.selectionStart;
  const end = transcriptionInput.selectionEnd;
  const text = transcriptionInput.value;

  if (direction === 'backward') {
    if (start === end && start > 0) {
      transcriptionInput.value = text.slice(0, start - 1) + text.slice(start);
      transcriptionInput.setSelectionRange(start - 1, start - 1);
    } else if (start !== end) {
      transcriptionInput.value = text.slice(0, start) + text.slice(end);
      transcriptionInput.setSelectionRange(start, start);
    }
  } else if (direction === 'forward') {
    if (start === end && start < text.length) {
      transcriptionInput.value = text.slice(0, start) + text.slice(start + 1);
      transcriptionInput.setSelectionRange(start, start);
    } else if (start !== end) {
      transcriptionInput.value = text.slice(0, start) + text.slice(end);
      transcriptionInput.setSelectionRange(start, start);
    }
  }

  transcriptionInput.focus();
}

// Function to play a clap sound
function playClapSound() {
  const clapSound = new Audio('clap.wav'); // Replace with your sound file path
  clapSound.play();
}

function getRandomMessage(messages) {
  return messages[Math.floor(Math.random() * messages.length)];
}

// Function to trigger realistic confetti using canvas-confetti
function launchConfetti() {
  confetti({
    particleCount: 200,
    startVelocity: 30,
    spread: 360,
    origin: { x: 0.5, y: 0.5 }, // center of the screen
    colors: [
      '#ff4500', // Orange Red
      '#ffd700', // Gold
      '#32cd32', // Lime Green
      '#1e90ff', // Dodger Blue
      '#ff69b4', // Hot Pink
      '#ff6347', // Tomato Red
      '#8a2be2', // Blue Violet
      '#ff1493', // Deep Pink
      '#00ced1', // Dark Turquoise
      '#ffa500' // Orange
    ],
  });
}

function checkAnswer() {
  // Trim whitespace from user input and ensure it's in the expected format
  const userInput = transcriptionInput.value.trim();
  const currentPhonetic = words[currentWordIndex].phonetic.trim();

  // Check if the user input matches the phonetic transcription exactly
  if (userInput === currentPhonetic) {
    score++;
    feedback.textContent = getRandomMessage(congratulations); // Display random congratulatory message
    feedback.className = 'feedback correct';
    launchConfetti(); // Trigger realistic confetti effect for a correct answer
    playClapSound(); // Play the clap sound
  } else {
    feedback.textContent = `${getRandomMessage(tryAgainMessages)} The correct transcription is: ${currentPhonetic}`;
    feedback.className = 'feedback incorrect';
  }

  // Update score display
  scoreDisplay.textContent = score;
}
// Event listener for the Check button
checkBtn.addEventListener('click', () => {
  checkAnswer();
});

// Move to the next word when the Next button is clicked
nextBtn.addEventListener('click', () => {
  if (currentWordIndex < words.length - 1) {
    showWord(currentWordIndex + 1);
  }
});

// Go to the previous word when the Prev button is clicked
prevBtn.addEventListener('click', () => {
  if (currentWordIndex > 0) {
    showWord(currentWordIndex - 1);
  }
});

// Check answer on Enter key, move to next word if correct
transcriptionInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    checkAnswer();
    if (currentWordIndex < words.length - 1) {
      showWord(currentWordIndex + 1);
    }
    e.preventDefault(); // Prevent default keyboard input
  }
});

// Start the game
showWord(0);

// Show word function (modified to reset feedback when changing words)
function showWord(index) {
  currentWordIndex = index;
  wordDisplay.textContent = words[index].word;
  transcriptionInput.value = '//';
  feedback.textContent = '';
  feedback.className = 'feedback';

  // Update button states
  prevBtn.style.display = index === 0 ? 'none' : 'block';
  nextBtn.disabled = index === words.length - 1;
  transcriptionInput.focus();

  // Position cursor between slashes
  transcriptionInput.setSelectionRange(1, 1);
}

// Global variable to store available voices
let voices = [];
let selectedVoice = null;

// Function to log available voices for debugging
function logAvailableVoices() {
  const voiceList = speechSynthesis.getVoices();
  console.log('Available voices:', voiceList.map(voice => ({
    name: voice.name,
    lang: voice.lang,
    default: voice.default
  })));
}

// Function to initialize voices with better logging
function initializeVoices() {
  voices = speechSynthesis.getVoices();
  logAvailableVoices();

  // Create a voice selector dropdown
  createVoiceSelector();
}

// Create a voice selector dropdown
function createVoiceSelector() {
  const container = document.createElement('div');
  container.className = 'voice-selector-container';
  container.style.cssText = 'margin: 10px 0;';

  const select = document.createElement('select');
  select.id = 'voiceSelector';
  select.style.cssText = 'padding: 5px; margin-left: 10px; border-radius: 4px;';

  const label = document.createElement('label');
  label.htmlFor = 'voiceSelector';
  label.textContent = 'Select Voice: ';

  voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    select.appendChild(option);
  });

  select.addEventListener('change', (e) => {
    selectedVoice = voices[e.target.value];
    // Save preference
    localStorage.setItem('preferredVoice', selectedVoice.name);
  });

  container.appendChild(select);

  // Insert after the play button
  const playAudioBtn = document.getElementById('playAudioBtn');
  if (playAudioBtn) {
    playAudioBtn.parentNode.insertBefore(container, playAudioBtn.nextSibling);
  }

  // Try to set previously selected voice
  const savedVoice = localStorage.getItem('preferredVoice');
  if (savedVoice) {
    const voiceIndex = voices.findIndex(v => v.name === savedVoice);
    if (voiceIndex >= 0) {
      select.value = voiceIndex;
      selectedVoice = voices[voiceIndex];
    }
  }
}

// Function to play audio with enhanced voice selection
function playAudio() {
  speechSynthesis.cancel();

  const currentWord = words[currentWordIndex].word;
  const utterance = new SpeechSynthesisUtterance(currentWord);

  // Use selected voice or find best available voice
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  } else {
    // Try to find a British English voice
    const britishVoice = voices.find(voice =>
      voice.lang.toLowerCase().includes('en-gb') ||
      voice.name.toLowerCase().includes('british')
    );

    // Fallback to any English voice
    const englishVoice = voices.find(voice =>
      voice.lang.toLowerCase().includes('en')
    );

    // Fallback to any available voice
    const anyVoice = voices[0];

    utterance.voice = britishVoice || englishVoice || anyVoice;
    console.log('Selected voice:', utterance.voice ? utterance.voice.name : 'Default system voice');
  }

  // Optimize speech parameters
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;

  // Add error handling
  utterance.onerror = (event) => {
    console.error('Speech synthesis error:', event);
    alert('Sorry, there was an error playing the audio. Please try again.');
  };

  // Add events for debugging
  utterance.onstart = () => console.log('Started speaking:', currentWord);
  utterance.onend = () => console.log('Finished speaking:', currentWord);

  // Play the audio
  speechSynthesis.speak(utterance);
}

// Initialize voices when the script loads
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = initializeVoices;
} else {
  // Fallback for browsers that don't support onvoiceschanged
  setTimeout(initializeVoices, 1000);
}

// Set up the play button with proper event handling
document.addEventListener('DOMContentLoaded', () => {
  const playAudioBtn = document.getElementById('playAudioBtn');
  if (playAudioBtn) {
    playAudioBtn.addEventListener('click', playAudio);
  }

  // Add keyboard shortcut (space bar) to play audio
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !e.target.matches('input, textarea')) {
      e.preventDefault();
      playAudio();
    }
  });
});