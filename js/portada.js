// referencia al elemento de video
var video = document.getElementById('video-portada');
// referencia al elemento del título
var titulo = document.getElementById('titulo');

// Inicia la reproducción del video y elimina la clase 'blur' tan pronto como la página se haya cargado
window.addEventListener('load', function() {
    video.play();
    video.classList.remove('blur');
});

// Agrega un controlador de eventos para el evento 'ended'
video.addEventListener('ended', function() {
    // Cuando el video termine de reproducirse, agrega la clase 'blur'
    video.classList.add('blur');
    // Muestra el título
    setTimeout(function() {
        titulo.style.display = 'block';
        // Agrega la clase 'zoom' al título después de otro breve retraso
        setTimeout(function() {
            titulo.classList.add('zoom');
        }, 100); // Retraso de 100 milisegundos
    }, 100); 
});
