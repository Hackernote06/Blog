(function () {
    function toggleTheme() {
        const body = document.body;
        const themeToggle = document.getElementById('theme-toggle');

        // Toggle themes
        body.classList.toggle('dark-theme');
        themeToggle.classList.toggle('dark-theme');

        // Update button text
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = '☀️ Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = '🌙 Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    }

    function applyTheme() {
        const savedTheme = localStorage.getItem('theme');
        const body = document.body;
        const themeToggle = document.getElementById('theme-toggle');

        if (savedTheme === 'dark') {
            body.classList.add('dark-theme');
            themeToggle.textContent = '☀️ Light Mode';
        } else {
            body.classList.remove('dark-theme');
            themeToggle.textContent = '🌙 Dark Mode';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        // Apply the saved theme
        applyTheme();

        // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }

        // Scroll-to-top functionality
        const scrollToTopButton = document.getElementById('scroll-to-top');
        if (scrollToTopButton) {
            // Show/hide button on scroll
            window.addEventListener('scroll', () => {
                if (window.scrollY > 200) {
                    scrollToTopButton.classList.add('show');
                } else {
                    scrollToTopButton.classList.remove('show');
                }
            });

            // Smooth scroll to top
            scrollToTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            });
        }
    });
})();
