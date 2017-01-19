function mostrarDetalles(){
    $("input").mouseover(function () {
        this.tooltip();
    });
}

$(document).ready(function () {
    mostrarDetalles();
});