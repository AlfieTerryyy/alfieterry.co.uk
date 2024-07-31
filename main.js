// Array of background colors for animation
const colors = ["#fff3cd", "#f8d7da", "#d4edda", "#d1ecf1", "#f5c6cb"];
let index = 0;

// Change the background color every 4 seconds
setInterval(() => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
}, 4000);

// Wait for the DOM to be ready
$(document).ready(function() {
    // Apply saved theme on page load
    applySavedTheme();

    // Text color change on hover using jQuery
    $('.container p').hover(
        function() {
            $(this).css('color', '#e63946');
        },
        function() {
            $(this).css('color', '#333');
        }
    );

    // Text shadow animation on hover using jQuery
    $('.container h1').hover(
        function() {
            $(this).css('text-shadow', '0 0 20px #e63946');
        },
        function() {
            $(this).css('text-shadow', 'none');
        }
    );

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Toggle dark/light mode
    $('#theme-toggle').on('click', function() {
        $('body').toggleClass('dark-mode');
        saveThemePreference();
    });

    // Animate logo on hover
    $('.logo img').hover(
        function() {
            $(this).css('transform', 'rotate(360deg)');
        },
        function() {
            $(this).css('transform', 'rotate(0deg)');
        }
    );

    // Show a notification on page load
    showNotification("Welcome to The Terrance Territory!");

    // Update the footer year dynamically
    updateFooterYear();

    // Scroll progress bar
    $(window).on('scroll', function() {
        const scrollTop = $(window).scrollTop();
        const docHeight = $(document).height();
        const winHeight = $(window).height();
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        $('#scroll-progress').width(scrollPercent + '%');
    });
});

// Show a notification with a message
function showNotification(message) {
    const notification = $('<div>', {
        id: 'notification',
        text: message
    }).appendTo('body');

    setTimeout(() => {
        notification.fadeOut(400, function() {
            $(this).remove();
        });
    }, 4000);
}

// Update the footer year dynamically
function updateFooterYear() {
    const year = new Date().getFullYear();
    $('#current-year').text(year);
}

// Save the current theme preference to localStorage
function saveThemePreference() {
    if ($('body').hasClass('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Apply the saved theme preference
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        $('body').addClass('dark-mode');
    } else {
        $('body').removeClass('dark-mode');
    }
}
        function toggleNavbar() {
            const navbar = document.getElementById('navbar');
            const displayStyle = window.getComputedStyle(navbar).display;
            navbar.style.display = (displayStyle === 'none' || displayStyle === '') ? 'flex' : 'none';
        }

        window.addEventListener('resize', function() {
            const navbar = document.getElementById('navbar');
            if (window.innerWidth > 768) {
                navbar.style.display = 'flex';
            } else {
                navbar.style.display = 'none';
            }
        });

        // Initial setup to ensure correct display on page load
        window.addEventListener('load', function() {
            const navbar = document.getElementById('navbar');
            if (window.innerWidth > 768) {
                navbar.style.display = 'flex';
            } else {
                navbar.style.display = 'none';
            }
        });
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

