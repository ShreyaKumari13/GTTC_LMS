document.addEventListener("DOMContentLoaded", function() {
    const userLogos = document.querySelectorAll('.user-logo');
    userLogos.forEach(logo => {
        const username = logo.getAttribute('data-username');
        if (username) {
            const firstLetter = username.charAt(0).toUpperCase();
            logo.textContent = firstLetter;
        }
    });
});
