//1
function b() {
    document.getElementById("pagina").innerHTML = "host: "
        + location.hostname;
};

function c(){
    document.getElementById("pagina").innerHTML = "URL: "
        + location.href;
};

function d(){
    var address = prompt("insert a address Web");
    location.assign(address);
};

function e(){
    document.getElementById("pagina").innerHTML = "Protocol: "
        + location.protocol;
};

function f(){
    var address = location.href;
    location.assign(address);
};