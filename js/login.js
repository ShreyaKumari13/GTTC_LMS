function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Default credentials
    const defaultEmail = "admin@example.com";
    const defaultPassword = "admin123";

    if (email === defaultEmail && password === defaultPassword) {
        window.location.href = "dashboard.html"; // Redirect to dashboard
        return false; // Prevent form submission
    } else {
        alert("Incorrect email or password. Please try again.");
        return false; // Prevent form submission
    }
}

function togglePassword() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eye');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.classList.remove('bx-show-alt');
        eyeIcon.classList.add('bx-hide');
    } else {
        passwordField.type = 'password';
        eyeIcon.classList.remove('bx-hide');
        eyeIcon.classList.add('bx-show-alt');
    }
}