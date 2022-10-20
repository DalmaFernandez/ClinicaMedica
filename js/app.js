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



