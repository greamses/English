const flashcard = document.getElementById('flashcard');
const cardImage = document.getElementById('cardImage');
const cardWord = document.getElementById('cardWord');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const flashcards = [
  { image: 'image1.jpg', word: 'Percent <br>(Per-Scent)' },
  { image: 'image2.jpg', word: 'Ratio <br>(Rate Show)' },
  { image: 'image3.jpg', word: 'Geometry <br>(Geo met Tri)' },
  { image: 'image4.jpg', word: 'Butterfly Method' },
  { image: 'image5.jpg', word: 'Cuberoot' },
  { image: 'image6.jpg', word: 'Speed' },
  { image: 'image7.jpg', word: 'Squareroot' },
];

let currentCard = 0;

function updateFlashcard() {
  cardImage.src = flashcards[currentCard].image;
  cardWord.innerHTML = flashcards[currentCard].word;
  prevBtn.disabled = currentCard === 0;
  nextBtn.disabled = currentCard === flashcards.length - 1;
}

flashcard.addEventListener('click', () => {
  flashcard.classList.toggle('flipped');
});

prevBtn.addEventListener('click', () => {
  flashcard.classList.remove('flipped');
  setTimeout(() => {
    if (currentCard > 0) {
      currentCard--;
      updateFlashcard();
    }
  }, 200)

});

nextBtn.addEventListener('click', () => {
  flashcard.classList.remove('flipped');
  setTimeout(() => {

    if (currentCard < flashcards.length - 1) {
      currentCard++;
      updateFlashcard();
    }
  }, 200)
});

function shuffleFlashcards() {
  for (let i = flashcards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
  }
}

// Shuffle the flashcards before loading them
shuffleFlashcards();

updateFlashcard();