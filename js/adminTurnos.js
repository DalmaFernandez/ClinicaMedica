import { cargarMedicos, opcionesPaciente, opcionHorario } from "./cargarOpciones.js";
import { cargarTurnoTabla } from "./cargarTurno.js";
import { Medico } from "./Medico.js";
import { Turno } from "./Turno.js";
import { validateDate, validateSelector } from "./validators.js";

const formularioTurno = document.getElementById("formTurno");
const campoPaciente = document.getElementById("selectPaciente");
const campoEspecialidad = document.getElementById("selectEspecialidad");
const campoMedico = document.getElementById("selectMedico");
const campoFecha = document.getElementById("fechaTurno");
const campoHora = document.getElementById("selectHorario");
const campoNota = document.getElementById("notasTurno");

const botonCargar = document.getElementById("cargarTurno");

let paciente = "";
let especialidad = "";
let medico = "";
let fecha = "";
let hora = "";
let nota = "";


const especialidades = ["Cardiología", "Dermatología", "Ginecología", "Odontología", "Pediatría", "Traumatología"];


let turnosLS = JSON.parse(localStorage.getItem("Lista de Turnos"));
let turnos = [];

if (turnosLS != null) {
  turnos = turnosLS;
  turnos.forEach(elemento => {
   cargarTurnoTabla(elemento);
  });
}



opcionesPaciente();

campoPaciente.addEventListener("change", () => {
    validateSelector(campoPaciente.value, campoPaciente);  
    if (validateSelector(campoPaciente.value, campoPaciente)) {
        paciente = campoPaciente.value;
    }
});
campoEspecialidad.addEventListener("change", () => {
    validateSelector(campoEspecialidad.value, campoEspecialidad);
    if (validateSelector(campoEspecialidad.value, campoEspecialidad)) {
        especialidad = campoEspecialidad.value;
        cargarMedicos();
    }
});
campoMedico.addEventListener("change", () => {
    validateSelector(campoMedico.value, campoMedico);
    if (validateSelector(campoMedico.value, campoMedico)) {
        medico = campoMedico.value;
    }
});
campoFecha.addEventListener("change", () => {
    validateDate(campoFecha.value, campoFecha);
    console.log(campoFecha.value);
    if(validateDate(campoFecha.value, campoFecha)) {
        fecha = campoFecha.value;
       opcionHorario();
    }
});

campoHora.addEventListener("blur", () => {
    validateDate(campoHora.value, campoHora);
   
    if(validateSelector(campoHora.value, campoHora)) {
    hora = campoHora.value;
    }
});
campoNota.addEventListener("change", () => {
    nota= campoNota.value;
    console.log(nota);
});

const agregarTurnoLS = (turno) => {
    turnos.unshift(turno);
    localStorage.setItem("Lista de Turnos", JSON.stringify(turnos));
}

formularioTurno.addEventListener("submit", (e) => {
    e.preventDefault();
    let isEditando;

    if(botonCargar.innerText==="Guardar cambios") {
        isEditando = true;
    } else {
        isEditando = false;
    }   

    paciente = campoPaciente.value;
    especialidad = campoEspecialidad.value;
    medico = campoMedico.value;
    fecha = campoFecha.value;
    hora = campoHora.value;


    if (
        validateSelector(paciente, campoPaciente) &&
        validateSelector(especialidad, campoEspecialidad) &&
        validateSelector(medico, campoMedico) &&
        validateDate(fecha, campoFecha) &&
        validateSelector(hora, campoHora)
    ) {
        if (!isEditando){
            const turno = new Turno(paciente, especialidad, medico, fecha, hora, nota);
            agregarTurnoLS(turno);
            cargarTurnoTabla(turno);
            console.log(turno);
            
            Swal.fire({
                title: "Exito!",
                text: "El turno se ha cargado correctamente",
                icon: "success",

            });
        } else {
            
            const turnoId = sessionStorage.getItem("turnoId");
            sessionStorage.removeItem("turnoId");

            const turnoIndice = turnos.findIndex((turno) => {
                turno.id === turnoId;


        
            });
            turnos[turnoIndice].paciente = paciente;
            turnos[turnoIndice].especialidad = especialidad;
            turnos[turnoIndice].medico = medico;
            turnos[turnoIndice].fecha = fecha;
            turnos[turnoIndice].hora = hora;
            turnos[turnoIndice].nota = nota;

            localStorage.setItem("Lista de Turnos", JSON.stringify(turnos));
            Swal.fire({
                title: "Exito!",
                text: "El turno se ha editado correctamente",
                icon: "success",
            });

            botonCargar.innerText = "Cargar";

        }
        
        actualizarTabla();

        campoPaciente.value = "";
        campoEspecialidad.value = "";
        campoMedico.value = "";
        campoFecha.value = "";
        campoHora.value = "";
        campoNota.value = "";

        paciente = "";
        especialidad = "";
        medico = "";
        fecha = "";
        hora = "";
        nota = "";
}else{
    console.log(campoFecha.value);
    Swal.fire({
        title: "Error!",
        text: "Por favor, complete todos los campos",
        icon: "warning",
    });
}
});

export const actualizarTabla = () => {
    const turnosLS = JSON.parse(localStorage.getItem("Lista de Turnos"));

    const tablaTurnos = document.getElementById("tbody_turnos");
    tablaTurnos.innerHTML = "";
    turnosLS.forEach((turno) => {
        cargarTurnoTabla(turno);
    });
}








