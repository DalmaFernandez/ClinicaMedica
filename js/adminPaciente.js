import { cargarPacienteTabla } from "./cargarPaciente.js";
import { Paciente } from "./Paciente.js";
import {
  validateDate,
  validateEmail,
  validateName,
  validateNumber,
  validateSelector,
  validateString,
} from "./validators.js";

const formularioPaciente = document.getElementById("formPaciente");

const campoNombre = document.getElementById("nombrePaciente");
const campoApellido = document.getElementById("apellidoPaciente");
const campoDNI = document.getElementById("dniPaciente");
const campoFecha = document.getElementById("fechaNacimiento");
campoFecha.setAttribute("max", new Date().toISOString().split("T")[0]);
const campoSexo = document.getElementById("selectSexo");
const campoObraSocial = document.getElementById("selectObraSocial");
const campoTelefono = document.getElementById("telefonoPaciente");
const campoDomicilio = document.getElementById("domicilioPaciente");
const campoEmail = document.getElementById("emailPaciente");

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

let pacientesLSJSON = localStorage.getItem("Lista de pacientes");

let pacientesLS = JSON.parse(pacientesLSJSON);

let pacientes = [];

if (pacientesLS !== null) {
  pacientes = pacientesLS;

  pacientes.forEach((elemento) => {
    cargarPacienteTabla(elemento);
  });
}

campoNombre.addEventListener("blur", (e) => {
  if (validateName(e.target.value, campoNombre)) {
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
  if (validateDate(e.target.value, campoFecha)) {
    fn = e.target.value;
  }
});

campoSexo.addEventListener("blur", (e) => {
  if (validateSelector(e.target.value, campoSexo)) {
    sexo = e.target.value;
  }
});

campoObraSocial.addEventListener("blur", (e) => {
  if (validateSelector(e.target.value, campoObraSocial)) {
    os = e.target.value;
  }
});

campoTelefono.addEventListener("blur", (e) => {
  if (validateNumber(e.target.value, campoTelefono)) {
    telefono = e.target.value;
  }
});

campoDomicilio.addEventListener("blur", (e) => {
  if (validateString(e.target.value, campoDomicilio)) {
    domicilio = e.target.value;
  }
});

campoEmail.addEventListener("blur", (e) => {
  if (validateEmail(e.target.value, campoEmail)) {
    email = e.target.value;
  }
});

const agregarPacienteALS = (paciente) => {
  pacientes.unshift(paciente);

  const pacientesJSON = JSON.stringify(pacientes);

  localStorage.setItem("Lista de pacientes", pacientesJSON);
};

formularioPaciente.addEventListener("submit", (e) => {
  e.preventDefault();

  let isEditando;

  if (buttonCargar.innerText === "Guardar cambios") {
    isEditando = true;
  } else isEditando = false;
  nombre = campoNombre.value;
  apellido = campoApellido.value;
  dni = campoDNI.value;
  fn = campoFecha.value;
  sexo = campoSexo.value;
  os = campoObraSocial.value;
  telefono = campoTelefono.value;
  domicilio = campoDomicilio.value;
  email = campoEmail.value;

  if (
    validateName(nombre, campoNombre) &&
    validateName(apellido, campoApellido) &&
    validateNumber(dni, campoDNI) &&
    validateDate(fn, campoFecha) &&
    validateNumber(telefono, campoTelefono) &&
    validateString(domicilio, campoDomicilio) &&
    validateEmail(email, campoEmail)
  ) {
    // si isEditando es false, estamos creando un nuevo paciente
    if (isEditando === false) {
      const paciente = new Paciente(
        nombre,
        apellido,
        dni,
        fn,
        sexo,
        os,
        telefono,
        domicilio,
        email
      );

      agregarPacienteALS(paciente);
      Swal.fire({
        title: "Exito",
        text: "El paciente se cargó exitosamente",
        icon: "success",
      });
    } else {
      //esta editando el paciente y ya tenemos valores cargados en el formulario

      const dniEdit = sessionStorage.getItem("dni del paciente a editar");

      sessionStorage.removeItem("dni del paciente a editar");
      pacientes = JSON.parse(localStorage.getItem("Lista de pacientes"));

      const pacienteIndice = pacientes.findIndex((elemento) => {
        return elemento.dni === dniEdit;
      });
      if (pacienteIndice === -1) {
        Swal.fire({
          title: "Error!",
          text: "No se ha encontrado el paciente",
          icon: "error",
        });
      } else {
        // modificando en el arreglo pacientes un solo elemento, el del paciente que tiene el dniEdit (guardado en SS)
        pacientes[pacienteIndice].nombre = nombre;
        pacientes[pacienteIndice].apellido = apellido;
        pacientes[pacienteIndice].dni = dni;
        pacientes[pacienteIndice].fn = fn;
        pacientes[pacienteIndice].sexo = sexo;
        pacientes[pacienteIndice].os = os;
        pacientes[pacienteIndice].telefono = telefono;
        pacientes[pacienteIndice].domicilio = domicilio;
        pacientes[pacienteIndice].email = email;

        localStorage.setItem("Lista de pacientes", JSON.stringify(pacientes));

        Swal.fire({
          title: "Exito",
          text: "Los datos del paciente fueron modificados",
          icon: "success",
        });
      }

      buttonCargar.innerText = "Cargar";
    }

    recargarDatos();

    campoNombre.value = "";
    campoApellido.value = "";
    campoDNI.value = "";
    campoFecha.value = "";
    campoSexo.value = "0";
    campoObraSocial.value = "0";
    campoTelefono.value = "";
    campoDomicilio.value = "";
    campoEmail.value = "";

    nombre = "";
    apellido = "";
    dni = "";
    fn = "";
    sexo = "";
    os = "";
    telefono = "";
    domicilio = "";
    email = "";

    campoNombre.classList.remove("is-valid");
    campoApellido.classList.remove("is-valid");
    campoDNI.classList.remove("is-valid");
    campoFecha.classList.remove("is-valid");
    campoSexo.classList.remove("is-valid");
    campoObraSocial.classList.remove("is-valid");
    campoTelefono.classList.remove("is-valid");
    campoDomicilio.classList.remove("is-valid");
    campoEmail.classList.remove("is-valid");
  } else {
    Swal.fire({
      title: "Error",
      text: "Revisa los campos",
      icon: "warning",
    });
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
