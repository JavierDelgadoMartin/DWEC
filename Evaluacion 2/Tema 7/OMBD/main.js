
class Vista{
    constructor(controlador){
        this.controlador = controlador;

    }
    addEventoBuscar(){
        var that = this;
        $("#buscar").click(function () {
            that.buscarPeliculas();
        });
    }
    buscarPeliculas(){
        this.titulo = $("#titulo").val();
        this.controlador.obtenerPeliculas(this.titulo,"http://www.omdbapi.com/?");
    }
}

class Controlador{
    constructor(){
        this.modelo = new Modelo(this);
        this.vista = new Vista(this);
        this.pagina = 1;
        this.vista.addEventoBuscar();
        }
        obtenerPeliculas(titulo,api){
            var that = this;
            $.getJSON(api,{
                s:titulo,
                //type:tipo,
                page:this.pagina
            }, function (data) {
                that.modelo.cargarDatosPeliculas(data);
            });
            this.pagina ++;
        }
    imprimirPelicula(poster,titulo,año){
        var caja = document.createElement("div");
        var
    }
}

class Modelo{
    constructor(controlador){
        this.controlador = controlador;
    }
    cargarDatosPeliculas(data){
        var that = this;
        $.each(data["Search"], function (index,item) {
            console.log(item);
            that.controlador.imprimirPelicula(item.Poster,item.Title,item.Year);
        })
    }
}


$(document).ready(function(){
    var controlador = new Controlador();
});