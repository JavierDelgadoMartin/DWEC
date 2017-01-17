function mostrarMenu(){
    $('#principal').hover(function(){
        $('span > div').toggle(1000);
    });
}

$(document).ready(function(){
    mostrarMenu();
});