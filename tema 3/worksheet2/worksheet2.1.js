//a

function a(array){
    var result = 0;
    array.forEach(function(item){
        if (item>result){
            result = item;
        }
    });
    return result;
}

var arrayA=[0,1,2,3,4];
document.write("A: "+a(arrayA)+"<br><br>");

//b
function b(array){
    var result = "";
    array.forEach(function(item,index){
        if (item.length > result.length){
            result = item;
        }
    });
    return result;
}

var arrayB = ["quiero mi bocadillo","vete a comprar pan","mesternocleidomastoideo"];
document.write("B: "+b(arrayB)+"<br><br>");

//c
function c(array){
    var result = [];
    array.forEach(function (item) {
        if (item%2==0){
            result.push(item);
        }
    });
    return result;
}

var arrayC=[1,2,3,4,5,6];
document.write("C: "+c(arrayC)+"<br><br>");

//d
function d(array){
    var result = [];
    array.forEach(function(item){
        if (item%2!=0){
            result.push(item);
        }
    });
    return result;
}

var arrayD = [1,2,3,4,5,6];
document.write("D: "+d(arrayD)+"<br><br>");

//e

function e(array){
    var result = [];
    array.forEach(function(item){
        if(item.match(/is/g)){
            result.push(item);
        }
    });
    return result;
}

var arrayE = ["javascrispt", "is ", "the is best", "languageiscode"];
document.write("E: "+e(arrayE)+"<br><br>");

//f
function f(array){
    var result = [];
    array.forEach(function(item){
        if(item%3==0){
            result.push(item)
        }
    });
    return result;
}

var arrayF = [3,5,6,7,8,9];
document.write("F: "+f(arrayF)+"<br><br>");

//g
function g(array1,array2){
    var result = array1.concat(array2);
    return result;
}

var arrayG1 = [1,2,3,3,3];
var arrayG2 = [2,2,2,2,2];
document.write("G: "+g(arrayG1,arrayG2)+"<br><br>");

//h
function h(array){
    var result = array.sort();
    return result;
}

var arrayH = [7,6,5,4,3,2,9,1];
document.write("H: "+h(arrayH)+"<br><br>");

//i
function i(array){
    delete array[0];
    return array;
}

var arrayI = ["mojon","is" ,"are", "thing"];
document.write("I: "+i(arrayI)+"<br><br>");

//j
function j(array){
    delete array[0];
    return array;
}

var arrayJ = ["mojon","is" ,"are", "thing"];
document.write("J: "+j(arrayJ)+"<br><br>");

//k

function k(array){
    for(var i=0;i<array.length-1;i++){
        array[Math.floor(Math.random()*array.length)] = "cambiazo";
        return array;
    }
}

var arrayK = ["tiriti","poropon","tacata"];
document.write("K: "+k(arrayK)+"<br><br>");

//l
function l(array){
    var nombres = [];
    array.forEach(function(item,index){
        if(item.charAt(0)=="J"){
            nombres.push("J. " + item.charAt(item.indexOf(" ") + 1));
        }
    })
    return nombres.sort();
};

var arrayL = ["Javier Delgado", "Jamon Cocido", "Falafel Fernandez","Judias Judias", "Joder QueHambre"];
document.write("L: "+l(arrayL));