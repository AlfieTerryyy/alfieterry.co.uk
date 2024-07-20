// Array of background colors for animation
const colors = ["#fff3cd", "#f8d7da", "#d4edda", "#d1ecf1", "#f5c6cb"];
let index = 0;

// Change the background color every 5 seconds
setInterval(() => {
    document.body.style.transition = 'background-color 1s ease'; // Smooth transition
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
}, 5000);

// Wait for the DOM to be ready
$(document).ready(function(){
    // Text color change on hover using jQuery, with touch support
    $('.container p').on('mouseenter touchstart', function(){
        $(this).css('color', '#e63946');
    }).on('mouseleave touchend', function(){
        $(this).css('color', '#333');
    });

    // Text shadow animation on hover using jQuery, with touch support
    $('.container h1').on('mouseenter touchstart', function(){
        $(this).css('text-shadow', '0 0 20px #e63946');
    }).on('mouseleave touchend', function(){
        $(this).css('text-shadow', 'none');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Change header and footer background on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Adjust opacity based on scroll position for a dynamic effect
    if (window.scrollY > 50) {
        header.style.transition = 'background-color 0.3s'; // Smooth transition
        footer.style.transition = 'background-color 0.3s'; // Smooth transition
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        footer.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        footer.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    }
});


