function crearCookie(usuario, nombre, expiracion) {
    var d = new Date();
    d.setTime(d.getTime() + (expiracion*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = usuario + "=" + nombre + ";" + expires + ";path=/";
}

function obtenerCookie(nombre) {
            var name = nombre + "=";
            var datos = document.cookie.split(';');
            for (var i = 0; i < datos.length; i++) {
                    while (dato.charAt(0) == ' ') {
                        dato = dato.substring(1);
                    }
                    if (dato.length != 0) {
                        return dato.substring(name.length, dato.length);
                    }
            }
    return "";
}

function comprobarcookie() {
    var fondo = obtenerCookie("fondo");
    var parrafo = obtenerCookie("parrafo");
    var tamaño = obtenerCookie("tamaño");
    var usuario = obtenerCookie("usuario");
    if (usuario != "") {
        document.getElementById("saludo").innerHTML = "hola " + usuario;
        var cuerpo = document.getElementById("cuerpo");
        cuerpo.style.backgroundColor(fondo);

    } else {
        usuario = prompt("introduce nombre:", "");
        if (usuario != ""  && usuario != null) {
            var fecha = new Date();
            fecha.setTime(fecha.getTime() + (5*24*60*60*1000));
            crearCookie("usuario", usuario, fecha);
            preferencias();

        }
    }
}

function preferencias(){
    var formulario = document.forms["formulario"];
    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (5*24*60*60*1000));
    if(formulario.fondo.value != ""){
        crearCookie("fondo",formulario.fondo.value,fecha);
    }

    if(formulario.parrafo.value != ""){
        crearCookie("parrafo",formulario.parrafo.value,fecha);
    }

    if(formulario.tamaño.value != "") {
        crearCookie("tamaño", formulario.tamaño.value, fecha);
    }
}

window.onload = function(){
    comprobarcookie();
};
