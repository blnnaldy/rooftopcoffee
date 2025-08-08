document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme on page load
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.textContent = 'Toggle Light Mode';
        } else {
            body.classList.remove('dark-mode');
            themeToggle.textContent = 'Toggle Dark Mode';
        }
    };

    // Function to toggle the theme
    const toggleTheme = () => {
        body.classList.toggle('dark-mode');

        // Save the new theme preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = 'Toggle Light Mode';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = 'Toggle Dark Mode';
        }
    };

    // Add event listener to the theme toggle button
    themeToggle.addEventListener('click', toggleTheme);

    // Apply the saved theme when the page loads
    applySavedTheme();
});
