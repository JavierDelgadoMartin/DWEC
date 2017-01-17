function mostrarCajas(){
    $("button").click(function ()  {
        $("#1").fadeIn("slow");
        $("#2").fadeIn("fast");
        $("#3").fadeIn(800);
        $("#4").fadeIn(2000);
        $("#5").fadeIn(4000);
    });
}

$(document).ready(function () {
    mostrarCajas();
});