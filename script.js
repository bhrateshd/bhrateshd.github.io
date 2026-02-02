document.addEventListener("DOMContentLoaded", function() {
    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Update copyright year
    const yearSpan = document.querySelector(".current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scroll for navigation
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Active navigation highlighting
    function updateActiveNavigation() {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".main-nav a");

        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll(".section").forEach(section => {
        observer.observe(section);
    });

    // Handle scroll events
    let lastScrollTop = 0;
    const nav = document.querySelector(".main-nav");

    window.addEventListener("scroll", () => {
        // Update active navigation
        updateActiveNavigation();

        // Handle navigation bar visibility
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            nav.style.transform = "translateY(-100%)";
        } else {
            // Scrolling up
            nav.style.transform = "translateY(0)";
        }
        
        if (scrollTop < 50) {
            // At the top
            nav.style.transform = "translateY(0)";
            nav.style.background = "var(--nav-bg)";
        } else {
            // Not at the top
            nav.style.background = "var(--nav-bg)";
            nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }

        lastScrollTop = scrollTop;
    });

    // Initialize animations
    document.body.classList.add("loaded");
});
