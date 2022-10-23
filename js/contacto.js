import { validateEmail, validateName, validateString } from "./validators.js"
const formularioContacto = document.getElementById("formularioContacto")

const camponombre = document.getElementById("campoNombre")
const campoemail = document.getElementById("campoEmail")
const campomensaje = document.getElementById("campoMensaje")
let nombre = ""
let email = ""
let mensaje = ""

camponombre.addEventListener("blur",(e)=>{
    if(validateName(e.target.value,camponombre)){
        nombre=e.target.value        
    }
})

campoemail.addEventListener("blur",(e)=>{
    if(validateEmail(e.target.value,campoemail)){
        email=e.target.value
    }
})
campomensaje.addEventListener("blur",(e)=>{
   if(validateString(e.target.value,campomensaje)){
        mensaje=e.target.value
   }
})

formularioContacto.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(validateName(nombre,camponombre)&&validateEmail(email,campoemail)&&(validateString(mensaje,campomensaje))){
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado',
          })
          formularioContacto.reset()
          camponombre.classList.remove("is-valid")
          campoemail.classList.remove("is-valid")
          campomensaje.classList.remove("is-valid")

    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Mensaje no enviado',
          })
    }
})

