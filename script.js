// Hero image carousel
const images = document.querySelectorAll('.hero-img');
let current = 0;

function carousel() {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
}

setInterval(carousel, 5000); // change every 5 seconds
