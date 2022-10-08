import { cargarPacienteTabla } from "./cargarPaciente.js";
import { Paciente } from "./Paciente.js";
import { validateEmail, validateName, validateNumber } from "./validators.js";

//const paciente1 = new Paciente ("Dalma", "Fernandez", "5451564652","15/2/96", "F", "SS", "64982564","Buenos Aires 500", "dalma@gmail.com","nada");
//console.log(paciente1);
const formularioPaciente = document.getElementById("formPaciente");

const campoNombre = document.getElementById("nombrePaciente");
const campoApellido = document.getElementById("apellidoPaciente");
const campoDNI = document.getElementById("dniPaciente");
const campoFecha = document.getElementById("fechaNacimiento");
const campoSexo = document.getElementById("selectSexo");
const campoObraSocial = document.getElementById("selectObraSocial");
const campoTelefono = document.getElementById("telefonoPaciente");
const campoDomicilio = document.getElementById("domicilioPaciente");
const campoEmail = document.getElementById("emailPaciente");
const campoDescripcion = document.getElementById("descripcionPaciente");

const buttonCargar = document.getElementById("buttonCargar");

let nombre = "";
let apellido = "";
let dni = "";
let fn = "";
let sexo = "";
let os = "";
let telefono = "";
let domicilio = "";
let email = "";
let descripcion = "";

let pacientesLSJSON = localStorage.getItem("Lista de pacientes");

let pacientesLS = JSON.parse(pacientesLSJSON);
//console.log(contactosLS)

let pacientes = [];

if (pacientesLS !== null) {
  pacientes = pacientesLS;

  pacientes.forEach((elemento) => {
    cargarPacienteTabla(elemento);
  });
}

//const paciente1= new Paciente(nombre, apellido, dni, fn, sexo, os, telefono, domicilio, email, descripcion);
//console.log(paciente1);
campoNombre.addEventListener("blur", (e) => {
  if (validateName(e.target.value, campoNombre)) {
    //  console.log(e);
    nombre = e.target.value;
  }
});
campoApellido.addEventListener("blur", (e) => {
  if (validateName(e.target.value, campoApellido)) {
    apellido = e.target.value;
  }
});

campoDNI.addEventListener("blur", (e) => {
  if (validateNumber(e.target.value, campoDNI)) {
    dni = e.target.value;
  }
});

campoFecha.addEventListener("blur", (e) => {
  fn = e.target.value;
});

campoSexo.addEventListener("blur", (e) => {
  sexo =e.target.value;
});

campoObraSocial.addEventListener("blur", (e) => {
  os = e.target.value;
});

campoTelefono.addEventListener("blur", (e) => {
  if (validateNumber(e.target.value, campoTelefono)) {
    telefono = e.target.value;
  }
});

campoDomicilio.addEventListener("blur", (e) => {
  if (validateName(e.target.value, campoDomicilio)) {
    //  console.log(e);
    domicilio = e.target.value;
  }
});

campoEmail.addEventListener("blur", (e) => {
  if (validateEmail(e.target.value, campoEmail)) {
    email = e.target.value;
  }
});

campoDescripcion.addEventListener("blur", (e) => {
  descripcion = e.target.value;
});



const agregarPacienteALS = (paciente) => {
    // agrego contacto a la lista
    pacientes.unshift(paciente);
    //console.log(contactos)
  
    // JavaScript Object Notation
    const pacientesJSON = JSON.stringify(pacientes);
    //console.log(contactosJSON);
  
    localStorage.setItem("Lista de pacientes", pacientesJSON);
  };



formularioPaciente.addEventListener("submit", (e) => {
  e.preventDefault();

 if ( 
    validateName(nombre, campoNombre) &&
    validateName(apellido, campoApellido) &&
    validateNumber(dni, campoDNI) &&
    validateNumber(telefono, campoTelefono) &&
    validateName(domicilio, campoDomicilio) &&
    validateEmail(email, campoEmail) 
    ){
        const paciente = new Paciente(
            nombre,
            apellido,
            dni,
            fn,
            sexo,
            os,
            telefono,
            domicilio,
            email,
            descripcion
          );

          
          agregarPacienteALS(paciente);
          recargarDatos();
        
          console.log(paciente);
    } else {
        console.log("Algun dato no es valido");
    }


  
});

export const recargarDatos = () => {
    const pacientesLS = JSON.parse(localStorage.getItem("Lista de pacientes"));
  
    //vaciar tabla
    const tbody = document.getElementById("tbody__admin");
  
    tbody.innerHTML = "";
  
    // crear nuevas filas
    pacientesLS.forEach((elemento) => {
        cargarPacienteTabla(elemento);
    });
  };
