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

    function revealCards() {
        programCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight - 50) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    }

    // Initialize opacity & position
    programCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.5s ease-in-out";
    });

    // Trigger animation on scroll
    window.addEventListener("scroll", revealCards);
});

