import { actualizarTabla } from "./adminTurnos.js";

export const eliminarTurno = (turnoId) => {
    const turnos = JSON.parse(localStorage.getItem("Lista de Turnos"));
    const turnoAEliminarIndice = turnos.findIndex(turno => {
        return turno.id === turnoId;

    });

    Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás deshacer esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar turno",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            turnos.splice(turnoAEliminarIndice, 1);
            localStorage.setItem("Lista de Turnos", JSON.stringify(turnos));
            actualizarTabla();
            Swal.fire({
                title: "Eliminado!",
                text: "El turno ha sido eliminado",
                icon: "success",
            });
        }
    }
    );
};


