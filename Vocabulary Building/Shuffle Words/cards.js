import words from './words.js'

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");



carousel.innerHTML = words.map(item => {
  let { word, hint, image, pronunciation, sentenceUsage } = item
  return `<li class="card snap-align">
        <div class="front">
          <div class="img"><img src="${image}" alt="${word}" draggable="false"></div>
          <h2>Guess the Face</h2>
          <p class="hint">Hint: ${hint}</p>
        </div>
        <div class="back">
          <h2>${word} ${pronunciation}</h2>
          <p class="small">${sentenceUsage}</p>
        </div>
      </li>`
}).join('')

const cards = carousel.querySelectorAll(".card")

const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('turn')
  })
})

let isDragging = false,
  isAutoPlay = true,
  startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    cards.forEach(card => card.classList.remove('turn'))
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;

}

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
    carousel.classList.remove("no-transition");
  }

  else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return;
  timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
  cards.forEach(card => card.classList.remove('turn'))
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);