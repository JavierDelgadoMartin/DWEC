function comprobarContraseña(){
    var contraseña = $(":password");
    var mensaje = $("#mensaje");
    contraseña.keyup(function () {
        if(contraseña.val().length<5){
            mensaje.text("contraseña no segura");
            mensaje.css("background-color","red");
        } else if(contraseña.val().length>=5 && contraseña.val().length<8){
            mensaje.text("contraseña medio segura");
            mensaje.css("background-color","yellow");
        }else if(contraseña.val().length>=8){
            mensaje.text("contraseña muy segura");
            mensaje.css("background-color","green");
        }
    })
}

$(document).ready(function () {
    comprobarContraseña();
});