 function validarFormulario(){
        var formulario = document.forms["formulario"];
     if(formulario.UID.value.length < 5 || formulario.UID.value.length > 12){
         alert("Usuario fallo");
     }
     if(formulario.passwd.value.length < 7 || formulario.UID.value.length > 12){
         alert("Contraseña fallo");
     }
     if(/^[a-zA-Z]*$/.test(formulario.name.value)){
         alert("Nombre fallo");
     }
     if(formulario.pais.value == ""){
         alert("pais fallo")
     }
     if(/^\d*$/.test(formulario.ZIP.value)){
         alert("ZIP fallo");
     }
     if(/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i.test(formulario.correo.value)){
         alert("Correo fallo");
     }
     if(formulario.sexo.value == ""){
         alert("sexo fallo")
     }
     if(!formulario.lenguaje[0].checked || !formulario.lenguaje[1].checked ){
         alert("lenguaje fallo")
     }

 }
 /*function compruebaLonguitud(id,minim,maximo){
        var dato = document.getElementById(id).value;
        if(valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
            if (dato.length < maximo && dato.length > minim) {
                return true;
            } else {
                alert("La longuitud de " + id + " no está entre 5 y 12");
            }
        }else {
            alert("el campo "+id+" está vacío");
        }
    }
    compruebaVacio(id){
        var dato = document.getElementById(id);
        if(dato.value != null){
            return true;
        }else{
            alert("El campo"+id+" está vacío");
        }
    }
    compruebaSelect(id){
        var dato = document.getElementById(id);
        alert(dato.selectedIndex);
        //if (dato.selectedIndex != )
    }
    compruebaNumero(id){}
    compruebaEmail(id){
        var dato = document.getElementById(id);

    }
    compruebaRadio(id){}
    compruebaCheck(id){}
}
*/