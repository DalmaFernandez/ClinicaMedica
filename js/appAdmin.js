const acceso = sessionStorage.getItem("acceso");
const volverAInicio = document.getElementsByClassName("volverAinicio");
const mainAdmin = document.getElementById("mainAdmin");
mainAdmin.classList.add("d-none");
if (acceso === "true"){
    mainAdmin.classList.remove("d-none");
}else{
 // window.open("./index.html", "_self");
}
console.log(volverAInicio);

for (let i = 0; i < volverAInicio.length; i++) {
    volverAInicio[i].addEventListener("click", (e) => {
        e.preventDefault();
        Swal.fire({
            title: "¿Estas seguro?",
            text: "Se cerrará el panel de administrador",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, estoy seguro",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                window.open("./index.html", "_self");
                sessionStorage.removeItem("acceso");    
    }
        });
    });
}

let turnos = [];
let turnosLS = JSON.parse(localStorage.getItem("Lista de Turnos"));
const tablaTurnos = document.getElementById("turnosPrincipal");
if (turnosLS.length > 0) {
    turnos = turnosLS;
    

}else{
    const mensaje = document.createElement("p");
    mensaje.innerText = "No hay turnos programados";
    mensaje.classList.add("text-center");
    tablaTurnos.appendChild(mensaje);
}
const mostrarTurnos = (turnos) => {
    turnos.sort((a,b)=>a.hora.split(":")[0]-b.hora.split(":")[0]);

turnos.sort((a, b) => {
    if (a.fecha > b.fecha) {
      return 1;
    }
    if  (a.fecha < b.fecha) {
      return -1;
    }
   
    return 0;
    });



turnos.forEach((turno) => {
    const divCard = document.createElement("div");
    divCard.classList.add("p-1", "col-md-4","col-sm-12");
    const card = document.createElement("div");
    card.classList = "card px-0";
    const cardHeader = document.createElement("div");
    cardHeader.classList = "card-header";
    cardHeader.innerText = "Fecha: " + turno.fecha + " Hora: " + turno.hora;
    card.appendChild(cardHeader);
    const lista = document.createElement("ul");
    lista.classList = "list-group list-group-flush";
    const item1 = document.createElement("li");
    item1.classList = "list-group-item";
    item1.innerText = "Paciente: " + turno.paciente;
    lista.appendChild(item1);
    const item2 = document.createElement("li");
    item2.classList = "list-group-item";
    item2.innerText = "Médico: Dr/a. " + turno.medico;
    lista.appendChild(item2);
    const item3 = document.createElement("li");
    item3.classList = "list-group-item";
    item3.innerText = "Especialidad: " + turno.especialidad;
    lista.appendChild(item3);
    const item4 = document.createElement("li");
    item4.classList = "list-group-item";
    item4.innerText = "Nota: " + turno.nota;
    lista.appendChild(item4);
    const item5 = document.createElement("li");
    item5.classList = "list-group-item";
    item5.innerText = "ID: " + turno.id;
    lista.appendChild(item5);
    card.appendChild(lista);
    divCard.appendChild(card);
    tablaTurnos.appendChild(divCard);
});
};
mostrarTurnos(turnos);

const formPaciente = document.getElementById("formFiltroPaciente");
const campoFiltroPaciente = document.getElementById("filtroPaciente");
const formMedico = document.getElementById("formFiltroMedico");
const campoFiltroMedico = document.getElementById("filtroMedico");
const botonFiltraPaciente = document.getElementById("buttonFiltrarPaciente");
const botonFiltraMedico = document.getElementById("buttonFiltrarMedico");

const opcionesPaciente = () => {
    let pacientes = JSON.parse(localStorage.getItem("Lista de pacientes"));
    console.log(pacientes);
    const campoFiltroPaciente = document.getElementById("filtroPaciente");
    pacientes.forEach((paciente) => {
        const opcionPaciente = document.createElement("option");
        opcionPaciente.value = paciente.apellido + ", " + paciente.nombre;
        opcionPaciente.innerText = paciente.apellido + ", " + paciente.nombre;
        campoFiltroPaciente.appendChild(opcionPaciente);
    });
};

const opcionesMedico = () => {
    let medicos = JSON.parse(localStorage.getItem("Lista de medicos"));
    console.log(medicos);
    const campoFiltroMedico = document.getElementById("filtroMedico");
    medicos.forEach((medico) => {
        const opcionMedico = document.createElement("option");
        opcionMedico.value = medico.nombre;
        opcionMedico.innerText = "Dr/a. " + medico.nombre + " - " + medico.especialidad;
        campoFiltroMedico.appendChild(opcionMedico);
    });
};

opcionesPaciente();
opcionesMedico();

formMedico.addEventListener("submit", (e) => {
    e.preventDefault();
    tablaTurnos.innerHTML = "";
    const filtroMedico = campoFiltroMedico.value;
    console.log(filtroMedico);
  let  turnosFiltrados = turnos.filter((turno) => {
        return turno.medico === filtroMedico 
    });
    console.log(turnosFiltrados);
    if (turnosFiltrados.length > 0) {
    mostrarTurnos(turnosFiltrados);
    }else{
        const mensaje = document.createElement("p");
        mensaje.innerText = "No hay turnos programados para el médico seleccionado";
        mensaje.classList.add("text-center");
        tablaTurnos.appendChild(mensaje);
    }
   
});

formPaciente.addEventListener("submit", (e) => {
    e.preventDefault();
    tablaTurnos.innerHTML = "";
    const filtroPaciente = campoFiltroPaciente.value;
    console.log(filtroPaciente);
    let turnosFiltrados = turnos.filter((turno) => {
        return turno.paciente === filtroPaciente
    });
    console.log(turnosFiltrados);
    if (turnosFiltrados.length > 0) {
        mostrarTurnos(turnosFiltrados);
    }else{
        const mensaje = document.createElement("p");
        mensaje.innerText = "No hay turnos programados para el paciente seleccionado";
        mensaje.classList.add("text-center");
        tablaTurnos.appendChild(mensaje);
    }
});







