class Tablero{
    constructor(){
        this.controlador = new ControladorT(this);
        this.cargarTablero();
        this.cargarBombas();
    }
    cargarTablero(){
        var tablero = "<table border='1'>";
        for (var i=0;i<8;i++){
            tablero += "<tr>";
            for (var j =0;j<8;j++){
                tablero += "<td id='"+[i,j]+"' width='50' height='50'></td>";
            }
            tablero += "</tr>";
        }
        tablero += "</table>";
        document.getElementById("juego").innerHTML = tablero;
    }
    cargarBombas(){
        var casillas = document.getElementsByTagName("td");
        for(var i=0;i<8;i++){
            var aleatorio = [Math.floor(Math.random()*64)];
            casillas[aleatorio].innerHTML = "<img id='bomba'>";
        }
        this.cargarNumeros(casillas);
    }
    cargarNumeros(casillas){
        for(var i=0;i<64;i++){
        }
    }
}

class ControladorT{
    constructor(tablero) {
        this.tablero = tablero;
        this.juego = new Juego(this);
    }
}


class Juego {
    constructor(controlador) {
        this.controlador = controlador;
    }
}

window.onload = function(){
    var tabla = new Tablero();
}