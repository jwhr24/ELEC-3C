document.addEventListener('DOMContentLoaded', function () {
    const exitIcon = document.getElementById('exit-icon');
    const navList = document.getElementById('nav-list');
    const overlay = document.getElementById('overlay');

    // Add a delay before showing the navbar
    setTimeout(function () {
        document.querySelector('.navbar').classList.add('show');
    }, 500); // 1.5 seconds delay

    // Add smooth transitions for navList, overlay, and exit icon
    navList.style.transition = 'transform 0.5s ease';
    overlay.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';

    overlay.addEventListener('click', function () {
        navList.classList.remove('show');
        overlay.classList.remove('show');
        exitIcon.classList.remove('show');
    });

    document.getElementById('menuicon').addEventListener('click', function() {
        this.classList.toggle('change'); // Toggles the change class to animate the icon
        document.getElementById('nav-list').classList.toggle('show'); // Toggles the visibility of the nav list
    });
    
});
