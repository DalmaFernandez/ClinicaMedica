import { Medico } from "./Medico.js";

export const opcionesPaciente = () => {
    let pacientes = JSON.parse(localStorage.getItem("Lista de pacientes"));
    console.log(pacientes);
    const campoPaciente = document.getElementById("selectPaciente");
    pacientes.forEach((paciente) => {
        const opcionPaciente = document.createElement("option");
        opcionPaciente.value = paciente.apellido + ", " + paciente.nombre;
        opcionPaciente.innerText = paciente.apellido + ", " + paciente.nombre;
        campoPaciente.appendChild(opcionPaciente);
    });
};

export const cargarMedicos = ()=> {
    const campoMedico = document.getElementById("selectMedico");
    const campoEspecialidad = document.getElementById("selectEspecialidad");
    campoMedico.innerHTML = `<option value="0">Seleccione un médico</option>`;
    let medico;
    let especialidad= campoEspecialidad.value;
    let medicos = JSON.parse(localStorage.getItem("Lista de medicos"));
    switch (especialidad) {
        case "Cardiología":
            medico = medicos[0];
            break;
        case "Dermatología":
            medico = medicos[1];
            break;
        case "Ginecología":
            medico = medicos[2];
            break;
        case "Odontología":
            medico = medicos[3];
            break;
        case "Pediatría":
            medico =  medicos[4];
            break;
        case "Traumatología":
            medico =  medicos[5];
            break;
        default: 
        break
    }
    console.log(especialidad);
    console.log(medico);
   
    const opcionMedico = document.createElement("option");
    opcionMedico.value = medico.nombre;
    opcionMedico.innerText = `Dr/a. ${medico.nombre}`;
    campoMedico.appendChild(opcionMedico);


}

export const opcionHorario = () => {
    const campoHora = document.getElementById("selectHorario");
    const campoFecha= document.getElementById("fechaTurno");
    const campoMedico = document.getElementById("selectMedico");
     
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
        // horariosDisponibles = horarios; PONER UN MJE QUE DIGA Q NO HAY TURNOS DISPONIBLES
     }
 
 
     console.log(horariosDisponibles);
     horariosDisponibles.forEach((horario) => {
         const opcionHorario = document.createElement("option");
         opcionHorario.value = horario;
         opcionHorario.innerText = horario;
         campoHora.appendChild(opcionHorario);
     });
 }



