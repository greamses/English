const animals = [
  { name: 'Duck', male: 'Drake', female: 'Duck', young: 'Duckling', habitat: 'Pond', feed: 'Omnivore' },
  { name: 'Dog', male: 'Dog', female: 'Bitch', young: 'Puppy', habitat: 'Domestic', feed: 'Omnivore' },
  { name: 'Cat', male: 'Tom', female: 'Queen', young: 'Kitten', habitat: 'Domestic', feed: 'Carnivore' },
  { name: 'Cattle', male: 'Bull', female: 'Cow', young: 'Calf', habitat: 'Farm', feed: 'Herbivore' },
  { name: 'Chicken', male: 'Rooster', female: 'Hen', young: 'Chick', habitat: 'Farm', feed: 'Omnivore' },
  { name: 'Donkey', male: 'Jack', female: 'Jenny', young: 'Foal', habitat: 'Farm', feed: 'Herbivore' },
  { name: 'Horse', male: 'Stallion', female: 'Mare', young: 'Foal', habitat: 'Farm', feed: 'Herbivore' },
  { name: 'Camel', male: 'Bull', female: 'Cow', young: 'Calf', habitat: 'Desert', feed: 'Herbivore' },
  { name: 'Goat', male: 'Billy', female: 'Nanny', young: 'Kid', habitat: 'Farm', feed: 'Herbivore' },
  { name: 'Turkey', male: 'Tom', female: 'Hen', young: 'Poult', habitat: 'Farm', feed: 'Omnivore' },
  { name: 'Sheep', male: 'Ram', female: 'Ewe', young: 'Lamb', habitat: 'Farm', feed: 'Herbivore' },
  { name: 'Rabbit', male: 'Buck', female: 'Doe', young: 'Kit', habitat: 'Burrow', feed: 'Herbivore' },
  { name: 'Goose', male: 'Gander', female: 'Goose', young: 'Gosling', habitat: 'Pond', feed: 'Herbivore' },
  { name: 'Pig', male: 'Boar', female: 'Sow', young: 'Piglet', habitat: 'Farm', feed: 'Omnivore' },
  { name: 'Fish', male: 'Fish', female: 'Fish', young: 'Fry', habitat: 'Water', feed: 'Omnivore' }
];

// Function to generate the quiz table
function generateTable() {
  const tbody = document.querySelector('#quizTable tbody');

  animals.forEach((animal, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
            <td>${animal.name}</td>
            <td><input type="text" id="male${index}" name="male${index}"></td>
            <td><input type="text" id="female${index}" name="female${index}"></td>
            <td><input type="text" id="young${index}" name="young${index}"></td>
            <td><input type="text" id="habitat${index}" name="habitat${index}"></td>
            <td><input type="text" id="feed${index}" name="feed${index}"></td>
        `;
    tbody.appendChild(row);
  });
}

// Function to check answers and highlight cells
function checkAnswers() {
  let score = 0;
  const total = animals.length * 5; // 5 attributes per animal

  animals.forEach((animal, index) => {
    const answers = {
      male: animal.male.toLowerCase(),
      female: animal.female.toLowerCase(),
      young: animal.young.toLowerCase(),
      habitat: animal.habitat.toLowerCase(),
      feed: animal.feed.toLowerCase()
    };

    for (let attr in answers) {
      const input = document.getElementById(`${attr}${index}`);
      if (input) {
        const inputValue = input.value.toLowerCase();
        if (inputValue === answers[attr]) {
          input.style.backgroundColor = '#8BC34A'; // Green for correct answer
          score++;
        } else {
          input.style.backgroundColor = '#FFCDD2'; // Red for wrong answer
        }
        input.disabled = true; // Disable inputs after checking
      }
    }
  });

  const resultElement = document.getElementById('result');
  resultElement.textContent = `Your score: ${score} / ${total}`;

  // Show retry button only after checking
  if (!document.querySelector('.retry-btn')) {
    const retryButton = document.createElement('button');
    retryButton.textContent = 'Retry';
    retryButton.classList.add('retry-btn');
    retryButton.addEventListener('click', () => {
      resetQuiz();
    });
    resultElement.appendChild(retryButton);
  }
}

// Function to reset quiz for retry
function resetQuiz() {
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(input => {
    input.value = '';
    input.style.backgroundColor = '#FFFFFF'; // Reset background color
    input.disabled = false; // Enable inputs
  });

  document.getElementById('result').textContent = '';

  const retryButton = document.querySelector('.retry-btn');
  if (retryButton) {
    retryButton.remove(); // Remove retry button if it exists
  }
}

// Call function to generate table when the page loads
generateTable();

// Event listener for submit button
document.getElementById('submitBtn').addEventListener('click', () => {
  checkAnswers();
});