// Botón para dirigir al usuario a la sección de consolas

function bannerButton() {
    let buttonViewConsoles = document.getElementById("buttonViewConsoles");
    buttonViewConsoles.addEventListener("click", function() {
        window.location.href = "#ver-consolas";
    })
}

export default bannerButton;

