document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Clear previous errors
    clearErrors();

    // Validate form fields
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value.trim() === '') {
        showError('name', 'Name is required.');
        isValid = false;
    }

    if (email.value.trim() === '') {
        showError('email', 'Email is required.');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError('email', 'Email is invalid.');
        isValid = false;
    }

    if (message.value.trim() === '') {
        showError('message', 'Message is required.');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can submit the form or perform other actions
    }
});

function showError(fieldId, message) {
    document.getElementById(`${fieldId}-error`).textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
