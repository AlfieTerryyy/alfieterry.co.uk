document.addEventListener('DOMContentLoaded', function() {
    const headerFile = /Mobi|Android/i.test(navigator.userAgent) ? 'mheader.html' : 'header.html';
    
    fetch(headerFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});
