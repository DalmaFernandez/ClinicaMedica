import { scrollUp } from "./appAdmin.js";
import { cargarDatosEnFormulario } from "./editarTurno.js";
import { eliminarTurno } from "./eliminarTurno.js";
import { mostrarFecha } from "./fecha.js";

export const cargarTurnoTabla = (turno) => {
  const tablaTurnos = document.getElementById("tbody_turnos");

  const tr = document.createElement("tr");
  const tdId = document.createElement("td");

  const tdPaciente = document.createElement("td");
  tdPaciente.innerText = turno.paciente;
  tr.appendChild(tdPaciente);

  const tdMedico = document.createElement("td");
  tdMedico.innerText = "Dr/a. " + turno.medico + " - " + turno.especialidad;
  tr.appendChild(tdMedico);
  const tdFecha = document.createElement("td");
  tdFecha.innerText = mostrarFecha(turno.fecha) + " - " + turno.hora + " hs.";
  tr.appendChild(tdFecha);

  const tdNota = document.createElement("td");

  const tdAcciones = document.createElement("td");
  const buttonInfo = document.createElement("button");
  const buttonEditar = document.createElement("button");
  const buttonEliminar = document.createElement("button");
  buttonInfo.classList = "botonTarea";
  buttonEditar.classList = "botonTarea";
  buttonEliminar.classList = "botonTarea";
  buttonInfo.title = "Más información";
  buttonEditar.title = "Editar";
  buttonEliminar.title = "Eliminar";
  buttonInfo.onclick = () => {
    mostrarInfo(turno);
  };
  buttonEditar.onclick = () => {
    scrollUp();
    cargarDatosEnFormulario(turno.id);
  };
  buttonEliminar.onclick = () => {
    eliminarTurno(turno.id);
  };

  const iconInfo = document.createElement("i");
  const iconEditar = document.createElement("i");
  const iconEliminar = document.createElement("i");
  iconInfo.classList = "fa-solid fa-circle-info me-1 mb-3 fa-lg";
  iconInfo.style.color = "#3085d6";
  iconEditar.classList = "fa-solid fa-pencil me-1 mb-3 fa-lg";
  iconEditar.style.color = "#ffa500";
  iconEliminar.classList = "fa-solid fa-trash  mb-2 fa-lg ";
  iconEliminar.style.color = "#d33";

  buttonInfo.appendChild(iconInfo);
  buttonEditar.appendChild(iconEditar);
  buttonEliminar.appendChild(iconEliminar);

  tdAcciones.appendChild(buttonInfo);
  tdAcciones.appendChild(buttonEditar);
  tdAcciones.appendChild(buttonEliminar);
  tr.appendChild(tdAcciones);
  tablaTurnos.appendChild(tr);
};

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
