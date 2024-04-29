document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos de la línea de tiempo
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Añade eventos de click a cada elemento de la línea de tiempo
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            // Reinicia todos los slides y barras de progreso
            document.querySelectorAll('.slide').forEach(slide => {
                slide.classList.remove('active');
                slide.querySelector('.progress-bar').style.width = '0%'; // Asegúrate de que cada slide tiene una barra de progreso
            });

            // Activa el slide correspondiente
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            // Anima la barra de progreso del item activo
            item.querySelector('.progress-bar').style.width = '100%';
        });
    });

    // Configuración inicial para mostrar el primer slide y la barra de progreso
    document.getElementById('slide1').classList.add('active');
    document.querySelector('.timeline-item[data-target="slide1"] .progress-bar').style.width = '100%';
});
