const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const icon = hamburger.querySelector('i');
    icon.className = navLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.querySelector('i').className = 'fas fa-bars';
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.solution-card, .stat-card, .position-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

const cvUpload = document.getElementById('cvUpload');
const fileName = document.getElementById('fileName');
if (cvUpload && fileName) {
  cvUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) fileName.textContent = `✓ ${file.name} (${(file.size / 1024).toFixed(0)} KB)`;
  });
}
