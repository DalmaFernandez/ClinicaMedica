import { recargarDatos } from "./adminPaciente.js";

export const deletePaciente = (dni) => {
  const pacientes = JSON.parse(localStorage.getItem("Lista de pacientes"));

  const pacienteAEliminarIndice = pacientes.findIndex((elemento) => {
    return elemento.dni === dni;
  });

  Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás deshacer esta acción",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar paciente",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {

      pacientes.splice(pacienteAEliminarIndice, 1);

      localStorage.setItem("Lista de pacientes", JSON.stringify(pacientes));

      recargarDatos();

      Swal.fire({
        title: "Eliminado",
        text: "El paciente ha sido eliminado",
        icon: "success",
      });
    }
  });
};