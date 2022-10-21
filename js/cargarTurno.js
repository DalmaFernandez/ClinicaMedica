import { cargarDatosEnFormulario } from "./editarTurno.js";
import { eliminarTurno } from "./eliminarTurno.js";
import { mostrarFecha } from "./fecha.js";

export const cargarTurnoTabla = (turno) => {
    const tablaTurnos= document.getElementById("tbody_turnos");

    const tr = document.createElement("tr");
    const tdId= document.createElement("td");
    // tdId.innerText = turno.id;
    // tr.appendChild(tdId);
    const tdPaciente = document.createElement("td");
    tdPaciente.innerText = turno.paciente;
    tr.appendChild(tdPaciente);
    // const tdEspecialidad = document.createElement("td");
    // tdEspecialidad.innerText = turno.especialidad;
    // tr.appendChild(tdEspecialidad);
    const tdMedico = document.createElement("td");
    tdMedico.innerText ="Dr/a. " + turno.medico + " - " + turno.especialidad;
    tr.appendChild(tdMedico);
    const tdFecha = document.createElement("td");
    tdFecha.innerText = mostrarFecha(turno.fecha);
    tr.appendChild(tdFecha);
    const tdHora = document.createElement("td");
    tdHora.innerText = turno.hora;
    tr.appendChild(tdHora);
    const tdNota = document.createElement("td");
    // tdNota.innerText = turno.nota;
    // tr.appendChild(tdNota);
    const tdAcciones = document.createElement("td");
    const buttonInfo = document.createElement("button");
    const buttonEditar = document.createElement("button");
    const buttonEliminar = document.createElement("button");
    buttonInfo.classList = "botonTarea";
    buttonEditar.classList = "botonTarea"
    buttonEliminar.classList = "botonTarea"
    buttonInfo.title= "Más información";
    buttonEditar.title = "Editar"
    buttonEliminar.title= "Eliminar"
    buttonInfo.onclick = () => {
        mostrarInfo(turno);
      };
    buttonEditar.onclick = () => {
        cargarDatosEnFormulario(turno.id);
        };
    buttonEliminar.onclick = () => {
        eliminarTurno(turno.id);
        };

    const iconInfo = document.createElement("i");
    const iconEditar = document.createElement("i");
    const iconEliminar = document.createElement("i");
    iconInfo.classList = "fa-solid fa-circle-info me-1";
    iconInfo.style.color = "#3085d6";
    iconEditar.classList = "fa-solid fa-pencil me-1";
    iconEditar.style.color = "#ffa500";
    iconEliminar.classList = "fa-solid fa-trash ";
    iconEliminar.style.color = "#d33";

    buttonInfo.appendChild(iconInfo);
    buttonEditar.appendChild(iconEditar);
    buttonEliminar.appendChild(iconEliminar);

    tdAcciones.appendChild(buttonInfo);
    tdAcciones.appendChild(buttonEditar);
    tdAcciones.appendChild(buttonEliminar);
    tr.appendChild(tdAcciones); 
    tablaTurnos.appendChild(tr);
}

const mostrarInfo = (turno) => {
    Swal.fire({
      title: "Información del turno",
      html: `<p><b>N°:</b> ${turno.id}</p>
        <p><b>Paciente:</b> ${turno.paciente}</p>
        <p><b>Especialidad:</b>  ${turno.especialidad}</p>
        <p><b>Médico:</b> Dr/a. ${turno.medico}</p>
        <p><b>Fecha:</b> ${mostrarFecha(turno.fecha)}</p>
        <p><b>Hora:</b> ${turno.hora}</p>
        <p><b>Nota:</b> ${turno.nota}</p>`,
        icon: "info",

    });
    };


