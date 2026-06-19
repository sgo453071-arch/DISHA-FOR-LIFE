/* ─── CATEGORY FILTERING ─── */
function filterCategory(cat) {
  // Update active button state
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // Find clicked button
  const clickedBtn = Array.from(buttons).find(btn => {
    return btn.getAttribute('onclick').includes(cat);
  });
  if (clickedBtn) clickedBtn.classList.add('active');

  // Filter cards
  const cards = document.querySelectorAll('.volunteer-card');
  cards.forEach(card => {
    const categories = card.getAttribute('data-category').split(' ');
    if (cat === 'all' || categories.includes(cat)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ─── CREDENTIAL MODAL ─── */
function verifyCredentials(name, score, hours, project, level) {
  const modal = document.getElementById('credentialModal');
  
  // Populate details
  document.getElementById('modalName').textContent = name;
  document.getElementById('modalScore').textContent = score;
  document.getElementById('modalHours').textContent = hours;
  document.getElementById('modalProject').textContent = project;
  
  // Open modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  const modal = document.getElementById('credentialModal');
  
  // Close only if clicking overlay or close button
  if (e && e.target !== modal && !e.target.classList.contains('modal-close')) {
    return;
  }
  
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on Escape key press
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
