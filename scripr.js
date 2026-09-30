// ================================
// Kumar Abhishek Portfolio JS
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // Mobile Menu
    // ================================

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        // Close menu after clicking a link
        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
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

    const header = document.querySelector("header");

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
        ".section, .experience-card, .skill-card, .reveal"
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

    const yearElements = document.querySelectorAll("[data-year]");

    yearElements.forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });

});