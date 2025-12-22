// ===== SMOOTH SCROLLING FOR NAVIGATION =====
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ===== BUTTON HOVER ANIMATION =====
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
    button.style.boxShadow = '0px 8px 20px rgba(0,0,0,0.2)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
    button.style.boxShadow = '0px 4px 10px rgba(0,0,0,0.1)';
  });
});

// ===== FADE IN SECTIONS ON SCROLL =====
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // fade in once
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// ===== HEADER SHRINK ON SCROLL =====
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    nav.style.padding = '10px 20px';
    nav.style.boxShadow = '0px 2px 6px rgba(0,0,0,0.1)';
  } else {
    nav.style.padding = '15px 20px';
    nav.style.boxShadow = 'none';
  }
});
