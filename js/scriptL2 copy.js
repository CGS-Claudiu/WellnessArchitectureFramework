document.addEventListener('DOMContentLoaded', () => {
    console.log("Page loaded: Ensuring collapsible functionality");

    // Ensure collapsible sections work for both click and touch events
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', toggleCollapsible);
        header.addEventListener('touchstart', toggleCollapsible); // For iOS devices
    });

    function toggleCollapsible(event) {
        const section = event.target.closest('.collapsible-section');
        const content = section.querySelector('.collapsible-content');

        // Toggle the active class
        section.classList.toggle('active');

        // Adjust visibility of the collapsible content
        if (section.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = "0";
        }
    }

    // Initialize active sections (if any) to expanded state
    document.querySelectorAll('.collapsible-section.active .collapsible-content').forEach(content => {
        content.style.maxHeight = content.scrollHeight + "px";
    });
});
