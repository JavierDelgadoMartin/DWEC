function cambiarTamañoTexto(){
    var tamaño = 20;
    for (var i=1;i<=3;i++){
        $("#"+i).css("font-size",tamaño+"px");
        tamaño +=2;
    }
}

function ocultarNoticia(){
        $("div > h3").on("click",function(){
            $(this).siblings().toggle();
        })
}

$(document).ready(function(){
    ocultarNoticia();
});