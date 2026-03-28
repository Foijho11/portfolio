/* 1. NAVBAR SCROLL EFFECT */
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

/* 2. DARK MODE TOGGLE */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    
    icon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

/* 3. SMOOTH REVEAL ANIMATION */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Stop observing once revealed to save resources
            revealObserver.unobserve(entry.target); 
        }
    });
}, { threshold: 0.15 });

// Apply 'reveal' class and observe elements
document.querySelectorAll('.project-card, .skill-box, .footer-box').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});