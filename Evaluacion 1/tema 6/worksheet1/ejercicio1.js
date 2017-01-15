/**
 * Crea una página web con un botón, que haciendo uso de AJAX al pulsarlo se llame a
 * otra página del servidor y se muestre su contenido.
 */

function obtenerPagina(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            window.open(pagina);
        }
    };
    xhttp.open("GET", "ejercicio1.php", true);
    var pagina = xhttp.send();
}