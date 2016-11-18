//4. Crea una web con una lista de elementos y un botón que cada vez que pulsemos
//introduzca una entrada nueva en la lista.

function ejercicio4(){
    var entrada = document.getElementById("entrada");
    var lista = document.getElementsByTagName("ul");
    lista[0].innerHTML += "<li>"+entrada.value+"</li>";
    entrada.value = "";
}

window.onload = function(){
    var boton = document.getElementById("boton");
    boton.addEventListener("click",ejercicio4);
}