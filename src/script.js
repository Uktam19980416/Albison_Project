// For sliders reviews
const reviews = document.querySelectorAll('.bg-white.px-6.py-7'); 
let currentIndex = 0;

function showSlides(index) {
  reviews.forEach((review, i) => {
    review.style.display = i === index ? 'block' : 'none';
  });
}

function next() {
  currentIndex = (currentIndex + 1) % reviews.length;
  showSlides(currentIndex);
}

function prev() {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  showSlides(currentIndex);
}

document.querySelector('.fa-chevron-left').addEventListener('click', prev);
document.querySelector('.fa-chevron-right').addEventListener('click', next);

// Path: category.html