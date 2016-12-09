function obtenerCookie(nombre) {
    var usuario = nombre + "=";
    var datos = document.cookie.split(';');
    for(var i = 1; i <datos.length; i++) {
        var dato = datos[i];
        while (dato.charAt(0)==' ') {
            dato = dato.substring(1);
        }
        if (dato.indexOf(usuario) == 0) {
            var valor = nombre + "=";
            return dato.substring(valor.length,dato.length);
        }
    }
    return "";
}
function crearCookie(usuario, valor, expiracion) {
    var d = new Date();
    d.setTime(d.getTime() + (expiracion*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = usuario + "=" + valor + ";" + expires + ";path=/";
}
function comprobarcookie() {
    var usuario=obtenerCookie("usuario");
    if (usuario!="") {
        document.getElementById("saludo").innerHTML = "hola " + usuario;
    } else {
        usuario = prompt("introduce nombre:", "");
        if (usuario != "") {
            var fecha = new Date();
            fecha.setTime(fecha.getTime() + (5*60*1000));
            crearCookie("usuario", usuario, fecha);
        }
    }
}

window.onload = function(){
    comprobarcookie();
};
