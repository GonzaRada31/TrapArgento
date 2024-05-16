document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.slide');
  const timelineItems = document.querySelectorAll('.timeline-item');
  const progressBarMasks = document.querySelectorAll('.progress-bar-mask .progress-bar');

  let currentSlide = 0;
  let progressTimer; // Almacena el temporizador para poder limpiarlo cuando sea necesario

  activateSlideAndProgress(currentSlide);

  setInterval(() => {
      changeSlide((currentSlide + 1) % slides.length);
  }, 5000);

  timelineItems.forEach(item => {
      item.addEventListener('click', () => {
          const targetId = item.getAttribute('data-target');
          const targetIndex = Array.from(slides).findIndex(slide => slide.id === targetId);
          if (targetIndex !== -1) changeSlide(targetIndex);
      });
  });

  function changeSlide(newIndex) {
      if (currentSlide !== newIndex) {
          clearTimeout(progressTimer); // Limpia el temporizador actual antes de cambiar

          progressBarMasks[currentSlide].style.transition = 'none';
          progressBarMasks[currentSlide].style.width = '0%';
          setTimeout(() => {
              progressBarMasks[currentSlide].style.transition = 'width 6s linear';
          }, 10);

          slides[currentSlide].classList.remove('active');
          timelineItems[currentSlide].classList.remove('active');

          currentSlide = newIndex; // Actualizar el índice de la diapositiva actual
          activateSlideAndProgress(currentSlide);
      }
  }

  function activateSlideAndProgress(index) {
      slides[index].classList.add('active');
      timelineItems[index].classList.add('active');
      setTimeout(() => {
          progressBarMasks[index].style.width = '100%';
      }, 100);

      // Reinicia el temporizador para la animación completa
      progressTimer = setTimeout(() => {
          progressBarMasks[index].style.width = '0%';
      }, 6000); // Alinea esto con la duración de la transición
  }
});





/* Perfil */

document.addEventListener("DOMContentLoaded", function() {
    const songList = document.querySelectorAll(".song-list li");
    const viewAllBtn = document.getElementById("view-all-btn");
  
    const showMoreSongs = (event) => {
      event.preventDefault(); // Evitar que la página se desplace hacia arriba
      songList.forEach(song => {
        song.style.display = "block";
      });
      viewAllBtn.style.display = "none";
    };
  
    const hideExtraSongs = () => {
      for (let i = 2; i < songList.length; i++) {
        songList[i].style.display = "none";
      }
      viewAllBtn.style.display = "block";
    };
  
    // Mostrar solo dos canciones inicialmente
    hideExtraSongs();
  
    // Mostrar más canciones cuando se hace clic en "View All"
    viewAllBtn.addEventListener("click", showMoreSongs);
  });