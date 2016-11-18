// 5,7,8,9
//5
/*
function paresImpares(){
    var numbers = [];
    for(var i=1;i <=100;i++) {
        numbers.push(Math.floor((Math.random()*100)+1));
    };
    document.write(numbers + "<br><br>");
    var pares = [];
    var impares = [];
    numbers.forEach(function(item){
         if(item%2==0){
             pares.push(item);
         }else {
             impares.push(item);
         }
    })
    document.write("numeros pares: " + pares + "<br><br>");
    document.write("numeros impares: " + impares + "<br><br>");
    document.write("array completa: " + numbers + "<br><br>");
};
paresImpares();

//7
//a
function cargaArray(){
    var array = [];
    for(var i=0;i<=10;i++){
        array.push(0);
    }
    document.write("original: " + array  + "<br><br>");
    document.write("cambiada: " +cambiarDatosArray(array) + "<br><br>");
    pintaArrayEspacios(array);
}
//b
function cambiarDatosArray(array){
    for(var i=0;i<=array.length-1;i++){
        array[i]=1;
    }
    return array;
};

//c
function pintaArrayEspacios(array){
    var contenido = array[0] + " ";
    for(var i=1;i<=array.length-1;i++){
        contenido += array[i] + " ";
    }
    document.write("array por espacios: " + contenido  + "<br><br>");
};
cargaArray();
*/
//8
function tirarDosDado(){
    return Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1);
}

function probabilidadDado(){
    var array = [0,0,0,0,0,0,0,0,0,0,0];
    var tirada;
    for (var i=0;i<36000;i++){
        array[tirarDosDado()-2]+=1;
    }
    return array;
}

//9
probabilidadDado().forEach(function(item,index){
    document.write(index+2 +": "+item+"<br>");
});
