document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", mobileMenu);

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }

        const navLinks = document.querySelectorAll(".nav-menu li a");
        navLinks.forEach(link => link.addEventListener("click", closeMenu));

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    }

    // Feature item hover effect (only on home page)
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            featureItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });

        item.addEventListener('mouseout', function() {
            this.classList.remove('active');
        });
    });

    // Course modal functionality
    const modal = document.getElementById("course-modal");
    const closeBtn = document.querySelector(".close");
    const viewDetailsBtns = document.querySelectorAll(".view-details-btn");

    const courseDetails = {
        beginners: {
            title: "Beginner's Boxing",
            description: "Learn the fundamentals of boxing in a supportive environment. This course covers basic techniques, footwork, and conditioning.",
            curriculum: [
                "Stance and footwork",
                "Basic punches: jab, cross, hook",
                "Defense techniques",
                "Conditioning and fitness",
                "Sparring introduction"
            ],
            enrollLink: "enroll-beginners.html"
        },
        intermediate: {
            title: "Intermediate Techniques",
            description: "Take your boxing skills to the next level. Focus on combination punches, advanced footwork, and strategic thinking.",
            curriculum: [
                "Complex combinations",
                "Advanced footwork patterns",
                "Counter-punching techniques",
                "Ring control and strategy",
                "Intensive sparring sessions"
            ],
            enrollLink: "enroll-intermediate.html"
        },
        advanced: {
            title: "Advanced Training",
            description: "Train like a professional boxer. This course emphasizes high-intensity workouts, advanced techniques, and competition preparation.",
            curriculum: [
                "Professional-level combinations",
                "Advanced defensive maneuvers",
                "Fight strategy and analysis",
                "Strength and conditioning",
                "Competition preparation"
            ],
            enrollLink: "enroll-advanced.html"
        }
    };

    if (modal && closeBtn && viewDetailsBtns.length > 0) {
        viewDetailsBtns.forEach(btn => {
            btn.addEventListener("click", function() {
                const course = this.closest('.course-card').dataset.course;
                const details = courseDetails[course];

                document.getElementById("modal-title").textContent = details.title;
                document.getElementById("modal-description").textContent = details.description;

                const curriculumList = document.getElementById("modal-curriculum");
                curriculumList.innerHTML = "";
                details.curriculum.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item;
                    curriculumList.appendChild(li);
                });

                const enrollLink = document.getElementById("enroll-link");
                if (enrollLink) {
                    enrollLink.href = details.enrollLink;
                }

                modal.style.display = "block";
            });
        });

        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Enroll button functionality
        const enrollLink = document.getElementById("enroll-link");
        if (enrollLink) {
            enrollLink.addEventListener('click', function(e) {
                e.preventDefault();
                window.open(this.href, '_blank');
            });
        }
    }

    // Newsletter subscription functionality
    const newsletterForm = document.querySelector('form[action="#"]');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
});