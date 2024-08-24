// Add this script at the end of your HTML or in a separate JS file linked at the end of the body tag
const buttons = document.querySelectorAll(".btn"); // Select all buttons
        
buttons.forEach(button => {
    button.addEventListener("click", function() {
        buttons.forEach(btn => btn.classList.remove("active")); // Remove active class from all buttons
        this.classList.add("active"); // Add active class to the clicked button
    });
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});
