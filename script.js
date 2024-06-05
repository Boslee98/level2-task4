const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password are valid
    if (username === 'admin' && password === 'password') {
        // Redirect to secured page
        window.location.href = 'secured.html';
    } else {
        alert('Invalid username or password');
    }
});