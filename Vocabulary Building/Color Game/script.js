const allColors = [
  { name: "Red", value: "red" },
  { name: "Green", value: "green" },
  { name: "Blue", value: "blue" },
  { name: "Yellow", value: "yellow" },
  { name: "Purple", value: "purple" },
  { name: "Orange", value: "orange" },
  { name: "Pink", value: "pink" },
  { name: "Brown", value: "brown" },
];
let currentColor;
let difficultyLevel = 1;

function getRandomColor() {
  const maxColors = Math.min(difficultyLevel * 10, allColors.length);
  return allColors[Math.floor(Math.random() * maxColors)];
}

function setupGame() {
  currentColor = getRandomColor();
  document.getElementById("color-box").style.backgroundColor = currentColor.value;
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = '';

  // Shuffle and slice to get 5 random colors first
  let shuffledColors = [...allColors].sort(() => 0.5 - Math.random()).slice(0, 5);

  // Ensure the correct color is included in the choices
  if (!shuffledColors.includes(currentColor)) {
    shuffledColors.push(currentColor);
  } else {
    shuffledColors[shuffledColors.indexOf(currentColor)] = currentColor;
  }

  // Shuffle again to randomize the position of the correct color
  shuffledColors = shuffledColors.sort(() => 0.5 - Math.random());

  shuffledColors.forEach(color => {
    const button = document.createElement("button");
    button.innerText = color.name;
    button.onclick = () => handleButtonClick(color.name);
    choicesContainer.appendChild(button);
  });
}

function handleButtonClick(selectedColor) {
  const clickSound = document.getElementById("click-sound");
  clickSound.play();

  checkAnswer(selectedColor);
}

function checkAnswer(selectedColor) {
  const message = document.getElementById("message");
  if (selectedColor === currentColor.name) {
    message.innerText = "Correct!";
    message.style.color = "lightgreen";
    difficultyLevel++;
  } else {
    message.innerText = `Wrong!  ${currentColor.name}.`;
    message.style.color = "red";
  }
  setTimeout(() => {
    message.innerText = '';
    setupGame();
  }, 2000);
}

window.onload = setupGame;