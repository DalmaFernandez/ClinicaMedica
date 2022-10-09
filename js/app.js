const administrador = document.getElementById("administrador");


const clave= "1234";
const campoClave= document.getElementById("claveDeAcceso");
const formularioAcceso = document.getElementById("formularioAcceso");
const botonAdmin = document.getElementById("botonAdmin");
const modalAcceso = document.getElementById("accederAdmin");
let claveIngresada= "";

campoClave.addEventListener("blur",(e)=>{
claveIngresada = e.target.value;
});
formularioAcceso.addEventListener("submit",(e)=>{
    e.preventDefault();
    if ( claveIngresada === clave){
      
    window.open("./administrador.html");
    window.location.reload();  
    //    botonAdmin.style.visibility = "hidden"
    //     administrador.style.visibility= "visible"; //"visible"
    }
    else{
        campoClave.classList.add("is-invalid");
         
        
    }
})

