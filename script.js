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


/*const sections = {
about: document.getElementById('about-section'),
skills: document.getElementById('skills-section'),
projects: document.getElementById('projects-section'),
education: document.getElementById('education-section'),
certification: document.getElementById('certification-section'),
connect: document.getElementById('connect-section'),
};

const links = {
about: document.getElementById('about-link'),
skills: document.getElementById('skills-link'),
projects: document.getElementById('projects-link'),
education: document.getElementById('education-link'),
certification: document.getElementById('certification-link'),
connect: document.getElementById('connect-link'),
};

function setActive(id) {
Object.values(links).forEach(link => link.classList.remove('active'));
Object.values(sections).forEach(section => section.style.display = 'none');
links[id].classList.add('active');
sections[id].style.display = 'block';
nav.classList.remove('active');
}

links.about.addEventListener('click', () => setActive('about'));
links.skills.addEventListener('click', () => setActive('skills'));
links.projects.addEventListener('click', () => setActive('projects'));
links.education.addEventListener('click', () => setActive('education'));
links.certification.addEventListener('click', () => setActive('certification'));
links.connect.addEventListener('click', () => setActive('connect'));

setActive('about');*/

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

  const modal = document.getElementById("cvModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.querySelector(".close");
  const requestBtn = document.getElementById("requestBtn");

  openBtn.onclick = function () {
    modal.style.display = "block";
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

const form = document.getElementById("cvRequestForm");
  form.addEventListener("submit", function (e) {
    const email = document.getElementById("emailInput").value;
    if (!email) {
      alert("Please enter a valid email.");
      e.preventDefault(); 
      return;
    }

    setTimeout(() => {
      alert(`Thank you! The owner has been notified.\n\nEmail: ${email}`);
      document.getElementById("cvModal").style.display = "none";
    }, 300);
  });