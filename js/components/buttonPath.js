// Funciones para dirigir al usuario a otra página de destino despues de hacer clic en el botón

function bannerButton() {
    let buttonViewConsoles = document.getElementById("buttonViewConsoles");
    buttonViewConsoles.addEventListener("click", function() {
        window.location.href = "#ver-consolas";
    })
}

function addProductButton() {
    let addProduct = document.getElementById("addProduct");
    addProduct.addEventListener("click", function() {
        window.location.href = "./agregar_producto.html";
    })
}

addProductButton();

export default bannerButton;

