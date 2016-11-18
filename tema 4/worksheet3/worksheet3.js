class formulario{
    constructor(){
        document.getElementById("formulario").addEventListener("submit",this.comprobacion);
    }
    comprobacion(event){
        var uid = this.compruebaLonguitud("UID",5,12);
        var pass = this.compruebaLonguitud("passwd",7,12);
        var nombre = this.compruebaVacio("name");
        var pais = this.compruebaSelect("country");
        var zip = this.compruebaNumero("zip");
        var email = this.compruebaEmail("email");
        var sexo = this.compruebaRadio("sexo");
        var lenguaje = this.compruebaCheck("lenguaje");
    }
    compruebaLonguitud(id,minim,maximo){
        var dato = document.getElementById(id).value;
        if(dato.value != null) {
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
    compruebaEmail(id){}
    compruebaRadio(id){}
    compruebaCheck(id){}
}
window.onload = function(){
    new formulario();
};