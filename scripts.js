document.addEventListener("DOMContentLoaded", function() {
    // Hamburger menu toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");
    
    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
                navMenu.classList.remove("active");
            }
        });
    });

    // Scroll animations (fade-in effect)
    const fadeInElements = document.querySelectorAll(".fade-in");
    
    function handleScroll() {
        fadeInElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                el.classList.add("visible");
            }
        });
    }
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Minimal loading animation
    window.addEventListener("load", function() {
        document.querySelector(".loading-spinner").style.display = "none";
    });
});
