const phrases = [
    "Dynamic AMOLED display",
    "Super Retina XDR display",
    "50MP main camera",
    "48MP main camera",
    "Snapdragon 8 Gen 3",
    "A18 Bionic chip",
    "5,000mAh battery",
    "4,500mAh battery",
    "Android 14",
    "iOS 18",
    "120Hz refresh rate",
    "120Hz ProMotion",
    "12GB RAM",
    "8GB RAM",
    "1TB storage option",
    "Ultrasonic fingerprint sensor",
    "Face ID",
    "Gorilla Glass Victus 2",
    "Ceramic Shield"
];

const correctSorting = {
  samsung: [
        "Dynamic AMOLED display",
        "Snapdragon 8 Gen 3",
        "5,000mAh battery",
        "Android 14",
        "120Hz refresh rate",
        "12GB RAM",
        "1TB storage option",
        "Ultrasonic fingerprint sensor",
        "Gorilla Glass Victus 2"
    ],
  iphone: [
        "Super Retina XDR display",
        "A18 Bionic chip",
        "4,500mAh battery",
        "iOS 18",
        "120Hz ProMotion",
        "8GB RAM",
        "1TB storage option",
        "Face ID",
        "Ceramic Shield"
    ],
  both: [
        "48MP main camera",
        "50MP main camera"
    ]
};

let currentIndex = 0;
let selectedPhrase = null;

// Function to shuffle phrases array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle phrases before displaying
shuffleArray(phrases);

function showPhrase(index) {
  const display = document.getElementById('phrase-display');
  display.innerHTML = '';

  if (index < phrases.length) {
    const phrase = document.createElement('p');
    phrase.className = 'sortable-phrases';
    phrase.innerText = phrases[index];
    phrase.onclick = function() { selectPhrase(phrase); };
    display.appendChild(phrase);
  } else {
    display.innerText = "All features sorted.";
  }
}

function selectPhrase(element) {
  if (selectedPhrase) {
    selectedPhrase.style.border = '2px solid #007acc';
  }

  selectedPhrase = element;
  selectedPhrase.style.border = '2px solid #ff4d4d';
}

function dropPhrase(targetId) {
  if (selectedPhrase) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement.contains(selectedPhrase)) {
      targetElement.appendChild(selectedPhrase);
      selectedPhrase.style.border = '2px solid #007acc';
      selectedPhrase = null;
    }
  } else {
    alert('Please select a feature first.');
  }
}

function nextPhrase() {
  if (selectedPhrase) {
    alert('Please sort the selected feature before proceeding.');
    return;
  }
  if (currentIndex < phrases.length) {
    currentIndex++;
    showPhrase(currentIndex);
  }
}

function submitSorting() {
  const zones = ['samsung', 'both', 'iphone'];

  zones.forEach(zone => {
    const container = document.getElementById(zone);
    Array.from(container.children).forEach(child => {
      const text = child.innerText.trim();
      if (correctSorting[zone].includes(text)) {
        child.style.backgroundColor = 'lightgreen'; // Correct
      } else {
        child.style.backgroundColor = 'lightcoral'; // Incorrect
      }
    });
  });
}

// Initialize
showPhrase(currentIndex);