//2
// 3 en raya
class Jugador{
    constructor(color){
        this.color = color;
    }
    marcarCasilla(id){
        document.getElementById(id).style.bgcolor = this.color;
    }
    get colorJ(){
        return this.color;
    }
}

class Juego {
    constructor(controlador) {
        this.arrayJugadores = [];
        var j1 = new Jugador("blue");
        var j2 = new Jugador("red");
        this.arrayJugadores.push(j1);
        this.arrayJugadores.push(j2);
        this.turno = 0;
        this.controladorT = controlador;
    }

    siguienteTurno(tActual) {
        if (tActual == 0){
            this.turno++;
            return 1;
        }else if (tActual == 1) {
            this.turno++;
            return 0;
        }else if(this.turno == 9){
            alert("Fin Del Juego")
        }
    }

    esGanador(color) {
        var casillas = this.controladorT.obtenerCasillasPintadas();
        if(casillas[0]==color && casillas[1]==color && casillas[2]==color){
            this.controladorT.pintaGanador(color);
        }else if(casillas[3]==color && casillas[4]==color && casillas[5]==color) {
            this.controladorT.pintaGanador(color);
        }else if(casillas[6]==color && casillas[7]==color && casillas[8]==color) {
            this.controladorT.pintaGanador(color);
        }else if(casillas[0]==color && casillas[4]==color && casillas[8]==color) {
            this.controladorT.pintaGanador(color);
        }else if(casillas[2]==color && casillas[4]==color && casillas[6]==color) {
            this.controladorT.pintaGanador(color);
        }else if(casillas[0]==color && casillas[3]==color && casillas[6]==color) {
            this.controladorT.pintaGanador(color);
        }else if(casillas[1]==color && casillas[4]==color && casillas[7]==color) {
            this.controladorT.pintaGanador(color);
        }else if(casillas[2]==color && casillas[5]==color && casillas[8]==color) {
            this.controladorT.pintaGanador(color);
        }
    }
    colorJugador(turno){
        var jugador = this.arrayJugadores[turno];
        return jugador.colorJ;
    }
    get obtenerTurno(){
        return this.turno;
    }
}

class ControladorTablero{
    constructor(tablero){
        this.juego = new Juego(this);
        this.tablero = tablero;
        this.turno = 0;
        this.casillas = [];
    }
    pintarCasilla(casilla){
        var color = this.juego.colorJugador(this.turno);
        this.tablero.pintaCasilla(casilla,color);
        if(this.juego.obtenerTurno>=3){
            this.juego.esGanador(color)
        }
    }
    siguienteTurno(){
        var turnoActual = this.turno;
        this.turno = this.juego.siguienteTurno(turnoActual);
    }
    obtenerCasillasPintadas(){
        return this.tablero.obtenerCasillasPintadas()
    }
    pintaGanador(color){
        this.tablero.pintaGanador(color)
    }
}

class Tablero {
    constructor() {
        this.tabla = "<table border='1'>" +
            "<tr><td width='100' height='100' id='1'></td>" +
            "<td width='100' height='100' id='2'></td>" +
            "<td width='100' height='100' id='3'></td></tr>" +
            "<tr><td width='100' height='100' id='4'></td>" +
            "<td width='100' height='100' id='5'></td>" +
            "<td width='100' height='100' id='6'></td></tr>" +
            "<tr><td width='100' height='100' id='7'></td>" +
            "<td width='100' height='100' id='8'></td>" +
            "<td width='100' height='100' id='9'></td></tr>"+
            "</table>";
        this.pintaTablero();
        this.controladorT = new ControladorTablero(this);
        this.addListener();
    }

    pintaTablero() {
        document.getElementById("Juego").innerHTML = this.tabla;
    }
    addListener(){
        var casillas = document.getElementsByTagName("td");
        for (var i=0;i<casillas.length;i++){
            casillas[i].addEventListener("click",(e)=>this.casillaMarcada(e));
        }
    }
    casillaMarcada(e){
        var casilla = e.target.getAttribute("id");
        if(document.getElementById(casilla).style.background==""){
            this.controladorT.pintarCasilla(casilla);
        }
    }
    pintaCasilla(id,color) {
        document.getElementById(id).style.background = color;
        this.controladorT.siguienteTurno();
    }
    obtenerCasillasPintadas(){
        var casillasP = []
        for(var i=1;i<=9;i++){
            casillasP.push(document.getElementById(i).style.background);
        }
        return casillasP;
    }
    pintaGanador(color){
        document.getElementById("ganador").innerHTML = "Ha ganado el jugador " + color;
    }

}
window.onload = function(){
    var t = new Tablero;
    //t.pintaTablero();
};
