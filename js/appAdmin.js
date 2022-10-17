const acceso = sessionStorage.getItem("acceso");
const volverAInicio = document.getElementsByClassName("volverAinicio");
const mainAdmin = document.getElementById("mainAdmin");
mainAdmin.classList.add("d-none");
if (acceso === "true"){
    mainAdmin.classList.remove("d-none");
}else{
    window.open("./index.html", "_self");
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



