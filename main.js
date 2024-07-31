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

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();
    updateFooterYear();

    window.addEventListener('scroll', updateScrollProgress);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        const newColorScheme = event.matches ? 'dark' : 'light';
        document.body.classList.toggle('dark-mode', newColorScheme === 'dark');
        saveThemePreference(newColorScheme);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function adjustFooter() {
        const body = document.body;
        const html = document.documentElement;
        const footer = document.querySelector('footer');

        // Calculate the total height of the document
        const documentHeight = Math.max(
            body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight
        );
        
        // Set the minimum height of the content to the viewport height
        const viewportHeight = window.innerHeight;
        const content = document.querySelector('.content');
        if (documentHeight < viewportHeight) {
            content.style.minHeight = `${viewportHeight - footer.offsetHeight}px`;
        } else {
            content.style.minHeight = 'auto';
        }
    }

    // Adjust footer on page load and resize
    adjustFooter();
    window.addEventListener('resize', adjustFooter);
});
