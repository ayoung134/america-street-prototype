// JS scripts placed here


/* =================================
   IMAGE CAROUSEL
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const carousels = document.querySelectorAll(".carousel-wrapper");

    carousels.forEach(function (carousel) {

        const track = carousel.querySelector(".carousel-track");
        const previousButton = carousel.querySelector(".carousel-prev");
        const nextButton = carousel.querySelector(".carousel-next");

        // Move to the next images
        nextButton.addEventListener("click", function () {

            track.scrollBy({
                left: track.clientWidth * 0.8,
                behavior: "smooth"
            });

        });

        // Move to the previous images
        previousButton.addEventListener("click", function () {

            track.scrollBy({
                left: -track.clientWidth * 0.8,
                behavior: "smooth"
            });

        });

    });

});
