let slideIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.carousel-dot');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');

        function showSlides(index) {
            if (index >= slides.length) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex = index;
            }

            slides.forEach((slide, i) => {
                slide.style.display = (i === slideIndex) ? 'block' : 'none';
                dots[i].className = dots[i].className.replace(' active', '');
            });

            dots[slideIndex].className += ' active';
        }

        function changeSlide(step) {
            showSlides(slideIndex + step);
        }

        function currentSlide(index) {
            showSlides(index);
        }

        prevButton.addEventListener('click', () => changeSlide(-1));
        nextButton.addEventListener('click', () => changeSlide(1));

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => currentSlide(index));
        });

        showSlides(slideIndex);

        // Auto slide every 5 seconds
        setInterval(() => changeSlide(1), 5000);