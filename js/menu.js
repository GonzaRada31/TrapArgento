// Obtén los elementos del DOM
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// Añade un evento de clic al icono del menú
menuIcon.addEventListener('click', () => {
    // Alterna la clase 'open' en los enlaces de navegación
    navLinks.classList.toggle('open');
});
