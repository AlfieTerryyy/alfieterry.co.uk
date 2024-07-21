$(document).ready(function() {
    // Apply saved theme on page load
    applySavedTheme();

    // Apply mobile-specific styles if on a mobile device
    if (isMobileDevice()) {
        applyMobileStyles();
    }

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

    // Toggle mobile navigation panel
    $('.hamburger-menu').on('click', function() {
        $('.nav-panel').addClass('open');
    });

    // Close mobile navigation panel
    $('.close-panel').on('click', function() {
        $('.nav-panel').removeClass('open');
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

// Check if the user is on a mobile device
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Apply mobile-specific styles
function applyMobileStyles() {
    // Example: Adjust font sizes and layout for mobile
    $('body').css({
        'font-size': '16px',
        'padding': '10px'
    });

    $('.container').css({
        'margin': '0 auto',
        'padding': '10px'
    });

    // Hide elements that are not mobile-friendly
    $('.desktop-only').hide();
    $('.mobile-only').show();
}
