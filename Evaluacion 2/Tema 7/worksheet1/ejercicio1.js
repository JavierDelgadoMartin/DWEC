
function botonOcultar(){
    $("button").click(function () {
        //$("p").hide();
        $("p.intro").hide();
        //$(this).hide();
    })
}
$(document).ready(function(){botonOcultar()});


function listaOcultar(){
    $("ol li:first").hide();
    $("ul li:first").hide();
}

/*$("document").ready(function(){
    listaOcultar()
});
*/