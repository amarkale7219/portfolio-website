const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}));

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const html = document.documentElement;

        if (html.getAttribute('data-theme') === 'light') {
            html.removeAttribute('data-theme');
            themeToggle.classList.remove('fa-sun');
            themeToggle.classList.add('fa-moon');
        } else {
            html.setAttribute('data-theme', 'light');
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
        }
    });
}

// Active Link highlighting on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});

// Form Submission (Prevent default for demo)
const form = document.getElementById('form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully! (This is a demo)');
        form.reset();
    });
}

// Reveal animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add initial classes for animation
const animElements = document.querySelectorAll('.card, .skill, .timeline-item, .project-card, .info-item, .contact-form, .section-title, .stat-card');
animElements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});
