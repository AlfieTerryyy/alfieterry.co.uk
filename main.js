
/* Smooth Scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Change header background on scroll */
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#002244';
    } else {
        header.style.backgroundColor = '#003366';
    }
});

/* Footer background change on scroll to bottom */
window.addEventListener('scroll', function () {
    const footer = document.querySelector('footer');
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        footer.style.backgroundColor = '#002244';
    } else {
        footer.style.backgroundColor = '#003366';
    }
});
