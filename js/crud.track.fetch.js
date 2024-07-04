const BASEURL = 'http://127.0.0.1:5000';

async function fetchData(url, method, data = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
      body: data ? JSON.stringify(data) : null,  // Si hay datos, los convierte a JSON y los incluye en el cuerpo
    };
try {
    const response = await fetch(url, options);  // Realiza la petición fetch
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();  // Devuelve la respuesta en formato JSON
} catch (error) {
    console.error('Fetch error:', error);
    alert('An error occurred while fetching data. Please try again.');
    }
}

async function showTracks(){
    try {
    let tracks =  await fetchData(BASEURL+'/api/songs/', 'GET');
    const tableTracks = document.querySelector('#list-table-songs tbody');
    tableTracks.innerHTML='';
    tracks.forEach((songs) => {
        let tr = `<tr>
                    <td>${songs.tittle}</td>
                    <td>${songs.duracion}</td>
                    <td>${songs.fecha_subida}</td>
                    <td>
                        <button class="btn-cac" onclick="updateSong(${songs.id_songs})">
                            <img src="../static/botones/editar.png">
                        </button>
                        <button class="btn-cac" onclick="deleteSong(${songs.id_songs})">
                            <img src="../static/botones/borrar.png">
                        </button>
                    </td>
                </tr>`;
        tableTracks.insertAdjacentHTML("beforeend",tr);
    });
} catch (error) {
    console.error('Error fetching songs:', error);
    }
}

async function saveSong() {
    const idSong = document.querySelector('#id-songs').value;
    const title = document.querySelector('#songTitle').value;
    const duration = document.querySelector('#songDuration').value;
    const releaseDateInput = document.querySelector('#songDate'); 

    const releaseDate = new Date(releaseDateInput.value);

// Formatea la fecha según el formato esperado
const formattedDate = releaseDate.toUTCString();

    // VALIDACIÓN DE FORMULARIO
    if (!title || !duration || !releaseDate) {
        Swal.fire({
            title: 'Error!',
            text: 'Por favor completa todos los campos.',
            icon: 'error',
            confirmButtonText: 'Cerrar'
        });
        return;
    }

    // Crea un objeto con los datos de la canción
    const songData = {
        tittle: title,
        duracion: duration,
        fecha_subida: formattedDate,
    };

    let result = null;

    // Si hay un idSong, realiza una petición PUT para actualizar la canción existente
    if (idSong !== "") {
        result = await fetchData(`${BASEURL}/api/songs/${idSong}`, 'PUT', songData);
    } else {
        // Si no hay idSong, realiza una petición POST para crear una nueva canción
        result = await fetchData(`${BASEURL}/api/songs/`, 'POST', songData);
    }

    const formSong = document.querySelector('#form-songs');
    formSong.reset();

    Swal.fire({
        title: 'Éxito!',
        text: result.message,
        icon: 'success',
        confirmButtonText: 'Cerrar'
    });

    // Actualiza la lista de canciones en la interfaz
    showTracks();
}


async function deleteSong(id_songs) {
    try {
        const confirmed = await Swal.fire({
            title: "¿Estás seguro de eliminar la canción?",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
        });

        if (confirmed.value) {
            const response = await fetchData(`${BASEURL}/api/songs/${id_songs}`, 'DELETE');
            showTracks();
            Swal.fire(response.message, "", "success");
        }
    } catch (error) {
        console.error("Error deleting song:", error);
        Swal.fire("Ocurrió un error al eliminar la canción. Por favor, inténtalo nuevamente.", "", "error");
    }
}


async function updateSong(id_songs) {
    try {
        // Buscamos en el servidor la canción según el ID
        let response = await fetchData(`${BASEURL}/api/songs/${id_songs}`, 'GET');
        const idSong = document.querySelector('#id-songs');
        const title = document.querySelector('#songTitle');
        const duration = document.querySelector('#songDuration');
        const releaseDate = document.querySelector('#songDate');

        idSong.value = response.id_songs;
        title.value = response.tittle;
        duration.value = response.duracion;

        // Formatea la fecha en el formato "yyyy-MM-ddThh:mm"
        const formattedDate = new Date(response.fecha_lanzamiento).toISOString().slice(0, 16);
        releaseDate.value = formattedDate;
    } catch (error) {
        console.error('Error fetching song:', error);
    }
}


// Escuchar el evento 'DOMContentLoaded' que se dispara cuando el 
// contenido del DOM ha sido completamente cargado y parseado.
document.addEventListener('DOMContentLoaded', function () {
    const btnSaveSong = document.querySelector('#btn-save-song');
    // Asociar una función al evento click del botón
    btnSaveSong.addEventListener('click', saveSong);
    showTracks();
});
