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
function redirectBasedOnDevice() {
    // Function to check if the device is mobile
    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Function to normalize URLs (remove trailing slashes)
    function normalizeUrl(url) {
        return url.replace(/\/$/, '');
    }

    // Define the base URL and target URLs
    var baseUrl = 'https://alfieterry.co.uk/';
    var mobileTargetUrl = 'https://alfieterry.co.uk/indexm';
    
    // Get the current URL
    var currentUrl = window.location.href;
    var normalizedCurrentUrl = normalizeUrl(currentUrl);

    // Check if the device is mobile
    if (isMobileDevice()) {
        // Redirect to the mobile version if at the base URL
        if (normalizedCurrentUrl === baseUrl) {
            window.location.href = mobileTargetUrl;
        }
    } else {
        // For non-mobile devices (PC), remove trailing 'm' if present
        if (normalizedCurrentUrl === mobileTargetUrl) {
            window.location.href = baseUrl;
        }
    }
}

// Call the function to check and possibly redirect
redirectBasedOnDevice();



