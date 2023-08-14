// Botón para dirigir al usuario a la página de agregar nuevo producto

function addProductButton() {
    let addProduct = document.getElementById("addProduct");
    addProduct.addEventListener("click", function() {
        window.location.href = "./agregar_producto.html";
    })
}

addProductButton();
