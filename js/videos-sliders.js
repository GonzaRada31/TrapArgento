var slides = document.querySelectorAll('.slide-video');
var currentSlide = 0;
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');

function showSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('current', 'next', 'prev');
    }
    slides[currentSlide].classList.add('current');
    slides[(currentSlide + 1) % slides.length].classList.add('next');
    slides[(currentSlide - 1 + slides.length) % slides.length].classList.add('prev');
}

prevButton.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
});

nextButton.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
});

// Muestra el primer slide al cargar la página
showSlide();
