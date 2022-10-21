const clave = "1234";
const campoClave = document.getElementById("claveDeAcceso");
const formularioAcceso = document.getElementById("formularioAcceso");

let acceso = false;
let claveIngresada = "";

campoClave.addEventListener("blur", (e) => {
  claveIngresada = e.target.value;
});
formularioAcceso.addEventListener("submit", (e) => {
  e.preventDefault();
  if (claveIngresada === clave) {
    acceso = true;
    sessionStorage.setItem("acceso", acceso);
    window.open("../views/administrador.html");
    sessionStorage.removeItem("acceso");

    window.close();
  } else {
    campoClave.classList.add("is-invalid");
  }
});




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


