// FADE IN ON SCROLL
const faders=document.querySelectorAll('.fade');
const appearOptions={threshold:0.2};
const appearOnScroll=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('show');observer.unobserve(entry.target);}
  });
},appearOptions);
faders.forEach(el=>appearOnScroll.observe(el));
