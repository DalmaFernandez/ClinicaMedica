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





let turnosLS = JSON.parse(localStorage.getItem("Lista de Turnos"));
let turnos = [];

if (turnosLS != null) {
  turnos = turnosLS;
  turnos.forEach(elemento => {
   cargarTurnoTabla(elemento);
  });
}



opcionesPaciente();

campoPaciente.addEventListener("blur", () => {
    validateSelector(campoPaciente.value, campoPaciente);  
    if (validateSelector(campoPaciente.value, campoPaciente)) {
        paciente = campoPaciente.value;
    }
});
campoEspecialidad.addEventListener("blur", () => {
    validateSelector(campoEspecialidad.value, campoEspecialidad);
    if (validateSelector(campoEspecialidad.value, campoEspecialidad)) {
        especialidad = campoEspecialidad.value;
        cargarMedicos();
    }
});
campoMedico.addEventListener("blur", () => {
    validateSelector(campoMedico.value, campoMedico);
    if (validateSelector(campoMedico.value, campoMedico)) {
        medico = campoMedico.value;
    }
});
campoFecha.addEventListener("blur", () => {
    validateDate(campoFecha.value, campoFecha);
    console.log(campoFecha.value);
    if(validateDate(campoFecha.value, campoFecha)) {
        fecha = campoFecha.value;
        campoHora.innerHTML = `<option value="0">Seleccione el horario</option>`;
        opcionHorario();
    }
});


campoHora.addEventListener("blur", () => {
    
    validateDate(campoHora.value, campoHora);
   
    if(validateSelector(campoHora.value, campoHora)) {
    hora = campoHora.value;
    }
});
campoNota.addEventListener("blur", () => {
    nota= campoNota.value;
    console.log(nota);
});

const agregarTurnoLS = (turno) => {
    turnos.unshift(turno);
    localStorage.setItem("Lista de Turnos", JSON.stringify(turnos));
};

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
    nota = campoNota.value;


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
            
            console.log(isEditando);
            
            const turnoId =Number(sessionStorage.getItem("idTurno"));
            sessionStorage.removeItem("idTurno");

            const turnoIndice = turnos.findIndex((turno) => {
              return  turno.id === turnoId;


        
            });
            console.log(turnos[turnoIndice]);
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
// Resetear formulario
        paciente = "";
        especialidad = "";
        medico = "";
        fecha = "";
        hora = "";
        nota = "";

        campoPaciente.value = "0";
        campoEspecialidad.value = "0";
        campoMedico.value = "0";
        campoFecha.value = "";
        campoHora.value = "0";
        campoNota.value = "";

        campoMedico.innerHTML = `<option value="0">Seleccione un médico</option>`;
        campoHora.innerHTML = `<option value="0">Seleccione una hora</option>`;

        campoPaciente.classList.remove("is-valid");
        campoEspecialidad.classList.remove("is-valid");
        campoMedico.classList.remove("is-valid");
        campoFecha.classList.remove("is-valid");
        campoHora.classList.remove("is-valid");
        

        
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








