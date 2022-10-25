export const mostrarFecha = (fecha) => {
    const fechaSplit = fecha.split("-");
    const day = fechaSplit[2];
    const month = fechaSplit[1];
    const year = fechaSplit[0];
    return `${day}/${month}/${year}`;
   
}



