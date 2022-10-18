const administrador = document.getElementById("administrador");


const clave= "1234";
const campoClave= document.getElementById("claveDeAcceso");
const formularioAcceso = document.getElementById("formularioAcceso");
const botonAdmin = document.getElementById("botonAdmin");
const modalAcceso = document.getElementById("accederAdmin");
const mainAdmin = document.getElementsByClassName("mainAdmin");
let acceso = false;
let claveIngresada= "";

campoClave.addEventListener("blur",(e)=>{
claveIngresada = e.target.value;
});
formularioAcceso.addEventListener("submit",(e)=>{
    e.preventDefault();
    if ( claveIngresada === clave){
    acceso = true;
    sessionStorage.setItem("acceso", acceso);
    window.open("./adminPrincipal.html");
    sessionStorage.removeItem("acceso");
   window.location.reload();  
    
    //    botonAdmin.style.visibility = "hidden"
    //     administrador.style.visibility= "visible"; //"visible"
    }
    else{
        campoClave.classList.add("is-invalid");
         
        
    }
})

