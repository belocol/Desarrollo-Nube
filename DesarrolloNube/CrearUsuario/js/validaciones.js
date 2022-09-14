function validaciones(){
   
    var n;

    n=document.getElementById("nombres").value;
    a=document.getElementById("Apellidos").value;
    c=document.getElementById("Celular").value;
    d=document.getElementById("NumIdentidad").value;
    e= document. getElementById("CorreoInstitucional").value;
    c1=document. getElementById("password").value;
    c2=document.getElementById("password2").value;
    cre=document.getElementById("Aceptar").value ;
    valido=document.getElementById("campoOK").value;


    var expresionEmail = /\w+@\w+\.+[a-z]/;
    var expresionNombres= /^[a-z ,.'-]+$/i;
    var expresionApellidos= /^[a-z ,.'-]+$/i;
    var expresionNumIdentidad =/^\d{8,10}$/;
    var expresionpassword= /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
    var expresionesemail= /^\w+([\.-]?\w+)*@(unitropico)\.(?:|com|es)/;
    
    if(n ==""|| a==""||c==""||d==""||e==""||c1==""||c2=="") {

        alert("Por favor rellene todos los campos" );
        return false;
    }

    if(!expresionesemail.test(e)){
        alert('Ingrese el correo electronico institucional')
        return false;
    }
    
    if(n.length>20) {
        alert("los nombres ingresados exceden el numero de caracteres");
        
        return false;
    }
    else if(a.length>20) {
        alert("los apellidos ingresados exceden el numero de caracteres");
        return false;
    } 

    else if(!expresionNombres.test(n)){
        alert("Nombre invalido ");
        return false;}
    
    else if(!expresionApellidos.test(a)){
            alert("Apellido invalido ");

            return false;}

         
            else if(!expresionNumIdentidad.test(numid)){
                alert("Numero de documento invalido");
                return false;
            }
    else if(!expresionNumIdentidad.test(c)){
          alert("Numero de celular invalido");
           return false;
          }

    else if(!expresionEmail.test(e)){
         alert("Correo electronico invalido");
             return false;
                }
    else if(!expresionpassword.test(c1)){
        alert("Contraseña inválida")
        document.getElementById("error-contra").classList.add("mostrar");
        return false;
    }

                if(c1!=c2){
                    document.getElementById("error").classList.add("mostrar");
                    return false;
            
                }else{
                // Si las contraseñas coinciden ocultamos el mensaje de error
                document.getElementById("error").classList.remove("mostrar");
                
                // Mostramos un mensaje mencionando que las Contraseñas coinciden 
                document.getElementById("ok").classList.remove("ocultar");
            
                // Desabilitamos el botón de login 
                document.getElementById("btnenviar").disabled = true;
            
                // Refrescamos la página (Simulación de envío del formulario) 
                setTimeout(function() {
                    location.reload();
                }, 800);
            
                return true;
            }        
}
