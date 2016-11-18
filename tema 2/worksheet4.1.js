//1

if (navigator.geolocation){
    document.write("se donde vives <br>");
    navigator.geolocation.getCurrentPosition(pintaPosicion);
}else{
    document.write("sigo sabiendo donde vives");
}


var latitudes = [];

function pintaPosicion(posicion){
    document.write(posicion.coords.latitude + " " + posicion.coords.altitude+"<br>");
    document.write(medirDistancias());
}

function medirDistancias(){
    var distancia=0;
    var ultimaPosicion = latitudes[0];
    for(i=1;i<latitudes.length-1;i++){
        distancia+=latitudes[i]-ultimaPosicion;
        ultimaPosicion = latitudes[i];
    }
    return distancia;
}


//2
var map;
function mostrarUbicacion(){
    navigator.geolocation.watchPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var coor = {lat: lat, lng: lon};
        map = new google.maps.Map(document.getElementById("map"), {
            center: coor,
            zoom: 17
        });
        var marker = new google.maps.Marker({
            position: coor,
            map: map
        });
    })
};