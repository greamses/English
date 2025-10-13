import updateDOM from '/main.js';

const updatedVocabularyData = [
  {
  "word": "laugh",
  "image": "/Nouns/images/laugh.jpg",
  "synonyms": {
    "basic": [
      {
        "word": "smile",
        "points": 4,
        "meaning": "To form an expression of happiness by curving the lips.",
        "sentence": "She smiled warmly at her friend’s joke."
      },
    ],
    "advanced": [
      {
        "word": "cackle",
        "points": 33,
        "meaning": "To laugh in a loud, harsh way.",
        "sentence": "The old man cackled at his own joke."
      },
    ],
    "vivid": [
      {
        "word": "cachinnate",
        "points": 92,
        "meaning": "To laugh loudly and boisterously.",
        "sentence": "The professor cachinnated at the absurdity."
      },
    ]
  }
},
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const vocabularyData = shuffleArray([...updatedVocabularyData]);

updateDOM(vocabularyData)