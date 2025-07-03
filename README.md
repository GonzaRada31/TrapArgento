# 🎧 Trap Argentino — Frontend

Sitio web interactivo que celebra la cultura del Trap argentino. Diseñado con HTML, CSS y JavaScript puro, con fuerte presencia visual y contenidos multimedia.

---

## 🖥️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)
- SweetAlert2
- Reproductores integrados (YouTube + Spotify)

---

## ✨ Funcionalidades destacadas

- Galería de artistas con slider interactivo
- Videos de batallas y playlists de Spotify
- Perfil de artista con listado de canciones (conexión API)
- Formulario de registro, login visual y efectos animados
- Estadísticas de seguidores y me gusta
- Responsive + diseño adaptado a pantallas pequeñas

---

## 🔗 Conexión con el backend

Este frontend se comunica con una API Flask (ver repo [TrapArgento-backend](#)) para operaciones CRUD sobre canciones.


```javascript
const BASEURL = 'http://127.0.0.1:5000';

🚀 Cómo levantarlo en local
Opción 1 — Live Server (recomendado)
Abrí el proyecto en VS Code.

Abrí index.html y hacé clic en “Go Live”.

Opción 2 — Python server
bash
python -m http.server 5500
Abrí tu navegador en http://localhost:5500