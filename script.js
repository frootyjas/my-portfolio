 // Toggle mobile nav
  const hamburger = document.getElementById('hamburger');
  const navList = document.getElementById('nav-list');
  hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  // Sections
  const sections = {
    about: document.getElementById('about-section'),
    skills: document.getElementById('skills-section'),
    projects: document.getElementById('projects-section'),
    education: document.getElementById('education-section'),
    certification: document.getElementById('certification-section'),
    connect: document.getElementById('connect-section'),
  };

  // Links
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
    navList.classList.remove('show'); // hide nav after clicking
  }

  links.about.addEventListener('click', () => setActive('about'));
  links.skills.addEventListener('click', () => setActive('skills'));
  links.projects.addEventListener('click', () => setActive('projects'));
  links.education.addEventListener('click', () => setActive('education'));
  links.certification.addEventListener('click', () => setActive('certification'));
  links.connect.addEventListener('click', () => setActive('connect'));

  // Show only About initially
  setActive('about');
