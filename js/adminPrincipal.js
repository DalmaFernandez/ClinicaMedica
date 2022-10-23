
import { mostrarFecha } from "./fecha.js";
import { Medico } from "./Medico.js";
import { validateDate, validateSelector } from "./validators.js";
const cardiologo = new Medico(
  "4152",
  "Alba Fernández, Juan",
  "Cardiología",
  "381895632"
);
const dermatologo = new Medico(
  "3569",
  "D'Orta, Martín",
  "Dermatología",
  "381555444"
);
const ginecologo = new Medico(
  "6543",
  "Gonzalez, Jenny",
  "Ginecología",
  "381789654"
);
const odontologo = new Medico(
  "9876",
  "Fernández, Dalma",
  "Odontología",
  "381231654"
);
const pediatra = new Medico("2244", "Amin, Ezequiel", "Pediatría", "381620123");
const traumatologo = new Medico(
  "6543",
  "Martinez, Jimena",
  "Traumatología",
  "381789000"
);
let medicos = [
  cardiologo,
  dermatologo,
  ginecologo,
  odontologo,
  pediatra,
  traumatologo,
];
localStorage.setItem("Lista de medicos", JSON.stringify(medicos));

let turnos = [];
let turnosLS = JSON.parse(localStorage.getItem("Lista de Turnos"));
const tablaTurnos = document.getElementById("turnosPrincipal");

const mjeFiltro = document.getElementById("mjeFiltro");
if (turnosLS !== null && turnosLS.length !== 0) {
  turnos = turnosLS;
} else {
  const mensaje = document.createElement("p");
  mensaje.innerText = "No hay turnos programados";
  mensaje.classList.add("text-center", "fw-bold");
  mjeFiltro.appendChild(mensaje);
  
}


const datosPaciente = (dni) => {
  
  let pacientesLS= JSON.parse(localStorage.getItem("Lista de pacientes"));
  let paciente = pacientesLS.find((paciente) => paciente.dni === dni);
  const buttonInfo = document.createElement("button");
  buttonInfo.classList = "botonTarea";
  buttonInfo.title = "Más información";
  buttonInfo.onclick = () => {
    mostrarInfo(paciente);
  };
  const iconInfo = document.createElement("i");
  iconInfo.classList = "fa-solid fa-circle-info me-1 mb-3 fa-lg";
  iconInfo.style.color = "#3085d6";
  buttonInfo.appendChild(iconInfo);
  return buttonInfo;
};

const mostrarInfo = (paciente) => {
  Swal.fire({
    title: "Información del paciente",
    html: `<p><b>Nombre:</b> ${paciente.nombre}</p>
      <p><b>Apellido:</b> ${paciente.apellido}</p>
      <p><b>DNI:</b> ${paciente.dni}</p>
      <p><b>Fecha de nacimiento:</b> ${mostrarFecha(paciente.fn)}</p>
      <p><b>Sexo:</b> ${paciente.sexo}</p>
      <p><b>Obra social:</b> ${paciente.os}</p>
      <p><b>Teléfono:</b> ${paciente.telefono}</p>
      <p><b>Domicilio:</b> ${paciente.domicilio}</p>`,
    icon: "info",
  });
};




const mostrarTurnos = (turnos) => {
  turnos.sort((a, b) => a.hora.split(":")[0] - b.hora.split(":")[0]);

  turnos.sort((a, b) => {
    if (a.fecha > b.fecha) {
      return 1;
    }
    if (a.fecha < b.fecha) {
      return -1;
    }

    return 0;
  });

  turnos.forEach((turno) => {
    const divCard = document.createElement("div");
    divCard.classList.add("p-1", "col-md-4", "col-sm-12");
    const card = document.createElement("div");
    card.classList = "card px-0 shadow border-0";
    const cardHeader = document.createElement("div");
    cardHeader.classList =
      "card-header d-flex justify-content-around bg-dark opacity-75";
    const headerFecha = document.createElement("div");
    headerFecha.innerText = "Fecha: " + mostrarFecha(turno.fecha);
    const headerHora = document.createElement("div");
    headerHora.innerText = "Hora: " + turno.hora;
    cardHeader.appendChild(headerFecha);
    cardHeader.appendChild(headerHora);
    card.appendChild(cardHeader);
    const lista = document.createElement("ul");
    lista.classList = "list-group list-group-flush";
    const item1 = document.createElement("li");
    item1.classList = "list-group-item d-flex justify-content-between";
    
    item1.innerText = "Paciente: " + turno.paciente.split("-")[0];
    
    item1.appendChild(datosPaciente(turno.paciente.split(": ")[1]));
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
const formFecha = document.getElementById("formFiltroFecha");
const campoFiltroFecha = document.getElementById("filtroFecha");

const formQuitarFiltros = document.getElementById("formQuitarFiltros");

const opcionesPaciente = () => {
  let pacientes = [];
  pacientes = JSON.parse(localStorage.getItem("Lista de pacientes"));
  
  const campoFiltroPaciente = document.getElementById("filtroPaciente");
  if (pacientes !== null) {
    pacientes.sort((a, b) => {
      if (a.apellido > b.apellido) {
        return 1;
      }
      if (a.apellido < b.apellido) {
        return -1;
      }
      return 0;
    });
    pacientes.forEach((paciente) => {
      const opcionPaciente = document.createElement("option");
      opcionPaciente.value =
        paciente.apellido + ", " + paciente.nombre + " - DNI: " + paciente.dni;
      opcionPaciente.innerText =
        paciente.apellido + ", " + paciente.nombre + " - DNI: " + paciente.dni;
      campoFiltroPaciente.appendChild(opcionPaciente);
    });
  }
};

const opcionesMedico = () => {
  let medicos = JSON.parse(localStorage.getItem("Lista de medicos"));

  const campoFiltroMedico = document.getElementById("filtroMedico");
  medicos.forEach((medico) => {
    const opcionMedico = document.createElement("option");
    opcionMedico.value = medico.nombre;
    opcionMedico.innerText =
      "Dr/a. " + medico.nombre + " - " + medico.especialidad;
    campoFiltroMedico.appendChild(opcionMedico);
  });
};

opcionesPaciente();
opcionesMedico();

let filtroMedico = "0";
let filtroPaciente = "0";
let filtroFecha = "";

campoFiltroMedico.addEventListener("change", () => {
  validateSelector(campoFiltroMedico.value, campoFiltroMedico);
  if (validateSelector(campoFiltroMedico.value, campoFiltroMedico)) {
    filtroMedico = campoFiltroMedico.value;
  }
});
campoFiltroPaciente.addEventListener("change", () => {
  validateSelector(campoFiltroPaciente.value, campoFiltroPaciente);
  if (validateSelector(campoFiltroPaciente.value, campoFiltroPaciente)) {
    filtroPaciente = campoFiltroPaciente.value;
  }
});
campoFiltroFecha.addEventListener("change", () => {
  validateDate(campoFiltroFecha.value, campoFiltroFecha);
  if (validateDate(campoFiltroFecha.value, campoFiltroFecha)) {
    filtroFecha = campoFiltroFecha.value;
  }
});

formMedico.addEventListener("submit", (e) => {
  e.preventDefault();
  campoFiltroPaciente.classList.remove("is-invalid");
  campoFiltroFecha.classList.remove("is-invalid");
  if (validateSelector(campoFiltroMedico.value, campoFiltroMedico)) {
    tablaTurnos.innerHTML = "";
    filtroMedico = campoFiltroMedico.value;
    
    mjeFiltro.innerHTML = "";
    let turnosFiltrados = turnos.filter((turno) => {
      return turno.medico === filtroMedico;
    });
    
    if (turnosFiltrados.length > 0) {
      const p = document.createElement("p");
      p.innerText = "Turnos programados Dr/a. " + filtroMedico;
      p.classList.add("text-center", "fw-bold");
      mjeFiltro.appendChild(p);
      mostrarTurnos(turnosFiltrados);
    } else {
      const mensaje = document.createElement("p");
      mensaje.innerText =
        "No hay turnos programados para Dr/a. " + filtroMedico;
      mensaje.classList.add("text-center", "fw-bold");
      mjeFiltro.appendChild(mensaje);
    }

    campoFiltroMedico.value = "0";
    filtroMedico = "0";
    campoFiltroMedico.classList.remove("is-valid");
  } else {
    mjeFiltro.innerHTML = "";
    tablaTurnos.innerHTML = "";
    const mensaje = document.createElement("p");
    mensaje.innerText = "Por favor, seleccione un médico";
    mensaje.classList.add("text-center", "fw-bold");
    mjeFiltro.appendChild(mensaje);
  }
});

formPaciente.addEventListener("submit", (e) => {
  e.preventDefault();
  campoFiltroMedico.classList.remove("is-invalid");
  campoFiltroFecha.classList.remove("is-invalid");

  if (validateSelector(campoFiltroPaciente.value, campoFiltroPaciente)) {
    tablaTurnos.innerHTML = "";
    filtroPaciente = campoFiltroPaciente.value;
    
    mjeFiltro.innerHTML = "";
    let turnosFiltrados = turnos.filter((turno) => {
      return turno.paciente === filtroPaciente;
    });
    
    if (turnosFiltrados.length > 0) {
      const p = document.createElement("p");
      p.innerText = "Turnos programados para " + filtroPaciente;
      p.classList.add("text-center", "fw-bold");
      mjeFiltro.appendChild(p);
      mostrarTurnos(turnosFiltrados);
    } else {
      const mensaje = document.createElement("p");
      mensaje.innerText =
        "No hay turnos programados para el paciente " + filtroPaciente;
      mensaje.classList.add("text-center", "fw-bold");
      mjeFiltro.appendChild(mensaje);
    }
    campoFiltroPaciente.value = "0";
    filtroPaciente = "0";
    campoFiltroPaciente.classList.remove("is-valid");
  } else {
    mjeFiltro.innerHTML = "";
    tablaTurnos.innerHTML = "";
    const mensaje = document.createElement("p");
    mensaje.innerText = "Por favor, seleccione un paciente";
    mensaje.classList.add("text-center", "fw-bold");
    mjeFiltro.appendChild(mensaje);
  }
});

formFecha.addEventListener("submit", (e) => {
  e.preventDefault();
  campoFiltroMedico.classList.remove("is-invalid");
  campoFiltroPaciente.classList.remove("is-invalid");

  if (validateDate(campoFiltroFecha.value, campoFiltroFecha)) {
    tablaTurnos.innerHTML = "";
    filtroFecha = campoFiltroFecha.value;
    
    mjeFiltro.innerHTML = "";

    let turnosFiltrados = turnos.filter((turno) => {
      return turno.fecha === filtroFecha;
    });
    
    if (turnosFiltrados.length > 0) {
      const p = document.createElement("p");
      p.innerText =
        "Turnos programados para el día " + mostrarFecha(filtroFecha);
      p.classList.add("text-center", "fw-bold");
      mjeFiltro.appendChild(p);
      mostrarTurnos(turnosFiltrados);
    } else {
      const mensaje = document.createElement("p");
      mensaje.innerText =
        "No hay turnos programados para el día " + mostrarFecha(filtroFecha);
      mensaje.classList.add("text-center", "fw-bold");
      mjeFiltro.appendChild(mensaje);
    }
    campoFiltroFecha.value = "";
    filtroFecha = "";
    campoFiltroFecha.classList.remove("is-valid");
  } else {
    mjeFiltro.innerHTML = "";
    tablaTurnos.innerHTML = "";
    const mensaje = document.createElement("p");
    mensaje.innerText = "Por favor, ingrese una fecha";
    mensaje.classList.add("text-center", "fw-bold");
    mjeFiltro.appendChild(mensaje);
  }
});

formQuitarFiltros.addEventListener("submit", (e) => {
  e.preventDefault();
  campoFiltroMedico.classList.remove("is-invalid");
  campoFiltroPaciente.classList.remove("is-invalid");
  campoFiltroFecha.classList.remove("is-invalid");

  tablaTurnos.innerHTML = "";
  mjeFiltro.innerHTML = "";
  mostrarTurnos(turnos);
});
