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
if (turnosLS != null) {
    turnos = turnosLS;
}else{
    const mensaje = document.createElement("p");
    mensaje.innerText = "No hay turnos programados";
    mensaje.classList.add("text-center");
}

// turnos.sort((a, b) => {
//     if (a.fecha > b.fecha) {
//       return 1;
//     }
//     if  (a.fecha < b.fecha) {
//       return -1;
//     }
//     // if  ( a.hora > b.hora) {
//     //     return 1;
//     // } if (a.hora < b.hora) {
//     //     return -1;
//     // }
//     return 0;
//     });

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

const tablaTurnos = document.getElementById("turnosPrincipal");

turnos.forEach((turno) => {
    const divCard = document.createElement("div");
    divCard.classList.add("p-1", "col-4");
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










/* <div class="card px-0 col-4" >
<div class="card-header">
  Featured
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
</div> */
