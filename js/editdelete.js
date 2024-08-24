document.addEventListener('DOMContentLoaded', function() {
    // Edit button functionality
    document.querySelectorAll('.edit').forEach(button => {
        button.addEventListener('click', function() {
            const subject = this.dataset.subject;
            const type = this.dataset.type;
            const course = this.dataset.course;
            const description = this.dataset.description;

            // Redirect to edit page with subject details
            window.location.href = `./edpage.html?subject=${subject}&type=${type}&course=${course}&description=${description}`;
        });
    });

    // Delete button functionality
    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', function() {
            const subjectCard = this.closest('.user-card');
            subjectCard.remove();
        });
    });
});

