   // Mobile Menu Functionality
      const mobileMenuButton = document.getElementById('mobileMenuButton');
      const mobileMenu = document.getElementById('mobileMenu');
      const closeMenu = document.getElementById('closeMenu');

      function openMobileMenu() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }

      mobileMenuButton.addEventListener('click', openMobileMenu);
      closeMenu.addEventListener('click', closeMobileMenu);

      // Close mobile menu when clicking on links
      document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
      });

      // Header scroll effect
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 100) {
          header.classList.add("shadow-md");
        } else {
          header.classList.remove("shadow-md");
        }
      });

      // Back to top button
      const backToTopButton = document.getElementById("backToTop");

      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.remove("opacity-0", "invisible");
          backToTopButton.classList.add("opacity-100", "visible");
        } else {
          backToTopButton.classList.remove("opacity-100", "visible");
          backToTopButton.classList.add("opacity-0", "invisible");
        }
      });

      backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      // Form submission
      document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
        this.reset();
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });

      // Scroll animation function
      function checkScroll() {
        const elements = document.querySelectorAll(
          ".fade-in, .slide-in-left, .slide-in-right, .zoom-in, .stagger-item"
        );

        elements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;

          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add("active");
          }
        });
      }

      // Initial check on page load
      window.addEventListener("load", checkScroll);

      // Check on scroll
      window.addEventListener("scroll", checkScroll);

      // Animate skill bars when they come into view
      const skillBars = document.querySelectorAll(".skill-progress");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const width = entry.target.style.width;
              entry.target.style.width = "0";
              setTimeout(() => {
                entry.target.style.width = width;
              }, 300);
            }
          });
        },
        { threshold: 0.3 }
      );

      skillBars.forEach((bar) => {
        observer.observe(bar);
      });

      // Add typing effect to hero text
      const heroTitle = document.querySelector(".hero h1");
      if (heroTitle) {
        heroTitle.classList.add("typewriter");
      }