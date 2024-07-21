      document.addEventListener('DOMContentLoaded', function() {
        fetch('tags.html')
          .then(response => response.text())
          .then(data => {
            document.getElementById('tags').innerHTML = data;
          })
          .catch(error => console.error('Error loading tags:', error));
      });
