
class Vista{
    constructor(controlador){
        this.controlador = controlador;
        this.cuerpo = $("section");
    }

    EventoBuscar(){
        var that = this;
        $("#buscar").click(function () {
            that.buscarPeliculas();
        });
    }

    buscarPeliculas(){
        this.pagina = 1;
        this.titulo = $("#titulo").val();
        this.controlador.obtenerPeliculas(this.titulo,this.pagina,"http://www.omdbapi.com/?");
        this.pagina ++;
    }

    mostrarPelicula(pelicula){
        $(this.cuerpo).append(pelicula);
        this.mostrarMasDatos();
    }

    mostrarMasDatos(){
        var that = this;
        var ventana = $(window);
        ventana.scroll(function () {
            if($(window).scrollTop() + $(window).height() == that.getDocHeight()) {
                that.controlador.obtenerPeliculas(this.titulo, this.pagina, "http://www.omdbapi.com/?");
                that.pagina++;
            }
        });
    }
    getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }
}

class Controlador{
    constructor(){
        this.modelo = new Modelo(this);
        this.vista = new Vista(this);
        this.vista.EventoBuscar();
    }

    obtenerPeliculas(titulo,pagina,api){
        var that = this;
        $.getJSON(api,
            {s:titulo, page:pagina},
            function (data) {
            that.modelo.cargarDatosPeliculas(data);
        }, function () {
                alert("no hay mas peliculas");
            });
    }

    mostrarPelicula(pelicula){
        this.vista.mostrarPelicula(pelicula);
    }
}

class Modelo{
    constructor(controlador){
        this.controlador = controlador;
    }

    cargarDatosPeliculas(data){
        var that = this;
        $.each(data["Search"], function (index,item) {
            that.crearPelicula(item.Poster,item.Title,item.Year);
        });
    }

    crearPelicula(poster, title, year){
        var pelicula = document.createElement("article");
        var portada = document.createElement("img");
        portada.setAttribute("src",poster);
        var titulo = document.createElement("p");
        $(titulo).text(title);
        var año = document.createElement("p");
        $(año).text(year);
        $(pelicula).append(portada,titulo,año);
        this.controlador.mostrarPelicula(pelicula);
    }
}


$(document).ready(function(){
    var controlador = new Controlador();
});