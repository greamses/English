const flashcard = document.getElementById('flashcard');
const cardImage = document.getElementById('cardImage');
const cardWord = document.getElementById('cardWord');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const flashcards = [
  { image: 'image1.jpg', word: 'Hulk' },
  { image: 'image2.jpg', word: 'Wolverine' },
  { image: 'image3.jpg', word: 'Spiderman' },
  { image: 'image4.jpg', word: 'Black Panther' },
  { image: 'image5.jpg', word: 'Captain America' },
  { image: 'image6.jpg', word: 'Iron Man' },
  { image: 'image7.jpg', word: 'Thor' },
  { image: 'image8.jpg', word: 'Deadpool' },
  { image: 'image9.jpg', word: 'Cat Noir' },
  { image: 'image10.jpg', word: 'Ladybug' },
  { image: 'image11.jpg', word: 'Elsa' },
  { image: 'image12.jpg', word: 'Moana' },
  { image: 'image13.jpg', word: 'Rapunzel' },
  { image: 'image14.jpg', word: 'Goku' },
  { image: 'image15.jpg', word: 'Naruto' },
  { image: 'image16.jpg', word: 'Sasushé' },
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