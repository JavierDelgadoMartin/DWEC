//ejercicio 4.10
/*function cabecera (){
    //document.write("<head>practica bucle for</head>")
    for(i=1;i<=6;i++) {
        let texto =`<h${i}>cabecera h${i}</h${i}>`;
        document.write(texto);
    }
}
cabecera();*/

//ejercicio 4.11
var nColumnas = parseInt(prompt("introduce numero columnas"));
var alto = parseInt("introduce alto celda");
var ancho = parseInt("introduce ancho celda");

function tablas(nColumnas,tamaño){
    document.write("<table>");
        document.write(`<tr height=${ancho}>`);
        for(j=1;j<=nColumnas;j++){
            document.write(`<td width=${alto}>`);
        }
        document.write("</tr>");
}
