const campoNombre = document.getElementById("nombrePaciente");
const campoApellido = document.getElementById("apellidoPaciente");
const campoDNI = document.getElementById("dniPaciente");
const campoFecha = document.getElementById("fechaNacimiento");
const campoSexo = document.getElementById("selectSexo");
const campoObraSocial = document.getElementById("selectObraSocial");
const campoTelefono = document.getElementById("telefonoPaciente");
const campoDomicilio = document.getElementById("domicilioPaciente");
const campoEmail = document.getElementById("emailPaciente");


export const cargarDatosEnFormulario = (dni) => {

campoNombre.classList.remove("is-invalid");
campoNombre.classList.remove("is-valid");
campoApellido.classList.remove("is-invalid");
campoApellido.classList.remove("is-valid");
campoDNI.classList.remove("is-invalid");
campoDNI.classList.remove("is-valid");
campoFecha.classList.remove("is-invalid");
campoFecha.classList.remove("is-valid");
campoSexo.classList.remove("is-invalid");
campoSexo.classList.remove("is-valid");
campoObraSocial.classList.remove("is-invalid");
campoObraSocial.classList.remove("is-valid");
campoTelefono.classList.remove("is-invalid");
campoTelefono.classList.remove("is-valid");
campoDomicilio.classList.remove("is-invalid");
campoDomicilio.classList.remove("is-valid");
campoEmail.classList.remove("is-invalid");
campoEmail.classList.remove("is-valid");

  const pacientes = JSON.parse(localStorage.getItem("Lista de pacientes"));

  const pacienteAModificar = pacientes.find((elemento) => {
    return elemento.dni === dni;
  });
//Refleja en el formulario todos los datos del paciente encontrado por DNI

  campoNombre.value = pacienteAModificar.nombre;
  campoApellido.value = pacienteAModificar.apellido;
  campoDNI.value = pacienteAModificar.dni;
  campoFecha.value = pacienteAModificar.fn;
  campoSexo.value = pacienteAModificar.sexo;
  campoObraSocial.value = pacienteAModificar.os;
  campoTelefono.value = pacienteAModificar.telefono;
  campoDomicilio.value = pacienteAModificar.domicilio;
  campoEmail.value = pacienteAModificar.email;
  

  buttonCargar.innerText = "Guardar cambios";
//guardar el dni del paciente a editar en el SS
 sessionStorage.setItem("dni del paciente a editar", dni);
};
