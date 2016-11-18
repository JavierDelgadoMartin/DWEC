//1
var d = new Date();
document.write("año actual: "+ d.getFullYear()+"<br>");
document.write("mes actual: "+ (d.getMonth()+1)+"<br>");
document.write("dia actual: "+ d.getDay()+"<br>");
document.write("hora actual: "+ d.getHours()+"<br>");
document.write("minutos actuales: "+ d.getMinutes()+"<br>");
document.write("segundos actuales: "+ d.getSeconds()+"<br>");

document.write("<br>");

//2
/*
var fecha85 = new Date();
fecha85 = fecha85.setDay(fecha85.getDay() + 85);
var fecha187 = fechaHoy.setDate(fechaHoy.getDate() - 187);
//fecha85 =

document.write(fecha85);

document.write("<br>");
*/
/*
//3
tiempo = 60;
function cronometro(){
    document.write(tiempo);
    tiempo -= 1;
    time = setTimeout(cronometro,1000)
    if (tiempo == 0){
        clearTimeout(time);
    }
}

cronometro();

//4
tiempo = 60;
function cronometro(){
    document.write(tiempo);
    tiempo -= 1;
    time = setTimeout(cronometro,1000)
    if (tiempo == 0){
        location.assign("http://www.google.es");
    }
}

cronometro();
*/
//5
function reloj(){
    var d = new Date();
    document.write(d.getHours()+": "+ d.getMinutes()+": "+ d.getSeconds());
    setTimeout(reloj,1000);
}

reloj();