
class Vista{
    constructor(){

    }
}

class Controlador{
    constructor(){
        this.modelo = new Modelo(this);
        this.vista = new Vista(this);
    }
}

class Modelo{
    constructor(controlador){
        this.controlador = controlador;
        this.conexion = new Conexion();
    }
}

class Conexion{
    constructor(api){
        this.api = api;
    }

}

class Pelicula{
    constructor(){

    }
}

class Comic{
    constructor(){

    }
}

$(document).ready(function(){
    var controlador = Controlador();
});