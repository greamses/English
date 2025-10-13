const flashcard = document.getElementById('flashcard');
const cardImage = document.getElementById('cardImage');
const cardWord = document.getElementById('cardWord');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const flashcards = [
  { image: 'image1.jpg', word: 'Jupiter' },
  { image: 'image2.jpg', word: 'Earth' },
  { image: 'image3.jpg', word: 'Saturn' },
  { image: 'image4.jpg', word: 'Neptune' },
  { image: 'image5.jpg', word: 'Mecury' },
  { image: 'image6.jpg', word: 'Mars' },
  { image: 'image7.jpg', word: 'Venus' },
  { image: 'image8.jpg', word: 'Sun' },
  { image: 'image9.jpg', word: 'Uranus' }
];

let currentCard = 0;

function updateFlashcard() {
  cardImage.src = flashcards[currentCard].image;
  cardWord.textContent = flashcards[currentCard].word;
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