document.addEventListener('DOMContentLoaded', function() {
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
    
    // Initialize sections - ensure active sections are visible immediately
    document.querySelectorAll('.collapsible-section').forEach(section => {
        const content = section.querySelector('.collapsible-content');
        if (section.classList.contains('active')) {
            content.style.display = 'block';
            // Set initial max-height to accommodate content
            content.style.maxHeight = 'none';
        }
    });

    // Add click handlers
    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.closest('.collapsible-section');
            const content = section.querySelector('.collapsible-content');

            // Toggle active state
            section.classList.toggle('active');

            // Handle animation
            if (section.classList.contains('active')) {
                content.style.display = 'block';
                // Use setTimeout to ensure display: block has taken effect
                setTimeout(() => {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }, 0);
            } else {
                content.style.maxHeight = '0';
                // Wait for animation to complete before hiding
                content.addEventListener('transitionend', function hide() {
                    if (!section.classList.contains('active')) {
                        content.style.display = 'none';
                    }
                    content.removeEventListener('transitionend', hide);
                });
            }
        });

        // Mobile support
        header.addEventListener('touchstart', function(e) {
            e.preventDefault();
        });

        header.addEventListener('touchend', function(e) {
            e.preventDefault();
            header.click();
        });
    });
});