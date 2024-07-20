// Array of background colors for animation
const colors = ["#fff3cd", "#f8d7da", "#d4edda", "#d1ecf1", "#f5c6cb"];
let index = 0;

// Change the background color every 4 seconds
setInterval(() => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
}, 4000);

// Wait for the DOM to be ready
$(document).ready(function(){
    // Text color change on hover using jQuery
    $('.container p').hover(function(){
        $(this).css('color', '#e63946');
    }, function(){
        $(this).css('color', '#333');
    });

    // Text shadow animation on hover using jQuery
    $('.container h1').hover(function(){
        $(this).css('text-shadow', '0 0 20px #e63946');
    }, function(){
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
function redirectToMobileVersion() {
    // Function to check if the device is mobile
    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Check if the device is mobile
    if (isMobileDevice()) {
        // Get the current URL
        var currentUrl = window.location.href;

        // Define the base URL and target URL
        var baseUrl = 'https://alfieterry.co.uk/';
        var targetUrl = 'https://alfieterry.co.uk/indexm';

        // Check if the current URL is exactly the base URL
        if (currentUrl === baseUrl || currentUrl === baseUrl + '#') {
            // Redirect to the target URL
            window.location.href = targetUrl;
        }
    }
}

// Call the function to check and possibly redirect
redirectToMobileVersion();
