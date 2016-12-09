class Vista{
    constructor(controlador){
        this.controlador = controlador;
        this.cuerpo = document.getElementById("cuerpo");
    }

    nuevaNota(){
        var nota = document.createElement("article");

    }

    eliminarNota(){

    }

    mostrarNota(){

    }
}

class Controlador{
    constructor(){
        this.vista = new Vista(this);
        this.modelo = new Modelo(this);
    }

    crearNota(){

    }
    cambiarPosicion(){

    }

    modificarContenido(){

    }

    cambiarTamaño(){

    }
}

class Modelo{
    constructor(controlador){
        this.controlador = controlador;
    }
    crearnota(titulo,texto){
        this.nota = new Nota(titulo,texto);
    }
    cambiarPosicion(){

    }

    modificarPosicion(){

    }

    TiempoTranscurrido(){

    }
}

class Nota{
    constructor(titulo,texto){
        this.titulo = titulo;
        this.texto = texto;
        this.fechaCreacion = new Date();
    }
}