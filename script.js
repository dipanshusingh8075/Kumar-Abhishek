// ================================
// Kumar Abhishek Portfolio JS
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // Mobile Menu
    // ================================

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", function () {
            nav.classList.toggle("open");
            menuBtn.classList.toggle("active");

            // Change hamburger icon
            if (nav.classList.contains("open")) {
                menuBtn.innerHTML = "✕";
            } else {
                menuBtn.innerHTML = "☰";
            }
        });

        // Close menu after clicking any navigation link
        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");
                menuBtn.classList.remove("active");
                menuBtn.innerHTML = "☰";
            });
        });
    }


    // ================================
    // Smooth Scrolling
    // ================================

    const allLinks = document.querySelectorAll('a[href^="#"]');

    allLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ================================
    // Header Scroll Effect
    // ================================

    const header = document.querySelector(".site-header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }


    // ================================
    // Scroll Reveal Animation
    // ================================

    const revealElements = document.querySelectorAll(
        ".section, .expertise-card, .timeline-item, .education-grid article, .cert-grid article, .reveal"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(function (element) {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }


    // ================================
    // Current Year
    // ================================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
