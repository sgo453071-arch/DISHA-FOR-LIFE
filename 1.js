/* ─── SCROLL REVEAL ─── */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

/* ─── NAVBAR ─── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('backToTop').classList.toggle('show', window.scrollY > 500);
}, { passive: true });

/* ─── MOBILE MENU ─── */
const hamburger = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileCloseBtn = document.getElementById('mobileCloseBtn');

function openMobileMenu() {
  mobileMenu.classList.add('open');
  mobileOverlay.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
hamburger.addEventListener('click', openMobileMenu);
mobileCloseBtn.addEventListener('click', closeMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));

function toggleMobileSub(el) {
  const sub = el.nextElementSibling;
  if (!sub) return;
  const isOpen = sub.classList.contains('open');
  // Close all
  document.querySelectorAll('.mobile-sub-menu.open').forEach(s => s.classList.remove('open'));
  if (!isOpen) sub.classList.add('open');
}

/* ─── SMOOTH SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ─── COUNTER ANIMATION ─── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString('en-IN') + (target >= 1000 ? '+' : '+');
  }, 16);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-number[data-target]').forEach(el => counterObserver.observe(el));

/* ─── TESTIMONIALS SLIDER ─── */
const track = document.getElementById('testimonialsTrack');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
let slidesPerView = 3;
let totalSlides = 5;

function getSlidesPerView() {
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}
function getMaxSlide() {
  return totalSlides - getSlidesPerView();
}
function updateSlider() {
  slidesPerView = getSlidesPerView();
  const maxSlide = getMaxSlide();
  if (currentSlide > maxSlide) currentSlide = maxSlide;
  const cardWidth = track.children[0].offsetWidth + 28; // gap
  track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
  // Update dots
  const dotCount = Math.min(dots.length, maxSlide + 1);
  dots.forEach((d, i) => {
    d.classList.toggle('active', i === currentSlide);
    d.setAttribute('aria-selected', i === currentSlide);
  });
}

document.getElementById('sliderNext').addEventListener('click', () => {
  if (currentSlide < getMaxSlide()) { currentSlide++; updateSlider(); }
});
document.getElementById('sliderPrev').addEventListener('click', () => {
  if (currentSlide > 0) { currentSlide--; updateSlider(); }
});
dots.forEach(d => {
  d.addEventListener('click', () => {
    currentSlide = parseInt(d.dataset.idx);
    updateSlider();
  });
});
window.addEventListener('resize', updateSlider, { passive: true });

// Auto-play
let autoPlay = setInterval(() => {
  currentSlide = currentSlide >= getMaxSlide() ? 0 : currentSlide + 1;
  updateSlider();
}, 5000);
track.addEventListener('mouseenter', () => clearInterval(autoPlay));
track.addEventListener('mouseleave', () => {
  autoPlay = setInterval(() => {
    currentSlide = currentSlide >= getMaxSlide() ? 0 : currentSlide + 1;
    updateSlider();
  }, 5000);
});

/* ─── FAQ ─── */
function toggleFaq(btn) {
  const isOpen = btn.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-question.open').forEach(q => {
    q.classList.remove('open');
    q.setAttribute('aria-expanded', 'false');
    q.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    btn.nextElementSibling.classList.add('open');
  }
}

/* ─── LIGHTBOX ─── */
function openLightbox(item) {
  const img = item.querySelector('img');
  if (!img) return;
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightboxImg').alt = img.alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(e) {
  if (e && e.target !== document.getElementById('lightbox') && !e.target.classList.contains('lightbox-close')) return;
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox({ target: document.getElementById('lightbox') });
});

/* ─── TOAST ─── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

/* ─── CONTACT FORM ─── */
function handleFormSubmit(e) {
  e.preventDefault();
  const first = document.getElementById('firstName').value.trim();
  const email = document.getElementById('email').value.trim();
  if (!first || !email) {
    showToast('Please fill in your name and email.');
    return;
  }
  showToast('✓ Thank you, ' + first + '! We\'ll be in touch soon.');
  // Reset form fields
  ['firstName','lastName','email','phone','interest','message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

/* ─── HERO PARTICLE COLORS ─── */
// Already defined inline

/* ─── KEYBOARD: gallery items ─── */
document.querySelectorAll('.gallery-item').forEach(item => {
  item.setAttribute('tabindex', '0');
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(item); }
  });
});

/* ─── PROGRAM CARDS: keyboard ─── */
document.querySelectorAll('.program-card').forEach(card => {
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter') showToast('Program details coming soon!');
  });
  card.addEventListener('click', () => showToast('Program details coming soon!'));
});

// Init slider sizing on load
window.addEventListener('load', updateSlider);
