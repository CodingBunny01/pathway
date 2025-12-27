// Fade-in for sections
const f = document.querySelectorAll('.fade');
const o = new IntersectionObserver(e=>{
  e.forEach(x=>x.isIntersecting && x.target.classList.add('show'))
},{threshold:.2});
f.forEach(el=>o.observe(el));
