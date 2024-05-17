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

  function removeArtist(button) {
    var listItem = button.parentNode; // Obtiene el elemento <li> padre del botón
    var followedArtists = document.getElementById('followed-artists');
    followedArtists.removeChild(listItem); // Elimina el elemento <li> de la lista
}


function removeArtist(button) {
  var li = button.parentNode;
  li.parentNode.removeChild(li);
}

function followArtist() {
  var input = document.getElementById('artist-input');
  var artistName = input.value.trim();

  if (artistName !== '') {
      var followedArtists = document.getElementById('followed-artists');
      var newArtistItem = document.createElement('li');
      newArtistItem.className = 'artist-item';
      newArtistItem.textContent = artistName;
      var unfollowButton = document.createElement('button');
      unfollowButton.textContent = 'Unfollow';
      unfollowButton.onclick = function () {
          removeArtist(this);
      };
      newArtistItem.appendChild(unfollowButton);
      followedArtists.appendChild(newArtistItem);

      input.value = ''; // Limpiar el campo de entrada después de agregar el artista
  } else {
      alert('Por favor ingresa un nombre de artista válido.');
  }
}




/* seguidores */
// Define variables para almacenar la cantidad de seguidores y me gusta
let seguidores = 1000;
let meGusta = 5000;

// Función para actualizar el número de seguidores en la página
function actualizarSeguidores() {
    document.getElementById('seguidores-count').innerText = seguidores;
}

// Función para actualizar el número de me gusta en la página
function actualizarMeGusta() {
    document.getElementById('meGusta-count').innerText = meGusta;
}

// Llama a las funciones de actualización al cargar la página
window.onload = function() {
    actualizarSeguidores();
    actualizarMeGusta();
};

/* registro */

document.addEventListener('DOMContentLoaded', function () {
  const loginOptions = document.getElementById('login-options');
  const formContainer = document.getElementById('custom-form-container'); // Aquí se corrige la selección
  const showFormLink = document.getElementById('show-form-link');

  // Ocultar el formulario al cargar la página
  formContainer.style.display = 'none';

  // Mostrar el formulario al hacer clic en el enlace
  showFormLink.addEventListener('click', function (event) {
      event.preventDefault();
      if (formContainer.style.display === 'none') {
          formContainer.style.display = 'block';
          loginOptions.style.display = 'none'; // Ocultar los enlaces de inicio de sesión
      } else {
          formContainer.style.display = 'none';
          loginOptions.style.display = 'block'; // Mostrar los enlaces de inicio de sesión
      }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const customInfoLink = document.querySelector('.custom-info-link');
  const customFormContainer = document.getElementById('custom-form-container'); // Corrección aquí

  customInfoLink.addEventListener('click', function() {
      customFormContainer.classList.toggle('active'); // Agrega o quita la clase 'active' al contenedor del formulario
  });
});