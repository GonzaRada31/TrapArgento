document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.custom-form-inner');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Verificar si todos los campos están llenos
        if (!lastName || !email || !password || !confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios!',
            });
        } else if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no coinciden!',
            });
        } else {
            // Aquí puedes agregar la lógica para crear la cuenta...
            // Por ejemplo, enviar los datos a un servidor o algo similar

            // Si todo está correcto, muestra una alerta de éxito
            Swal.fire(
                '¡Cuenta Creada!',
                'Tu cuenta ha sido creada con éxito.',
                'success'
            );
        }
    });
});
