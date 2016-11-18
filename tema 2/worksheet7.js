//cambia color
function cambiarFondo(){
    var frame = parent.frames[0];
    frame.document.body.style.backgroundColor = "blue";
}

function cambiarURL(){
    var frame = parent.frames[0];
    var enlace = frame.document.getElementById("pagina");
    enlace.href = "www.google.es";
    enlace.innerHTML = "google";
}

function cambiarImagen(){
    var frame = parent.frames[0];
    var imagen = frame.document.getElementsByName("img");
}