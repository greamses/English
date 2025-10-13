document.addEventListener('DOMContentLoaded', function() {
  // Create the card container
  const card = document.createElement('div');
  card.classList.add('card');

  // Front side of the card
  const front = document.createElement('div');
  front.classList.add('front');

  // Canvas element
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas';
  front.appendChild(canvas);

  // Toolbar container
  const toolbar = document.createElement('div');
  toolbar.classList.add('toolbar');

  // Color picker
  const colorPicker = document.createElement('div');
  colorPicker.classList.add('color-picker');

  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A5', '#33FFF8', '#F833FF', '#FFD700', '#F87B93'];

  colors.forEach(color => {
    const colorDiv = document.createElement('div');
    colorDiv.setAttribute('data-color', color);
    colorDiv.style.backgroundColor = color;
    colorPicker.appendChild(colorDiv);
  });

  toolbar.appendChild(colorPicker);

  // Tools container
  const tools = document.createElement('div');
  tools.classList.add('tools');

  const toolButtons = [
    { id: 'clearBtn', icon: 'fas fa-trash-alt', title: 'Clear' },
    { id: 'penBtn', icon: 'fas fa-pencil-alt', title: 'Pen' },
    { id: 'eraseBtn', icon: 'fas fa-eraser', title: 'Eraser' }
  ];

  toolButtons.forEach(tool => {
    const button = document.createElement('button');
    button.id = tool.id;
    button.title = tool.title;
    const icon = document.createElement('i');
    icon.className = tool.icon;
    button.appendChild(icon);
    tools.appendChild(button);
  });

  // Pen size slider
  const penSizeSlider = document.createElement('input');
  penSizeSlider.type = 'range';
  penSizeSlider.id = 'penSize';
  penSizeSlider.min = '1';
  penSizeSlider.max = '100';
  penSizeSlider.value = '5';
  tools.appendChild(penSizeSlider);

  toolbar.appendChild(tools);
  front.appendChild(toolbar);

  // Back side of the card (Calculator)
  const back = document.createElement('div');
  back.classList.add('back');

  const calculator = document.createElement('div');
  calculator.classList.add('calculator');

  // Add calculator display
  const calcDisplay = document.createElement('input');
  calcDisplay.type = 'text';
  calcDisplay.id = 'calc-display';
  calcDisplay.disabled = true;
  calculator.appendChild(calcDisplay);

  // Add other calculator buttons
  const calcButtonsContainer = document.createElement('div');
  calcButtonsContainer.id = 'calc-buttons';

  const calcButtons = [
  'C', 'Del', '±', '|abs|',
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '.', '0', '=', '+', '√', 'x²',
  'sin', 'cos', 'tan', 'xʸ', 'y√x',
  'log', 'log⁻¹', '(', ')'
];
  calcButtons.forEach(text => {
    const button = document.createElement('button');
    button.innerText = text;
    calcButtonsContainer.appendChild(button);
  });

  calculator.appendChild(calcButtonsContainer);
  back.appendChild(calculator);

  // Append front and back to the card
  card.appendChild(front);
  card.appendChild(back);

  // Add flip button and toolbar toggle
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons');

  const flipBtn = document.createElement('button');
  flipBtn.id = 'flipBtn';
  flipBtn.classList.add('flip-btn');
  buttonsContainer.appendChild(flipBtn);

  const toggleToolbar = document.createElement('div');
  toggleToolbar.classList.add('toggle-toolbar');
  const toggleIcon = document.createElement('i');
  toggleIcon.className = 'fas fa-chevron-up';
  toggleToolbar.appendChild(toggleIcon);
  buttonsContainer.appendChild(toggleToolbar);

  // Append card and buttons to body
  document.body.appendChild(card);
  document.body.appendChild(buttonsContainer);

  // Prevent keyboard arrow keys from inserting characters
  calcDisplay.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault(); // Prevent the default behavior
      moveCursor('left');
    } else if (event.key === 'ArrowRight') {
      event.preventDefault(); // Prevent the default behavior
      moveCursor('right');
    }
  });

  // Canvas Drawing Logic
  const ctx = canvas.getContext('2d');
  let painting = false;
  let penColor = '#FF5733';
  let isErasing = false;

  const resizeCanvas = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const startPosition = (e) => {
    painting = true;
    draw(e);
  };

  const endPosition = () => {
    painting = false;
    ctx.beginPath();
  };

  const draw = (e) => {
    if (!painting) return;

    ctx.lineWidth = penSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = isErasing ? '#fff' : penColor;

    const rect = canvas.getBoundingClientRect();
    let x, y;
    if (e.type.includes('mouse')) {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    } else if (e.type.includes('touch')) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', endPosition);
  canvas.addEventListener('mousemove', draw);

  canvas.addEventListener('touchstart', startPosition);
  canvas.addEventListener('touchend', endPosition);
  canvas.addEventListener('touchmove', draw);

  // Toolbar toggle
  toggleToolbar.addEventListener('click', () => {
    toolbar.classList.toggle('show');
    toggleToolbar.classList.toggle('active');
  });

  // Color picker
  const colorPickerDivs = document.querySelectorAll('.color-picker div');
  colorPickerDivs.forEach(div => {
    div.addEventListener('click', () => {
      penColor = div.getAttribute('data-color');
      isErasing = false;
      colorPickerDivs.forEach(d => d.style.border = '2px solid #ffd700');
      div.style.border = '4px solid #000';
    });
  });

  // Pen size picker (slider)
  penSizeSlider.addEventListener('input', (e) => {
    penSize = e.target.value;
  });

  // Eraser
  const eraseBtn = document.getElementById('eraseBtn');
  eraseBtn.addEventListener('click', () => {
    isErasing = true;
  });


  // Clear button
  const clearBtn = document.getElementById('clearBtn');
  clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Flip card functionality
  flipBtn.addEventListener('click', () => {
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
  });


  // Function to convert exponent into Unicode superscript characters
  function convertToSuperscript(num) {
    const superscript = {
      '0': '⁰',
      '1': '¹',
      '2': '²',
      '3': '³',
      '4': '⁴',
      '5': '⁵',
      '6': '⁶',
      '7': '⁷',
      '8': '⁸',
      '9': '⁹'
    };

    return num.split('').map(digit => superscript[digit] || digit).join('');
  }


  calcDisplay.value = '0'; // Display '0' initially
  Display = document.getElementById('calcDisplay');
  let calcExpression = '0';
  let base = null;
  let exponentMode = false;
  let isSquareMode = false;
  let isSquareRootMode = false;
  let isTrigMode = false;
  let isRootMode = false;
  let trigFunction = '';

  calcButtonsContainer.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const value = button.innerText;

      if (value === '=') {
        try {
          if (isSquareMode) {
            calcExpression = parseFloat(Math.pow(parseFloat(calcExpression), 2).toFixed(10)).toString();
            isSquareMode = false;
          } else if (isSquareRootMode) {
            calcExpression = parseFloat(Math.sqrt(eval(calcExpression)).toFixed(10)).toString();
            isSquareRootMode = false;
          } else if (exponentMode) {
            calcExpression = parseFloat(Math.pow(base, eval(calcExpression)).toFixed(10)).toString();
            exponentMode = false;
          } else if (isTrigMode) {
            calcExpression = parseFloat(eval(trigFunction + '(' + toRadians(calcExpression) + ')').toFixed(10)).toString();
            isTrigMode = false;
          } else if (isRootMode) {
            calcExpression = parseFloat(Math.pow(base, 1 / eval(calcExpression)).toFixed(10)).toString();
            isRootMode = false;
          } else {
            // Handle log and antilog
            calcExpression = calcExpression.replace(/log\(([^)]+)\)/g, 'Math.log10($1)');
            calcExpression = calcExpression.replace(/antilog\(([^)]+)\)/g, 'Math.pow(10, $1)');
            calcExpression = parseFloat(eval(calcExpression).toFixed(10)).toString();
          }
          calcDisplay.value = calcExpression;
        } catch {
          calcExpression = 'Error';
          calcDisplay.value = calcExpression;
        }
      } else if (value === 'C') {
        calcExpression = '0';
        base = null;
        exponentMode = false;
        isSquareMode = false;
        isSquareRootMode = false;
        isTrigMode = false;
        trigFunction = '';
        isRootMode = false;
        calcDisplay.value = '0';
      } else if (value === 'C') {
        clearCalculator();
      } else if (value === 'Del') {
        calcExpression = calcExpression.slice(0, -1) || '0';
        calcDisplay.value = calcExpression;

        // Check if the display is empty or '0', then call the clear function
        if (calcExpression === '0' || calcExpression === '') {
          clearCalculator();
        }
      } else if (value === 'x²') {
        if (!exponentMode && !isSquareRootMode && !isTrigMode && !isRootMode) {
          isSquareMode = true;
          calcDisplay.value = `${calcExpression}²`;
        }
      } else if (value === '√') {
        if (!exponentMode && !isSquareMode && !isTrigMode && !isRootMode) {
          isSquareRootMode = true;
          calcDisplay.value = `√(${calcExpression})`;
        }
      } else if (value === 'x^y') {
        base = calcExpression;
        calcExpression = '';
        exponentMode = true;
        calcDisplay.value = `${base}^`;
      } else if (value === 'y√x') {
        base = calcExpression;
        calcExpression = '';
        isRootMode = true;
        calcDisplay.value = `${base}√(`;
      } else if (value === 'log') {
        calcExpression = `log(${calcExpression})`;
        calcDisplay.value = calcExpression;
      } else if (value === 'antilog') {
        calcExpression = `antilog(${calcExpression})`;
        calcDisplay.value = calcExpression;
      } else if (value === '(') {
        calcExpression += '(';
        calcDisplay.value = calcExpression;
      } else if (value === ')') {
        calcExpression += ')';
        calcDisplay.value = calcExpression;
      } else if (['sin', 'cos', 'tan'].includes(value)) {
        if (!isSquareMode && !isSquareRootMode && !exponentMode && !isRootMode) {
          isTrigMode = true;
          trigFunction = `Math.${value}`;
          calcDisplay.value = `${value}(`;
        }
      } else if (value === '±') {
        if (calcExpression) {
          calcExpression = (parseFloat(calcExpression) * -1).toString();
          calcDisplay.value = calcExpression;
        }
      } else if (value === '|abs|') {
        if (calcExpression) {
          calcExpression = Math.abs(parseFloat(calcExpression)).toString();
          calcDisplay.value = calcExpression;
        }
      } else if (exponentMode) {
        calcExpression += value;
        calcDisplay.value = `${base}${convertToSuperscript(calcExpression)}`;
      } else if (isRootMode) {
        calcExpression += value;
        calcDisplay.value = `${base}√(${calcExpression})`;
      } else if (isTrigMode) {
        calcExpression += value;
        calcDisplay.value = `${trigFunction.slice(5)}(${calcExpression})`;
      } else {
        // Prevent consecutive operators
        if (
        ['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(calcExpression.slice(-1))
        ) {
          // Replace the last operator with the new one
          calcExpression = calcExpression.slice(0, -1) + value;
        } else {
          if (calcExpression === '0' && !isNaN(value)) {
            calcExpression = value;
          } else {
            calcExpression += value;
          }
        }
        calcDisplay.value = calcExpression;
      }
    });
  });

  // Helper function to convert degrees to radians
  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

});