// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Contact form (WhatsApp redirect)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name     = document.getElementById('name').value.trim();
  const email    = document.getElementById('email').value.trim();
  const interest = document.getElementById('interest').value;
  const message  = document.getElementById('message').value.trim();

  const labels = {
    course: 'Online Course',
    book: 'Book Reservation',
    session: 'Private Session',
    exam: 'Exam Preparation',
    other: 'Other',
  };

  const text = [
    `Hello Mr. Riadh! My name is ${name}.`,
    email ? `Contact: ${email}` : '',
    interest ? `I'm interested in: ${labels[interest] || interest}` : '',
    message ? `Message: ${message}` : '',
  ].filter(Boolean).join('\n');

  window.open(`https://wa.me/21625102107?text=${encodeURIComponent(text)}`, '_blank');
});

// YouTube embed fallback: show placeholder if iframe fails to load
document.querySelectorAll('.video-embed iframe').forEach(iframe => {
  iframe.addEventListener('error', () => {
    iframe.style.display = 'none';
    const fb = iframe.closest('.video-embed').querySelector('.video-embed__fallback');
    if (fb) fb.style.display = 'block';
  });
  // After 4s if iframe src is still loading, show fallback
  setTimeout(() => {
    try {
      if (!iframe.contentDocument) {
        iframe.style.display = 'none';
        const fb = iframe.closest('.video-embed').querySelector('.video-embed__fallback');
        if (fb) fb.style.display = 'block';
      }
    } catch { /* cross-origin — iframe loaded ok */ }
  }, 4000);
});

// Smooth reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.cat-card, .course-card, .book-card, .tcard, .cred'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});

document.addEventListener('animationend', () => {}, { once: true });

// Add visible class handler
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);
