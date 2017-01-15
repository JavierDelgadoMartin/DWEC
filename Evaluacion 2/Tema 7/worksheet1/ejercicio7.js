function introducirCaracter(){
    var li = $("li");
    li.prepend("#");
    li.click(function(){
        $(this).hide();
    });
}

function modificarEnlaces(){
    var a = $("a");
    a.attr("href","https://www.google.es");
    a.text("gugle");
}

function colorCasilla(){
    var casilla = $("td");
    casilla.click(function(){
        $(this).css("background-color","red");
    })
}

function ocultarFila(){
    var fila = $("tr");
    fila.click(function(){
        $(this).hide();
    })
}

$(document).ready(function(){
    //introducirCaracter();
    //modificarEnlaces();
    //colorCasilla();
    ocultarFila();
});
