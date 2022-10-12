import { cargarMedicos, opcionHorario } from "./cargarOpciones.js";

const campoPaciente = document.getElementById("selectPaciente");
const campoEspecialidad = document.getElementById("selectEspecialidad");
const campoMedico = document.getElementById("selectMedico");
const campoFecha = document.getElementById("fechaTurno");
const campoHora = document.getElementById("selectHorario");
const campoNota = document.getElementById("notasTurno");
const botonCargar = document.getElementById("cargarTurno");

export const cargarDatosEnFormulario = (id) => {
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
    opcionHorarioEditar(turnoAModificar.hora);
    
    // campoHora.innerHTML = `<option value="${turnoAModificar.hora}">${turnoAModificar.hora}</option>`;
    
    campoNota.value = turnoAModificar.nota;

    botonCargar.innerText = "Guardar cambios";
    sessionStorage.setItem("idTurno", id);
}

export const opcionHorarioEditar = (horaEditar) => {
    const campoHora = document.getElementById("selectHorario");
    const campoFecha= document.getElementById("fechaTurno");
    const campoMedico = document.getElementById("selectMedico");
    campoHora.innerHTML = `<option value="${horaEditar}">${horaEditar}</option>`;

     
     let horarios = ["8:00", "9:00", "10:00", "11:00", "17:00", "18:00", "19:00"]; 
     let horariosOcupados = [];
     let horariosDisponibles = [];
     let fecha = campoFecha.value;
     let turnosLS = JSON.parse(localStorage.getItem("Lista de Turnos"));
     let turnosOcupados= [];
     console.log(turnosLS);
     console.log(fecha);
     console.log(campoMedico.value);
     if(turnosLS!=null){
        turnosOcupados = turnosLS.filter((turno) => {
        return turno.fecha == fecha && turno.medico == campoMedico.value;
     });
        }
        console.log("turnosOcupados");
        console.log(turnosOcupados);
     turnosOcupados.forEach((turno) => {
        horariosOcupados.push(turno.hora);
    });
    console.log(horariosOcupados);
 
     horarios.forEach((horario) => {
         console.log(horariosOcupados.includes(horario));
         console.log(horario);
         if (!horariosOcupados.includes(horario)) {
             horariosDisponibles.push(horario);
         } 
         
     });
     if(horariosDisponibles.length == 0){
         horariosDisponibles = horarios;
     }
 
 
     console.log(horariosDisponibles);
     horariosDisponibles.forEach((horario) => {
         const opcionHorario = document.createElement("option");
         opcionHorario.value = horario;
         opcionHorario.innerText = horario;
         campoHora.appendChild(opcionHorario);
     });
 }


    