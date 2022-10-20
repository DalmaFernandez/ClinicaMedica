
    
const array= ["10:00","8:00","17:00","9:00","18:00"];
const numero = ("10:00");
const numero2 = numero.split(":");
console.log(numero2[0]);

array.sort((a,b)=>a.split(":")[0]-b.split(":")[0]);
console.log(array);

const paciente = "Fernandez, Dalma (DNI: 12345678)";
const paciente2 = paciente.split("(");
console.log(paciente2[0]);

