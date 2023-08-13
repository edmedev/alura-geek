//Función que al hacer clic al icono movil de busqueda pueda desplegar el formulario de busqueda:

function searchIcon() {
    const mobileIcon = document.getElementById("mobileIcon");
    const searchForm = document.getElementsByClassName("header__searchForm");

    function toggleMenu() {
        for (let i = 0; i < searchForm.length; i++) {
            if (searchForm[i].style.display === "none") {
                searchForm[i].style.display = "flex";
            } else {
                searchForm[i].style.display = "none";
            }
        }
    }

    mobileIcon.addEventListener("click", toggleMenu);
}

export default searchIcon;

