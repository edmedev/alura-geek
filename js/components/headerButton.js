// Funciones del boton del header para Login

function headerButon() {
        let currentPage = window.location.pathname; // Obtiene la ruta de la página actual
        let headerFormButton = document.getElementById('headerFormButton');
        let buttonLogin = document.getElementById('buttonLogin'); // Obtiene el elemento del botón "Login"

        // Verifica la ruta de la página actual y actualiza el valor del botón en consecuencia
        if (currentPage === '/' || currentPage === '/index.html') { 
            buttonLogin.value = 'Login'; // Estableciendo el valor del botón para la página principal
            headerFormButton.action = '../login.html'; // Estableciendo la URL de destino para la página Login
        } else if (currentPage === '/productos.html') {
            buttonLogin.value = 'Menú Administrador'; // Estableciendo el valor del botón para la página para agregar un producto
            headerFormButton.action = '../admin.html'; // Estableciendo la URL de destino para la página menú del administrador
        } else if (currentPage === '/agregar_producto.html') {
            buttonLogin.value = 'Menú Administrador'; // Estableciendo el valor del botón para la página para agregar un producto
            headerFormButton.action = '../admin.html'; // Estableciendo la URL de destino para la página menú del administrador
        } else {
            headerFormButton.style.display = 'none'; // Estableciendo otro valor para otras páginas
        }
}

export default headerButon;

