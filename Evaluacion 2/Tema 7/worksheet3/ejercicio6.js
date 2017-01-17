function aumentaTamaño(){
    var tamaño = 20;
    $("p").click(function () {
        if(tamaño<24){
            $(this).css("font-size",tamaño+"px");
        }else{
            $(this).css("font-size","18px");
        }
        tamaño +=2;
    })
}

$(document).ready(function(){
    aumentaTamaño();
});