import { cargarDatosEnFormulario } from "./editarPac.js";
import { deletePaciente } from "./eliminarPac.js";

export const cargarPacienteTabla = (paciente) => {
    const tbody = document.getElementById("tbody__admin");
  
    const tr = document.createElement("tr");
  
    //
    const td1 = document.createElement("td");
  
    td1.innerText = paciente.nombre;
  
    tr.appendChild(td1);
    //
    
    //
    const td2 = document.createElement("td");
  
    td2.innerText = paciente.apellido;
  
    tr.appendChild(td2);
    //
    //
    const td3 = document.createElement("td");
  
    td3.innerText = paciente.dni;
  
    tr.appendChild(td3);
    //
    //
    const td4 = document.createElement("td");
  
    td4.innerText = paciente.os;
  
    tr.appendChild(td4);
    //
    const td5 = document.createElement("td");
  
    td5.innerText = paciente.fn;
  
    tr.appendChild(td5);
    //
    //
    const td6 = document.createElement("td");
  
    td6.innerText = paciente.sexo;
  
    tr.appendChild(td6);

    //
    const td7 = document.createElement("td");
    const buttonEditar = document.createElement("button");
    const buttonEliminar = document.createElement("button");
  
    buttonEditar.classList = "btn btn-warning mb-2 me-2"
    buttonEliminar.classList = "btn btn-danger mb-2"
  
    buttonEditar.innerText = "Editar"
    buttonEliminar.innerText = "Eliminar"
  
    buttonEditar.onclick = () => {
      cargarDatosEnFormulario(paciente.dni);
    }
  
    buttonEliminar.onclick = () => {
      deletePaciente(paciente.dni);
    }
  
    td7.appendChild(buttonEditar)
    td7.appendChild(buttonEliminar)
  
    tr.appendChild(td7);
    //
   
    tbody.appendChild(tr);
  };