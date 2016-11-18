class Tablero{
    constructor(){
        this.controladorT = new Controlador(this);
        this.pintaTabla();
        this.crearFichas();
        this.pintaImagen();
    }
    pintaTabla(){
        this.tabla = "<table border='1'>";
        for (var i=0;i<4;i++){
            this.tabla += "<tr>";
            for(var j=1;j<=6;j++){
                this.tabla += "<td width='100' height='100' id='"+[i,j]+"'></td>";
            }
            this.tabla += "</tr>";
        }
        this.tabla += "</table>";
        document.getElementById("puzzle").innerHTML = this.tabla;
    }
    crearFichas(){
        this.controladorT.crearFichas();
    }
    cargarFichas(fichas,casillas){
        for (var casilla of casillas){
            var aleatorio = Math.floor(Math.random()*fichas.length);
                casilla.innerHTML = "<img id='"+aleatorio+"' src=" + fichas[aleatorio].url + ">";
                fichas.splice(aleatorio, 1);
        };
        this.cargarBlanca();
    }
    addListener(casillas){
        for(var casilla of casillas){
            casilla.addEventListener("click",(e)=>this.casillaPulsada(e));
        }
    };
    casillaPulsada(e){
        var idCasilla = e.currentTarget.id.split(",");
        var atras = document.getElementById(parseInt(idCasilla[0])+","+(parseInt(idCasilla[1])-1));
        var delante = document.getElementById(parseInt(idCasilla[0])+","+(parseInt(idCasilla[1])+1));
        var arriba = document.getElementById((parseInt(idCasilla[0])-1)+","+parseInt(idCasilla[1]));
        var abajo = document.getElementById((parseInt(idCasilla[0])+1)+","+parseInt(idCasilla[1]));

        if(atras != null){
            this.controladorT.moverFicha(e.currentTarget,atras);
        }
        if(delante != null){
            this.controladorT.moverFicha(e.currentTarget,delante);
        }
        if(arriba != null){
            this.controladorT.moverFicha(e.currentTarget,arriba);
        }
        if(abajo != null){
            this.controladorT.moverFicha(e.currentTarget,abajo);
        }

    };
    cargarCasillas(){
        return document.getElementsByTagName("td");
    }
    cargarBlanca(){
        document.getElementById([3,6]).innerHTML = "<img id='blanca'>";
    }
    pintaImagen(imagen){
        var imagen = document.getElementById("foto");
        imagen.innerHTML = "<img src='imagen.jpg'>";
    }
}

class Controlador{
    constructor(tablero){
        this.tablero = tablero;
        this.juego = new Juego(this);
    }
    crearFichas(){
        var fichas = this.juego.crearFichas();
        var casillas = this.tablero.cargarCasillas();
        this.tablero.cargarFichas(fichas,casillas);
        this.tablero.addListener(casillas);
    }
    moverFicha(casillaPinchada,casillaBlanca){
        this.juego.moverFicha(casillaPinchada,casillaBlanca);
    }
}

class Juego{
    constructor(controlador){
        this.controladorT = controlador;
        this.fichas = [];
    }
    crearFichas(){
        for (var i=1;i<=25;i++){
            var imagen = "imagenes/imagen_"+i+".jpg";
            var ficha = new Ficha(i,imagen);
            this.fichas.push(ficha);
        }
        return this.fichas;
    }
    moverFicha(casillaPinchada,casillaBlanca){
        var casillaP = casillaPinchada.getElementsByTagName("img");
        var casillaB = casillaBlanca.getElementsByTagName("img");
        if(casillaB.id == "blanca") {
            casillaBlanca.innerHTML = casillaP[0];
            casillaPinchada.innerHTML = casillaB;
        }
    }

}

class Ficha{
    constructor(id,imagen){
        this.id = id;
        this.imagen = imagen;
    }
    get url(){
        return this.imagen;
    }
}

window.onload = function() {
    var tabla = new Tablero();
};