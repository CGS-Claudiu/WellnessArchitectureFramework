document.addEventListener('DOMContentLoaded', () => {
    console.log("Page loaded: Ensuring collapsible functionality");

    // Ensure only sections with the 'active' class are expanded on load
    document.querySelectorAll('.collapsible-section').forEach(section => {
        if (!section.classList.contains('active')) {
            section.querySelector('.collapsible-content').style.display = 'none';
        }
    });

    // Add click event listeners to toggle collapsible sections
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', () => {
            const section = header.parentElement;
            const content = section.querySelector('.collapsible-content');
            const arrowIcon = header.querySelector('.arrow-icon');

            // Toggle the active class
            section.classList.toggle('active');

            // Adjust visibility of the collapsible content
            if (section.classList.contains('active')) {
                content.style.display = 'block';
                arrowIcon.style.transform = 'rotate(180deg)'; // Arrow points down
            } else {
                content.style.display = 'none';
                arrowIcon.style.transform = 'rotate(0deg)'; // Arrow points right
            }
        });
    });
});
