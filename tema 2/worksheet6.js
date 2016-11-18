//1
function a() {
    document.getElementById("print").innerHTML = "last updated: "
        + document.lastModified;
};
var url = null;
function b(){
    url = document.URL;
};

function pintarURL(){
    document.getElementById("pintar").innerHTML = url;
};

function c(){
    document.getElementById("print").innerHTML = "title: " + document.title;
};

function d(){
    document.getElementById("print").innerHTML = "URL: " + document.URL;
};

function e1(){

};