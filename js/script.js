// Dark Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded!'); // This will help us debug
    
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        console.log('Theme toggle button found!'); // Debug message
        
        themeToggle.addEventListener('click', function() {
            console.log('Button clicked!'); // Debug message
            
            // Toggle dark mode class on body
            document.body.classList.toggle('dark-mode');
            
            // Update button text and style
            if (document.body.classList.contains('dark-mode')) {
                themeToggle.textContent = ' Light Mode';
                themeToggle.classList.remove('btn-primary');
                themeToggle.classList.add('btn-light');
                console.log('Switched to dark mode'); // Debug message
            } else {
                themeToggle.textContent = ' Dark Mode';
                themeToggle.classList.remove('btn-light');
                themeToggle.classList.add('btn-primary');
                console.log('Switched to light mode'); // Debug message
            }
        });
    } else {
        console.log('Theme toggle button NOT found!'); // Debug message
    }
});