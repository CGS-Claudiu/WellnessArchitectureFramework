// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all collapsible headers
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

    // Add click event listener to each header
    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', function(e) {
            // Prevent any default behavior
            e.preventDefault();
            
            // Get the parent section
            const section = this.closest('.collapsible-section');
            
            // Toggle the active class
            section.classList.toggle('active');
            
            // Get the content div
            const content = section.querySelector('.collapsible-content');
            
            // Toggle the display of the content
            if (section.classList.contains('active')) {
                content.style.display = 'block';
                // Optional: Add smooth animation
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.display = 'none';
                // Optional: Reset maxHeight for animation
                content.style.maxHeight = '0';
            }
        });

        // Add touch event listeners for better mobile support
        header.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Prevent default touch behavior
        });

        header.addEventListener('touchend', function(e) {
            e.preventDefault();
            header.click(); // Trigger the click event
        });
    });
});