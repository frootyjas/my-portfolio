const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('#nav-list a');

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Close nav when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Close nav when clicking outside
document.addEventListener('click', (e) => {
  const isClickInside = nav.contains(e.target) || hamburger.contains(e.target);
  if (!isClickInside) {
    nav.classList.remove('active');
  }
});

//for viewing certificates
const lightboxLinks = document.querySelectorAll('.lightbox');
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxImg = document.getElementById('lightbox-img');

  lightboxLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      lightboxImg.src = this.href;
      lightboxOverlay.style.display = 'flex';
    });
  });

  function closeLightbox() {
    lightboxOverlay.style.display = 'none';
    lightboxImg.src = '';
  }

// CV Modal Logic
const cvModal = document.getElementById("cvModal");
const cvOpenBtn = document.querySelector(".download-btn");
const cvCloseBtn = document.querySelector(".cv-close");

cvOpenBtn.onclick = () => (cvModal.style.display = "block");
cvCloseBtn.onclick = () => (cvModal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === cvModal) cvModal.style.display = "none";
});

// Resume Modal Logic
const resumeModal = document.getElementById("resumeModal");
const resumeOpenBtn = document.querySelector(".downloadresume-btn");
const resumeCloseBtn = document.querySelector(".resume-close");

resumeOpenBtn.onclick = () => (resumeModal.style.display = "block");
resumeCloseBtn.onclick = () => (resumeModal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === resumeModal) resumeModal.style.display = "none";
});

// CV form
document.getElementById("cvRequestForm").addEventListener("submit", function (e) {
  const email = document.getElementById("cvEmailInput").value;
  if (!email) {
    e.preventDefault();
    return;
  }
  setTimeout(() => {
    alert(`Thank you! The owner has been notified.\n\nEmail: ${email}`);
    cvModal.style.display = "none";
  }, 300);
});

// Resume form
document.getElementById("resumeRequestForm").addEventListener("submit", function (e) {
  const email = document.getElementById("resumeEmailInput").value;
  if (!email) {
    e.preventDefault();
    return;
  }
  setTimeout(() => {
    alert(`Thank you! The owner has been notified.\n\nEmail: ${email}`);
    resumeModal.style.display = "none";
  }, 300);
});

const stars = document.querySelectorAll('.stars i');
const ratingValue = document.getElementById('rating-value');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = star.getAttribute('data-value');
    ratingValue.value = value;

    stars.forEach(s => {
      s.classList.remove('fa-solid');
      s.classList.add('fa-regular');
    });

    for (let i = 0; i < value; i++) {
      stars[i].classList.remove('fa-regular');
      stars[i].classList.add('fa-solid');
    }
  });
});

const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', function (e) {
  const ratingValue = document.getElementById('rating-value').value;
  const message = document.getElementById('feedbackMessageInput').value.trim();

  // Simple validation
  if (!ratingValue || !message) {
    e.preventDefault();
    alert('Please provide a rating and a message.');
    return;
  }

  // Optionally: show thank you alert after slight delay
  setTimeout(() => {
    alert('Thank you! Your feedback has been sent.');
    
    // Reset stars UI
    stars.forEach(s => {
      s.classList.remove('fa-solid');
      s.classList.add('fa-regular');
    });
    
    // Reset form and hidden rating input
    feedbackForm.reset();
    document.getElementById('rating-value').value = '';
  }, 300);

  // Let the form submit normally here (no e.preventDefault())
});
