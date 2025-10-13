const body = document.body;
const result = document.getElementById('result');
const textInput = document.getElementById('text-input');
const tooltip = document.querySelector('.definition');

function isPalindrome(text) {
  let stringedExp = text
    .replace(/[^a-zA-Z0-9]/g, '') 
    .replace(/\s+/g, '') 
    .toLowerCase(); 

  const stringLength = stringedExp.length;
  const splitExp = Math.floor(stringLength / 2);

  if (stringLength === 0) return false;
  if (stringLength === 1) return true;

  for (let i = 0; i < splitExp; i++) {
    if (stringedExp[i] !== stringedExp[stringLength - (i + 1)]) {
      return false;
    }
  }
  return true; 
}

function showAlert() {
  if (document.querySelector('.custom-alert')) return;

  let alertBox = document.createElement('div');
  alertBox.className = 'custom-alert';
  alertBox.innerHTML = `
  <p><em>Daniel Says:</em> <br> Please input a value<p>`;

  document.body.appendChild(alertBox);
  setTimeout(() => alertBox.remove(), 2000);
}

function getResponse() {
  const text = textInput.value.trim(); 
  if (text === "") {
    alert("Please input a value")
  } else if (isPalindrome(text)) {
    result.innerHTML = `${text} is a <em class="green">palindrome</em>`;
  } else {
    result.innerHTML = `${text} is <em class="red">not</em> a palindrome`;
  }
}

function tooltipShow() {
  if (tooltip) tooltip.classList.add('show');
}
function tooltipHide() {
  if (tooltip) tooltip.classList.remove('show');
}

// Event Listeners
document.getElementById('check-btn').addEventListener('click', getResponse);
textInput.addEventListener('focus', tooltipShow);
textInput.addEventListener('blur', tooltipHide);
