const clave = "1234";
const campoClave = document.getElementById("claveDeAcceso");
const formularioAcceso = document.getElementById("formularioAcceso");

let acceso = false;
let claveIngresada = "";

campoClave.addEventListener("change", (e) => {
  claveIngresada = e.target.value;
});
formularioAcceso.addEventListener("submit", (e) => {
  e.preventDefault();
  if (claveIngresada === clave) {
    acceso = true;
    sessionStorage.setItem("acceso", acceso);
    window.open("../views/administrador.html");
    sessionStorage.removeItem("acceso");
    campoClave.value = "";
    window.close("../index.html");
  } else {
    campoClave.value = "";
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "La clave ingresada es incorrecta",
      });
  }
});





document.getElementById("button-up").addEventListener("click",scrollUp);

function scrollUp() {
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


