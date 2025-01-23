const carousel = document.querySelector('.carousel');
let currentIndex = 1;

const cards = document.querySelectorAll('.card');

const updateCarousel = () => {
  cards.forEach((card, index) => {
    if (index === (currentIndex - 1 + cards.length) % cards.length) {
      card.classList.remove('center', 'above', 'below');
      card.classList.add('above');
    } else if (index === currentIndex) {
      card.classList.remove('center', 'above', 'below');
      card.classList.add('center');
    } else if (index === (currentIndex + 1) % cards.length) {
      card.classList.remove('center', 'above', 'below');
      card.classList.add('below');
    }
  });
};

updateCarousel();

let startY = 0;
let endY = 0;

carousel.addEventListener('mousedown', (e) => {
  startY = e.clientY;
  carousel.style.cursor = 'grabbing';
});

carousel.addEventListener('mouseup', (e) => {
  endY = e.clientY;
  carousel.style.cursor = 'grab';

  if (startY - endY > 50) {
    currentIndex = (currentIndex + 1) % cards.length;
  }
  else if (endY - startY > 50) {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  }

  updateCarousel();
});

carousel.addEventListener('dragstart', (e) => {
  e.preventDefault();
});
