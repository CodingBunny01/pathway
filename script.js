const images = document.querySelectorAll('.image');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

images.forEach(img => observer.observe(img));
