import { cargarMedicos, opcionHorario } from "./cargarOpciones.js";

const campoPaciente = document.getElementById("selectPaciente");
const campoEspecialidad = document.getElementById("selectEspecialidad");
const campoMedico = document.getElementById("selectMedico");
const campoFecha = document.getElementById("fechaTurno");
const campoHora = document.getElementById("selectHorario");
const campoNota = document.getElementById("notasTurno");
const botonCargar = document.getElementById("cargarTurno");

export const cargarDatosEnFormulario = (id) => {
    campoPaciente.classList.remove("is-valid");
      campoPaciente.classList.remove("is-invalid");
    campoEspecialidad.classList.remove("is-valid");
    campoEspecialidad.classList.remove("is-invalid");
    campoMedico.classList.remove("is-valid");
    campoMedico.classList.remove("is-invalid");
    campoFecha.classList.remove("is-valid");
    campoFecha.classList.remove("is-invalid");
    campoHora.classList.remove("is-valid");
    campoHora.classList.remove("is-invalid");
    const turnos= JSON.parse(localStorage.getItem("Lista de Turnos"));
    const turnoAModificar = turnos.find(turno => {
        return turno.id == id;
    }
    );
    campoPaciente.value = turnoAModificar.paciente;
    campoEspecialidad.value = turnoAModificar.especialidad;
    cargarMedicos();
    campoMedico.value = turnoAModificar.medico;
    campoFecha.value = turnoAModificar.fecha;
    campoHora.innerHTML = `<option value="${turnoAModificar.hora}">${turnoAModificar.hora}</option>`;
    opcionHorario();
    
    campoNota.value = turnoAModificar.nota;

    botonCargar.innerText = "Guardar cambios";
    sessionStorage.setItem("idTurno", id);
}



    