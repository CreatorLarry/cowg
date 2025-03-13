document.addEventListener("scroll", function () {
    let navbar = document.querySelector(".custom-navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#heroCarousel");
    carousel.addEventListener("slid.bs.carousel", function () {
        console.log("Slide changed!");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Scroll Fade-in Animation
    const fadeInElements = document.querySelectorAll(".fade-in");

    const fadeInOnScroll = () => {
        fadeInElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();

    // Counter Animation
    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = target / 100;

        const updateCounter = () => {
            count += increment;
            counter.innerText = Math.floor(count);
            if (count < target) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    };

    const startCounters = () => {
        counters.forEach((counter) => {
            animateCounter(counter);
        });
    };

    let counterStarted = false;
    const counterSection = document.querySelector(".impact-stats");

    window.addEventListener("scroll", () => {
        const rect = counterSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && !counterStarted) {
            startCounters();
            counterStarted = true;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const programCards = document.querySelectorAll(".program-card");

    function revealOnScroll() {
        programCards.forEach((card) => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardPosition < windowHeight * 0.85) {
                card.classList.add("fade-in");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on page load
});


document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightboxContainer = document.getElementById('lightbox-container');
    const lightboxImage = document.getElementById('lightbox-image');
    let currentIndex = 0;

    // Open Lightbox
    function openLightbox(index) {
        currentIndex = index;
        if (galleryImages[currentIndex]) {
            lightboxImage.src = galleryImages[currentIndex].src;
            lightboxContainer.style.display = 'flex';
        }
    }

    // Close Lightbox
    function closeLightbox() {
        lightboxContainer.style.display = 'none';
    }

    // Change Image (Next/Previous)
    function changeImage(step) {
        let newIndex = currentIndex + step;
        if (newIndex < 0) newIndex = galleryImages.length - 1; // Loop to last image
        if (newIndex >= galleryImages.length) newIndex = 0; // Loop to first image
        openLightbox(newIndex);
    }

    // Attach event listeners
    galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => openLightbox(index));
    });

    document.querySelector(".close-btn").addEventListener("click", closeLightbox);
    document.querySelector(".prev-btn").addEventListener("click", () => changeImage(-1));
    document.querySelector(".next-btn").addEventListener("click", () => changeImage(1));

    // Close Lightbox when clicking outside the image
    lightboxContainer.addEventListener('click', function (e) {
        if (e.target === this) closeLightbox();
    });

    // Prevent Lightbox from opening on page load
    lightboxContainer.style.display = "none";
});


// Nav bar scroll
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function highlightActiveSection() {
        let scrollY = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 80;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach((link) => link.classList.remove("active"));
                document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add("active");
            }
        });
    }

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        highlightActiveSection();
    }

    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    // Close navbar when clicking outside it
    document.addEventListener("click", function (event) {
        if (
            navbarCollapse.classList.contains("show") && // If menu is open
            !navbarToggler.contains(event.target) && // Not clicking toggle button
            !navbarCollapse.contains(event.target) // Not clicking inside menu
        ) {
            navbarToggler.click(); // Programmatically close the menu
        }
    });

    // Close navbar when clicking a nav-link
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                navbarToggler.click();
            }
        });
    });
});


function sendMail(event) {
    event.preventDefault(); // Prevent actual form submission

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Construct the email body with line breaks
    let subject = `New Contact Form Message from ${name}`;
    let body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    // Open default email client
    window.location.href = `mailto:info@watergovernance.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}



