const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.item');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');

const dots = document.querySelectorAll('.dot');
const cardWidth = 440; 
let currentIndex = 0;
let cardIndex = 0;

function nextImage() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

rightArrow.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > items.length - 1) {
        currentIndex = items.length - 1;
    }
    nextImage();
});

leftArrow.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 0;
    }
    nextImage();
});
function showSlide(index) {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

function nextCards() {
    mainContent1.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
}

rightArrow1.addEventListener('click', () => {
    cardIndex++;
    if (cardIndex > mainContent1.scrollWidth / cardWidth -1) {
        cardIndex = mainContent1.scrollWidth / cardWidth -1;
    }
    nextCards();
});

leftArrow1.addEventListener('click', () => {
    cardIndex--;
    if (cardIndex < 0) {
        cardIndex = 0;
    }
    nextCards();
});
function subscribe() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const email = emailInput.value;
  
    if (!isValidEmail(email)) {
      emailError.style.display = 'block';
      return;
    }
  
  
}
function toggleMenu() {
    const navbarCenterLinks = document.querySelector('.navbar-center-links');
    const navbarCenter = document.querySelector('.navbar-center');
    navbarCenterLinks.classList.toggle('open');
    navbarCenter.classList.toggle('open');
  }