const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
nav.classList.toggle('active');
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