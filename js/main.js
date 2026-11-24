// JS scripts placed here

// tutorial for navbar with hamburger

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu')

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// End navbar



document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel-wrapper");

    carousels.forEach(function (carousel) {
        const track = carousel.querySelector(".carousel-track");
        const cards = Array.from(track.querySelectorAll(".carousel-card"));
        const previousButton = carousel.querySelector(".carousel-prev");
        const nextButton = carousel.querySelector(".carousel-next");

        // Keep desktop arrows working
        nextButton.addEventListener("click", function () {
            track.scrollBy({
                left: track.clientWidth * 0.8,
                behavior: "smooth"
            });
        });

        previousButton.addEventListener("click", function () {
            track.scrollBy({
                left: -track.clientWidth * 0.8,
                behavior: "smooth"
            });
        });

        // Create mobile navigation dots
        const dotsContainer = document.createElement("div");
        dotsContainer.classList.add("carousel-dots");
        carousel.insertAdjacentElement("afterend", dotsContainer);

        const dots = cards.map(function (card, index) {
            const dot = document.createElement("button");
            dot.classList.add("carousel-dot");
            dot.setAttribute("aria-label", "Go to announcement " + (index + 1));

            dot.addEventListener("click", function () {
                const position = card.getBoundingClientRect().left -
                    track.getBoundingClientRect().left + track.scrollLeft;

                track.scrollTo({
                    left: position,
                    behavior: "smooth"
                });
            });

            dotsContainer.appendChild(dot);
            return dot;
        });

        // Update active dot while scrolling
        function updateDots() {
            const trackCenter = track.getBoundingClientRect().left +
                track.clientWidth / 2;

            let activeIndex = 0;
            let closestDistance = Infinity;

            cards.forEach(function (card, index) {
                const cardCenter = card.getBoundingClientRect().left +
                    card.clientWidth / 2;
                const distance = Math.abs(trackCenter - cardCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    activeIndex = index;
                }
            });

            dots.forEach(function (dot, index) {
                dot.classList.toggle("active", index === activeIndex);
            });
        }

        track.addEventListener("scroll", updateDots);
        updateDots();
    });
});
