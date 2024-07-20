//needs JQuary Library
    // Array of background colors for animation
    const colors = ["#f8d7da", "#fff3cd", "#d4edda", "#d1ecf1", "#f5c6cb"];
    let index = 0;

    // Change the background color every 5 seconds
    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 5000);

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

        // Change header background on scroll
        window.addEventListener('scroll', function () {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(0, 34, 68, 0.8)'; // dark blue with transparency
            } else {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'; // semi-transparent white
            }
        });

        // Change footer background when scrolling to the bottom
        window.addEventListener('scroll', function () {
            const footer = document.querySelector('footer');
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                footer.style.backgroundColor = 'rgba(0, 34, 68, 0.8)'; // dark blue with transparency
            } else {
                footer.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'; // semi-transparent white
            }
        });
    });
