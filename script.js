document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a nav link
        document.querySelectorAll('.nav-menu li a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Rest of your existing JavaScript...
});

 // Feature item hover effect (only on home page)
 const featureItems = document.querySelectorAll('.feature-item');
 
 featureItems.forEach(item => {
     item.addEventListener('mouseover', function() {
         featureItems.forEach(i => i.classList.remove('active'));
         this.classList.add('active');
     });
 });