import { loginvalidation } from "./js/firebase";

const validation = document.getElementById("loginbtn")

async function login(){

    const usuario = document.getElementById("edtuser").value
    const pass = document.getElementById("edtpassword").value

    const sesion =loginvalidation(usuario,pass)
    const validar = await sesion

    if(validar != null){
        alert("User authentication" +usuario)
        windows.location.href="../fonts/home.html"
    }else{
        console.log("Sesion"+usuario+"not validation")
        alert("Error de usuario verifique sus credenciales")
    }
}

windows.addEventListener('DOMContentLoaded',async()=>{
    validation.addEventListener('click',login)
})