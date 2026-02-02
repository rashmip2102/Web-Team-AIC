document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('py-3', 'bg-slate-950/80', 'border-cyan-500/20');
            nav.classList.remove('py-4', 'bg-transparent');
        } else {
            nav.classList.add('py-4', 'bg-transparent');
            nav.classList.remove('py-3', 'bg-slate-950/80', 'border-cyan-500/20');
        }
    });

    // 2. Mobile Menu Logic (If you add a hamburger icon later)
    const toggleMenu = () => {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    };

    // 3. Simple Typing Effect for Hero Section
    const heroTitle = document.querySelector('h1 span');
    const phrases = ["Intelligence.", "Innovation.", "The Future."];
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;

    function loop() {
        const phrase = phrases[i];
        
        if (!isDeleting && j <= phrase.length) {
            heroTitle.innerHTML = phrase.substring(0, j);
            j++;
        }

        if (isDeleting && j <= phrase.length) {
            heroTitle.innerHTML = phrase.substring(0, j);
            j--;
        }

        if (j == phrase.length) {
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            isDeleting = false;
            i++;
            if (i === phrases.length) i = 0;
        }

        const spedUp = Math.random() * (80 - 50) + 50;
        const normalSpeed = Math.random() * (300 - 200) + 200;
        const time = isDeleting ? spedUp : normalSpeed;
        setTimeout(loop, time);
    }

    // Start typing effect
    // loop(); // Uncomment to activate typing effect

    // 4. Form Submission Handling (Preventing page reload)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thanks for reaching out! The AI Club will contact you soon.");
            contactForm.reset();
        });
    }
});