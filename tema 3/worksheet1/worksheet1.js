//1,2,3,6,7
//1
/*
function maximo (n1,n2,n3,n4){
    if (n1 > n2 && n1 > n3 && n1 > n4){
        return n1
    } else if (n2 > n1 && n2 > n3 && n2 > n4){
        return n2
    } else if(n3 > n2 && n3 > n1 && n3 > n4){
        return n3
    } else if(n4 > n2 && n4 > n3 && n4 > n1){
        return n4;
    }
}

var n1 = prompt("introduce un numero");
var n2 = prompt("introduce un numero");
var n3 = prompt("introduce un numero");
var n4 = prompt("introduce un numero");
document.write("<p>"+maximo(n1,n2,n3,n4)+"</p>");
*/
//2

function tirarDado(){
    return Math.floor(Math.random()*6+1);
}

function probabilidadDado(){
    var array = [0,0,0,0,0,0];
    var tirada;
    for (var i=0;i<6000;i++){
        switch (tirarDado()){
            case 1:
                array[0] += 1;
                break;
            case 2:
                array[1] += 1;
                break;
            case 3:
                array[2] += 1;
                break;
            case 4:
                array[3] += 1;
                break;
            case 5:
                array[4] += 1;
                break;
            case 6:
                array[5] += 1;
                break;
        }
    }
    return array;
}

//3
probabilidadDado().forEach(function(item,index){
    document.write(index+1 +": "+item+"<br>");
});
/*
//6
function potencia(numero,elevado){
    if(elevado===0){
        return 1;
    }else {
        return numero * potencia(numero, elevado-1)
    }
}

document.write(potencia(2,3));

//7
function factorial(numero){
    if (numero===1){
        return 1
    }else {
        return numero * factorial(numero - 1)
    }
}

for (var i=1;i<=10;i++){
    document.write("factorial"+i+": "+factorial(i)+"<br>");
}

*/