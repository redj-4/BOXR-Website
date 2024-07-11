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
});

document.addEventListener('DOMContentLoaded', function() {
    // ... (keep existing code)

    const modal = document.getElementById("course-modal");
    const closeBtn = document.getElementsByClassName("close")[0];
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
            ]
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
            ]
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
            ]
        }
    };

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
});