document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        // Get the corresponding accordion content
        const content = button.nextElementSibling;

        // Toggle the "active" class on the button and content
        button.classList.toggle('active');
        
        if (button.classList.contains('active')) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
