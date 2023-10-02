// Get references to the button and form elements
const reportButton = document.getElementById('reportButton');
const contactForm = document.getElementById('contactForm');

// Add a click event listener to the "Report" button
reportButton.addEventListener('click', () => {
    // Toggle the visibility of the contact form
    if (contactForm.style.display === 'none' || contactForm.style.display === '') {
        contactForm.style.display = 'block'; // Show the form
    } else {
        contactForm.style.display = 'none'; // Hide the form
    }
});