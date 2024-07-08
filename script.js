document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-menu li a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Rest of your existing JavaScript...
});

// Form submission
const contactForm = document.getElementById('contact-form');
    
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        console.log('Form submitted with data:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}
;

 // Set active nav link based on current page
 const currentPage = window.location.pathname.split('/').pop();
 const navLinks = document.querySelectorAll('nav ul li a');

 navLinks.forEach(link => {
     if (link.getAttribute('href') === currentPage) {
         link.classList.add('active');
     }
 });

 // Feature item hover effect (only on home page)
 const featureItems = document.querySelectorAll('.feature-item');
 
 featureItems.forEach(item => {
     item.addEventListener('mouseover', function() {
         featureItems.forEach(i => i.classList.remove('active'));
         this.classList.add('active');
     });
 });