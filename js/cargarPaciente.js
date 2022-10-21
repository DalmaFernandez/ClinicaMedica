import { cargarDatosEnFormulario } from "./editarPac.js";
import { deletePaciente } from "./eliminarPac.js";
import { mostrarFecha } from "./fecha.js";

export const cargarPacienteTabla = (paciente) => {
    const tbody = document.getElementById("tbody__admin");
  
    const tr = document.createElement("tr");
  
    //
    const td1 = document.createElement("td");
  
    td1.innerText = paciente.apellido + ", " + paciente.nombre;
  
    tr.appendChild(td1);
    //
    
   
    const td2 = document.createElement("td");
  
    td2.innerText = paciente.dni;
  
    tr.appendChild(td2);
    //
    const td3 = document.createElement("td");
    const edad = calcularEdad(paciente.fn);
  
    td3.innerText = edad;
  
    tr.appendChild(td3);
    //
    //

    const td4 = document.createElement("td");
  
    td4.innerText = paciente.os;
  
    tr.appendChild(td4);
    //
    
    //
    // const td6 = document.createElement("td");
  
    // td6.innerText = paciente.sexo;
  
    // tr.appendChild(td6);

    //
    const td7 = document.createElement("td");
    
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
      mostrarInfo(paciente);
    };

    buttonEditar.onclick = () => {
      cargarDatosEnFormulario(paciente.dni);
    }
  
    buttonEliminar.onclick = () => {
      deletePaciente(paciente.dni);
    }

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

    td7.appendChild(buttonInfo);
    td7.appendChild(buttonEditar);
    td7.appendChild(buttonEliminar);
  
    tr.appendChild(td7);
    //
   
    tbody.appendChild(tr);
  };

  const calcularEdad = (fecha) => {
    let today = new Date();
    let birthDate = new Date(fecha);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

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

  }
  