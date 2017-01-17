function colorearParrafos(){
    $("p").click(function () {
        $("p").css("color","red");
    })
}

$(document).ready(function(){
    colorearParrafos();
});