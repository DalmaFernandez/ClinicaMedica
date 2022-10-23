const acceso = sessionStorage.getItem("acceso");
const volverAInicio = document.getElementsByClassName("volverAinicio");
const mainAdmin = document.getElementById("mainAdmin");
mainAdmin.classList.add("d-none");
if (acceso === "true"){
    mainAdmin.classList.remove("d-none");
}else{
    window.open("../index.html", "_self");
}


for (let i = 0; i < volverAInicio.length; i++) {
    volverAInicio[i].addEventListener("click", (e) => {
        e.preventDefault();
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Se cerrará el panel de administrador",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, estoy seguro",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                window.open("../index.html", "_self");
                sessionStorage.removeItem("acceso");    
    }
        });
    });
}


document.getElementById("button-up").addEventListener("click",scrollUp);

export function scrollUp() {
  let currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    
    window.scrollTo(0, currentScroll - currentScroll / 1);
  }
}


const buttonUp = document.getElementById("button-up");

window.onscroll = function () {
  let scroll = document.documentElement.scrollTop;
  if (scroll > 5) {
    buttonUp.style.transform = "scale(1)";
  }else if(scroll < 5){
    buttonUp.style.transform = "scale(0)";
  }
};






