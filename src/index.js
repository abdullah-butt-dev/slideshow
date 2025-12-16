import "./styles.css";

const $ = (selector) => document.querySelectorAll(selector);

let slideIndex = 0;
showSlides(slideIndex)

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = $('.slide');
  const dots = $('.dot');

  if(n > slides.length) slideIndex = 1;
  if(n < 1) slideIndex = slides.length; 

  const i = slideIndex - 1;

  slides.forEach((slide) => slide.style.display = 'none')
  dots.forEach((dot) => dot.classList.remove('active') )

  slides[i].style.display = 'block';
  dots[i].classList.add('active');
}

const navArrows = $('.nav');
navArrows.forEach(arrow => arrow.addEventListener('click', () => {
  arrow.classList.contains('prev') ? plusSlides(-1) : plusSlides(1)
}))

const dots = $('.dot');
dots.forEach((dot, index) => dot.addEventListener('click', () => {
  currentSlide(index + 1);
}))

let autoplayId = setInterval(() => plusSlides(1), 5000);

const slider = document.querySelector('.slideshow-container');

slider.addEventListener('mouseenter', () => clearInterval(autoplayId));
slider.addEventListener('mouseleave', () => autoplayId = setInterval(() => plusSlides(1), 5000));