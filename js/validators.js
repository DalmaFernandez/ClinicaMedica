export const validateName = (valor, campo) => {
    // que no este vacio
    if (valor.trim().length < 3) {
      campo.classList.add("is-invalid");
      return false;
    }
    const regex= /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    if (!regex.test(valor)) {
      campo.classList.add("is-invalid");
      return false;
    }

    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    
    return true;
  };

  export const validateString = (valor, campo) => {
    // que no este vacio
    if (valor.trim().length < 5) {
      campo.classList.add("is-invalid");
      return false;
    }

    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    
    return true;
  };
  
  export const validateNumber = (valor, campo) => {
    // que no este vacio
    if (valor.trim().length < 8) {
      campo.classList.add("is-invalid");
      return false;
    }
  
    const regex = /^\d+$/;
  
    if (!regex.test(valor)) {
      campo.classList.add("is-invalid");
      return false;
    }
  
    campo.classList.remove("is-invalid");
      campo.classList.add("is-valid");
    return true;
  };
  
  export const validateEmail = (valor, campo) => {
    // que no este vacio
    if (valor.trim().length < 4) {
      campo.classList.add("is-invalid");
      return false;
    }
  
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
    if (!regex.test(valor)) {
      campo.classList.add("is-invalid");
      return false;
    }
  
    campo.classList.remove("is-invalid");
      campo.classList.add("is-valid");
    return true;
  };
  

  export const validateDate = (valor, campo) => {
    if (valor === "") {
      campo.classList.add("is-invalid");
      return false;
    } else {
      campo.classList.remove("is-invalid");
      campo.classList.add("is-valid");
      return true;
    }
  };

  export const validateSelector = (valor, campo) => {
    if (valor === "0") {
      campo.classList.add("is-invalid");
      return false;
    } else {
      campo.classList.remove("is-invalid");
      campo.classList.add("is-valid");
      return true;
    }
  };