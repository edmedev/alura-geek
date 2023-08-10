// Importando templates
import searchIcon from "./searchIcon.js"; //importando la función del icono de navegación
import headerButton from "./headerButton.js";

// Importar encabezado
function importHeader() {
    fetch('../../templates/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
        searchIcon();
        headerButton();
    });
}

// Importar pie de página
function importFooter() {
    fetch('../../templates/footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    });
}

function importTemplates() {
    importHeader();
    importFooter();
}

importTemplates();

export default importTemplates;

