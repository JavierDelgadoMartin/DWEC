function animacionCaja(){
    var caja = $("div");
    $("#iniciar").click(function () {
        caja.animate({'margin-left':'0px',"height":"0px"},5000);
        caja.css("background-color","blue");
    });
    $("#finalizar").click(function () {
        caja.stop();
    });
}

$(document).ready(function () {
    animacionCaja();
});