document.addEventListener('DOMContentLoaded', function() {
    const carouselContainers = document.querySelectorAll('.carousel-container');

    carouselContainers.forEach(container => {
        const carousel = container.querySelector('.carousel');
        const prevButton = container.querySelector('.carousel-button.prev');
        const nextButton = container.querySelector('.carousel-button.next');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const slideCount = slides.length;
        let currentIndex = 0;

        function updateCarousel() {
            const slideWidth = slides[0].offsetWidth;
            carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        function goToSlide(index) {
            if (index >= slideCount) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = slideCount - 1;
            } else {
                currentIndex = index;
            }
            updateCarousel();
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                goToSlide(currentIndex - 1);
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                goToSlide(currentIndex + 1);
            });
        }

        
        let touchStartX = null;
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchend', (e) => {
            if (touchStartX === null) {
                return;
            }

            const touchEndX = e.changedTouches[0].clientX;
            const deltaX = touchStartX - touchEndX;

            if (deltaX > 50) {
                goToSlide(currentIndex + 1); 
            } else if (deltaX < -50) {
                goToSlide(currentIndex - 1); 
            }
            touchStartX = null;
        });

        // Initialize carousel on load
        updateCarousel();
    });
});