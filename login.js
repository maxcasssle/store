document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === '' || password === '') {
        displayMessage('Please fill in both fields.');
        return;
    }

    authenticateUser(username, password)
        .then(response => {
            if (response.success) {
                displayMessage('Login successful!', 'green');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000); 
            } else {
                displayMessage('Invalid username or password.');
            }
        })
        .catch(error => {
            displayMessage('An error occurred. Please try again.');
            console.error('Error:', error);
        });
});

function displayMessage(message, color = 'red') {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
}

function authenticateUser(username, password) {
    // This is a simulated function. Replace it with actual API call.
    return new Promise((resolve) => {
        setTimeout(() => {
            if (username === 'user' && password === 'pass') {
                resolve({ success: true });
            } else {
                resolve({ success: false });
            }
        }, 1000);
    });
}
