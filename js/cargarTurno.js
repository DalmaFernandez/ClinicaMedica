import { cargarDatosEnFormulario } from "./editarTurno.js";
import { eliminarTurno } from "./eliminarTurno.js";

export const cargarTurnoTabla = (turno) => {
    const tablaTurnos= document.getElementById("tbody_turnos");

    const tr = document.createElement("tr");
    const tdId= document.createElement("td");
    tdId.innerText = turno.id;
    tr.appendChild(tdId);
    const tdPaciente = document.createElement("td");
    tdPaciente.innerText = turno.paciente;
    tr.appendChild(tdPaciente);
    const tdEspecialidad = document.createElement("td");
    tdEspecialidad.innerText = turno.especialidad;
    tr.appendChild(tdEspecialidad);
    const tdMedico = document.createElement("td");
    tdMedico.innerText ="Dr/a. " + turno.medico;
    tr.appendChild(tdMedico);
    const tdFecha = document.createElement("td");
    tdFecha.innerText = turno.fecha;
    tr.appendChild(tdFecha);
    const tdHora = document.createElement("td");
    tdHora.innerText = turno.hora;
    tr.appendChild(tdHora);
    const tdNota = document.createElement("td");
    tdNota.innerText = turno.nota;
    tr.appendChild(tdNota);
    const tdAcciones = document.createElement("td");
    const botonEditar = document.createElement("button");
    const botonEliminar = document.createElement("button");
    botonEditar.classList.add("btn", "btn-warning", "btn-sm", "mr-2");
    botonEliminar.classList.add("btn", "btn-danger", "btn-sm");
    botonEditar.innerText = "Editar";
    botonEliminar.innerText = "Eliminar";
    botonEditar.addEventListener("click", () => {
        cargarDatosEnFormulario(turno.id);
    });
    botonEliminar.addEventListener("click", () => {
        eliminarTurno(turno.id);
    });
    tdAcciones.appendChild(botonEditar);
    tdAcciones.appendChild(botonEliminar);
    tr.appendChild(tdAcciones); 
    tablaTurnos.appendChild(tr);
}




