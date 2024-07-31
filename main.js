// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    saveThemePreference();
}

// Save theme preference to localStorage
function saveThemePreference() {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Apply saved theme preference on page load
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
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
    showNotification("Welcome to The Terrance Territory!");

    document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);

    window.addEventListener('scroll', updateScrollProgress);
});
