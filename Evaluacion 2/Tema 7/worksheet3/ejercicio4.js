function eventBoton(){
    $("#insert").click(function(){
        $("textarea").focus();
    });
    $("#out").click(function () {
        $("textarea").focusout();
    })
}
$(document).ready(function(){
    eventBoton();
});
