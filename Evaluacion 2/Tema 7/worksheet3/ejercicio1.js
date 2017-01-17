function colorearFilas(){
    $("tr:lt(2)").css("color","red");
    $("tr:gt(2)").css("color","blue");
}

function colorearEU(){
    $("p:contains(eu)").css("color","red");
}

function colorearFilasVacias(){
    $("td:empty").css("background","yellow")
}

$(document).ready(function(){
    //colorearFilas();
    //colorearEU();
    colorearFilasVacias();
});