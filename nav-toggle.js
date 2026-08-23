document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.nav-links');

    if (!navbar || !toggle || !links) {
        return;
    }

    const closeMenu = () => {
        navbar.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    links.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            closeMenu();
        }
    });

    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target)) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});