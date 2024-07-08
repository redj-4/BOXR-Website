document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const navLink = document.querySelectorAll(".nav-menu li a");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
});

// Rest of your existing JavaScript...

 // Feature item hover effect (only on home page)
 const featureItems = document.querySelectorAll('.feature-item');
 
 featureItems.forEach(item => {
     item.addEventListener('mouseover', function() {
         featureItems.forEach(i => i.classList.remove('active'));
         this.classList.add('active');
     });
 });