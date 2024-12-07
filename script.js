// Example JavaScript functionality for future interactive components
document.addEventListener('DOMContentLoaded', () => {
    console.log("Wellness Architecture Framework page loaded");
    // Add any interactive features here, such as popups or navigation animations.
});

function showTabContent(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Show selected tab content and add active class to the button
    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`[onclick="showTabContent('${tabId}')"]`).classList.add('active');
}

// Initialize the first tab to be displayed
document.addEventListener('DOMContentLoaded', () => {
    showTabContent('lifestyle'); // Display the 'insights' tab by default
});

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navigation');
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const headerHeight = header.offsetHeight;
        if (window.scrollY > headerHeight) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

