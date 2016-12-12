class Vista{
    constructor(controlador){
        this.controlador = controlador;
        this.cuerpo = document.getElementById("cuerpo");
        this.cabecera = document.getElementById("cabecera");
        this.botonCrear();
    }

    botonCrear(){
        var crear = document.querySelector("header i");
        var self = this;
        crear.addEventListener("click",function(){
            self.controlador.crearNota();
        },false);
    }

    nuevaNota(id,fecha){
        var tituto = document.createElement("input");
        tituto.setAttribute("id","titulo");
        var self = this;
        tituto.addEventListener("keyup",function(){
            var valor = document.getElementById("titulo").value;
            self.controlador.escribirTitulo(id,valor);
        },false);
        var contenido = document.createElement("textArea");
        contenido.setAttribute("id","contenido");
        contenido.addEventListener("keyup",function(){
            var valor = document.getElementById("contenido").value;
            self.controlador.escribirContenido(id,valor);
        },false);
        var eliminar = document.createElement("i");
        eliminar.setAttribute("id","eliminar");
        eliminar.setAttribute("class","fa fa-times fa-lg");
        eliminar.addEventListener("click",function(){
            self.controlador.eliminarNota(id);
            self.cuerpo.removeChild(document.getElementById(id));
        },false);
        var fecha = document.createElement("div");
        fecha.setAttribute("id","fecha");
        var tiempo = document.createTextNode("hace segundos");
        fecha.appendChild(tiempo);
        var nota = document.createElement("div");
        nota.setAttribute("class","nota");
        nota.setAttribute("id",id);
        nota.appendChild(eliminar);
        nota.appendChild(tituto);
        nota.appendChild(contenido);
        nota.appendChild(fecha);
        this.cuerpo.appendChild(nota);
        this.controlador.modificarTiempo(id);
    }

    modificarTiempo(id,tiempo){
        var nota = document.getElementById(id);
        alert(nota.lastChild("div"));
    }
}

class Controlador{
    constructor(){
        this.vista = new Vista(this);
        this.modelo = new Modelo(this);
    }

    crearNota(){
        var nota = this.modelo.crearNota();
        this.vista.nuevaNota(nota.obtenerId,nota.fechaCreacion);
    }

    escribirTitulo(id,contenido){
        this.modelo.escribirTitulo(id,contenido);
    }

    escribirContenido(id,contenido){
        this.modelo.escribirContenido(id,contenido);
    }

    eliminarNota(id){
        this.modelo.eliminarNota(id);
    }

    cambiarPosicion(){

    }

    modificarTiempo(id){
        var tiempo = this.modelo.tiempoTranscurrido(id);
        this.vista.modificarTiempo(id,tiempo);
    }

    cambiarTamaño(){

    }
}

class Modelo{
    constructor(controlador){
        this.controlador = controlador;
        this.coleccionNotas = [];
        this.id = 1;
    }
    crearNota(){
        var nota = new Nota(this.id);
        this.id ++;
        this.coleccionNotas.push(nota);
        return nota;
    }

    cambiarPosicion(){

    }

    modificarPosicion(){

    }

    tiempoTranscurrido(id){
        var fechaActual = new Date();
        this.coleccionNotas.forEach(function(valor){
            if(valor.id == id){
                var tiempo = (valor.fechaCreacion - fechaActual) + "minutos";
                return tiempo;
            }
        });
    }

    escribirTitulo(id,contenido){
        var nota = this.buscarNota(id);
        nota.escribirTitulo(contenido);
    }

    escribirContenido(id,contenido){
        var nota = this.buscarNota(id);
        nota.escribirContenido(contenido);
    }

    eliminarNota(id){
        this.coleccionNotas.forEach(function(valor,index,array){
            if(valor.id == id){
                array.splice(index,1);
            }
        });
    }

    buscarNota(id){
        var resultado;
        this.coleccionNotas.forEach(function(valor){
            if(valor.id == id){
                resultado = valor;
            }
        });
        return resultado;
    }
}

class Nota{
    constructor(id){
        this.titulo = "";
        this.texto = "";
        this.fecha = new Date();
        this.id = id;
        this.eliminar = "";
    }
    cargarContenido(){

    }
    escribirTitulo(contenido){
        this.titulo = contenido;
    }
    escribirContenido(contenido){
        this.contenido = contenido;
    }

    get obtenerId(){
        return this.id;
    }

    get fechaCreacion(){
        return this.fecha;
    }
}

window.onload = function(){
    new Controlador();
};