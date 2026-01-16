document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const cards = document.querySelectorAll('.feature-card');
    const title = document.getElementById('main-title');

    // Header scroll background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 11, 16, 0.95)';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(10, 11, 16, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // Simple reveal animation for cards
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for reveal animation
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // trigger once on load

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for hero content
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        title.style.transform = `translateY(${scrolled * 0.2}px)`;
    });
});
