/*Estás diseñando una aplicación web para subir ficheros al servidor. Haciendo uso de
 DOM, consigue que el usuario pueda adjuntar tantos ficheros como desee. Por tanto
 inicialmente será necesario un input de tipo fichero, un botón “Adjuntar otro fichero”
 y un segundo botón “Enviar”, de modo que al pulsar el primero de los botones
 automáticamente aparezca otro input para elegir fichero.*/
function ejercicio5(){
    document.getElementsByTagName("div")[0].innerHTML += "<input id="+"adjunta"+" type="+"file"+" value="+"adjunta archivo"+">";;
};

window.onload = function(){
    var otro = document.getElementById("otro");
    otro.addEventListener("click",ejercicio5);
};