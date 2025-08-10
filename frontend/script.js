document.addEventListener('DOMContentLoaded', () => {
    fetch('http://127.0.0.1:3000')
        .then(response => response.text())
        .then(data => {
            document.getElementById('backend-message').innerText = data;
        })
        .catch(error => {
            console.error('Error fetching from backend:', error);
            document.getElementById('backend-message').innerText = 'Failed to load message from backend.';
        });
});
