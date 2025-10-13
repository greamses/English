import words from './words.js'

const wordText = document.querySelector(".word"),
  body = document.querySelector("body"),
  result = document.querySelector(".result"),
  picture = document.querySelector("picture"),
  top = document.querySelector(".top span"),
  score = document.querySelector(".score span"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime);
    }
    let wordInfo = `Time off! ${correctWord.toUpperCase()} was the correct word`
    let think = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512"
    resultShow(wordInfo, think, 'Restart')
    initGame();
  }, 1000);
};

let count = 1
let scoreNum = 0
let total = words.length

const initGame = () => {
  initTimer(20);
  if (words.length === 0) {
    if (result.classList.contains('show')) {
      return
    }
    let wordInfo = "All words have been used!"
    let nerd ="https://fonts.gstatic.com/s/e/notoemoji/latest/1f913/512"
    resultShow(wordInfo, nerd)
  }
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomObj = words.splice(randomIndex, 1)[0];

  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerHTML = wordArray.map(word=>{
    return `<span>${word}</span>`
  }).join("");
  hintText.innerText = randomObj.hint;
  picture.innerHTML = `
  <img class="emoji" src="${randomObj.image}" alt="😊"/>
  `
  top.innerText = `${count} of ${total}`
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
  count++
};

initGame();

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) {
    let text = "Please enter the word to check!"
    let think = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512"
    resultShow(text, think)
  }
  else if (userWord !== correctWord) {
    let text = `Oops! ${userWord} is not a correct word`
    let lost = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f633/512"
    resultShow(text, lost)
  }
  else {
    let text = `Congrats! ${correctWord.toUpperCase()} is the correct word`
    let victory = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f913/512"
    resultShow(text, victory)
    scoreNum++
    score.innerText = scoreNum
  }
  initGame();

};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

function resultShow(comment, img) {
  result.innerHTML = `
  <img src="${img}.gif"/>
  <p>${comment}</p>
  <button class="action">Continue</button>
  `
  body.classList.add('show')
  result.classList.add('show')
  
  let continueBtn = document.querySelector('.action')
  continueBtn.addEventListener('click',()=>{
    body.classList.remove('show')
result.classList.remove('show')
  })
}

