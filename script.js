document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  const siteHeader = document.getElementById("siteHeader");
  const yearSpan = document.getElementById("year");
  const navLinks = document.querySelectorAll(".nav-link, .nav-cta");

  // Dynamic Current Year
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mobile Menu Toggle
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when clicking link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu on outside click
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Header background blur effect on scroll
  const handleScroll = () => {
    if (!siteHeader) return;
    if (window.scrollY > 30) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Smooth scroll offset adjustment for fixed navbar
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        const headerOffset = siteHeader ? siteHeader.offsetHeight + 30 : 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Smooth scroll to top for backToTop button
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
