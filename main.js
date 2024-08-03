document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();
    updateFooterYear();

    window.addEventListener('scroll', updateScrollProgress);

    document.querySelector('.menu-toggle').addEventListener('click', toggleNavbar);

    function adjustFooter() {
        const body = document.body;
        const html = document.documentElement;
        const footer = document.querySelector('footer');
        const documentHeight = Math.max(
            body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight
        );
        const viewportHeight = window.innerHeight;
        const content = document.querySelector('main');
        if (documentHeight < viewportHeight) {
            content.style.minHeight = `${viewportHeight - footer.offsetHeight}px`;
        } else {
            content.style.minHeight = 'auto';
        }
    }

    adjustFooter();
    window.addEventListener('resize', adjustFooter);

    // Initialize animation for wolfy
    document.getElementById('animated-image').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('wolfy-msg').style.display = 'block';

    const audio = new Audio('audio/welcome.mp3');
    audio.play();

    setTimeout(() => {
        document.getElementById('animated-image').style.animation = 'none';
        document.getElementById('animated-image').src = 'img/wolfyopen.png';
        setTimeout(() => {
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('wolfy-msg').style.display = 'none';
        }, 2000); // Delay to show the open image before hiding
    }, 3000); // Duration of spin animation
});

// Save theme preference to localStorage
function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

// Apply saved theme preference on page load
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('dark-mode', prefersDark);
        saveThemePreference(prefersDark ? 'dark' : 'light');
    }
}

// Update footer year dynamically
function updateFooterYear() {
    const year = new Date().getFullYear();
    document.getElementById('current-year').textContent = year;
}

// Scroll progress bar functionality
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    document.getElementById('scroll-progress').style.width = scrollPercent + '%';
}

// Navbar toggle functionality
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
}
