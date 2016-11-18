//1,4,5
function ejercicio1(){
    //numero de enlaces
    var enlaces = document.getElementsByTagName("a");
    var caja = document.getElementById("resultados");
    caja.innerHTML += "enlaces: " + enlaces.length + "<br>";
    //Dirección a la que enlaza el penúltimo enlace
    caja.innerHTML += "penultimo enlace: " + enlaces[enlaces.length-2] + "<br><br>";
    //enlaces a google
    for(var i in enlaces){
        if(/www.google.es$/.test(enlaces[i])){
            caja.innerHTML += "enlaces a google: " + enlaces[i] + "<br>";
        }
    }
    //Número de enlaces del tercer párrafo
    var tercerP = document.querySelectorAll("#tercero a");
    caja.innerHTML += "enlaces del tercer párrafo: " + tercerP.length;
}
window.onload = function(){
    ejercicio1();
};