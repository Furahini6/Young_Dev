document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;

        // Simple validation
        if (name === '' || email === '' || date === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Process the form (e.g., send data to a server or show a message)
        alert(`Appointment request submitted!\nName: ${name}\nEmail: ${email}\nPreferred Date: ${date}`);

        // Optionally clear the form
        form.reset();
    });
});
