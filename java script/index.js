/*const NOMBRE = prompt("Ingrese su nombre")
const APELLIDO = prompt("Ingrese su apellido")

if (NOMBRE == "" || APELLIDO == "") {
    alert ("Ingrese todos los datos por favor")
} else {
    alert ("Bienvenido " + NOMBRE + APELLIDO)
} 

iniciarSesion();
function iniciarSesion() {
    const USUARIO = prompt("Ingrese su usuario");

    do {
        if (USUARIO == "profesor"){
            alert("Bienvenido" + USUARIO)
        }
    }
    while (USUARIO != "profesor") {
        alert("Usuario incorrecto");
    }

    const PASSWORD = prompt("Ingrese su contraseña");
    
    if (PASSWORD == "1234"){
        alert("Bienvenido" + USUARIO);
    }
    else {
        alert("Contraseña incorrecta");
    }
}*/

function suma(numeroUno, numeroDos) {
    let resultado = numeroUno + numeroDos;
    return resultado;
  }
  
  function resta(numeroUno, numeroDos) {
    let resultado = numeroUno - numeroDos;
    return resultado;
  }
  
  function multiplicacion(numeroUno, numeroDos) {
    let resultado = numeroUno * numeroDos;
    return resultado;
  }
  
  function division(numeroUno, numeroDos) {
    let resultado = numeroUno / numeroDos;
    return resultado;
  }
  
  function mostrarResultado(resultado) {
    alert("El resultado de la operación es: " + resultado);
  }
  
  function mostrarMenu() {
    let opcion = prompt(
      "Bienvenido, seleccione una opción (ESC para salir)\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir"
    );
    return opcion;
  }
  
  function calculadora() {
    let opcionSeleccionada = mostrarMenu();
    while (opcionSeleccionada !== "ESC") {
      if (opcionSeleccionada !== "") {
        opcionSeleccionada = parseInt(opcionSeleccionada);
  
        //isNaN nos sirve para saber si el contenido de una variable es NaN
        if (!isNaN(opcionSeleccionada)) {
          let numeroUno = parseFloat(prompt("Ingrese el primer numero"));
          let numeroDos = parseFloat(prompt("Ingrese el segundo numero"));
          switch (opcionSeleccionada) {
            case 1:
              let resultadoSuma = suma(numeroUno, numeroDos);
              mostrarResultado(resultadoSuma);
              break;
  
            case 2:
              let resultadoResta = resta(numeroUno, numeroDos);
              mostrarResultado(resultadoResta);
              break;
  
            case 3:
              let resultadoMultiplicacion = multiplicacion(numeroUno, numeroDos);
              mostrarResultado(resultadoMultiplicacion);
              break;
  
            case 4:
              let resultadoDivision = division(numeroUno, numeroDos);
              mostrarResultado(resultadoDivision);
              break;
  
            default:
              alert("Opcion Incorrecta");
              break;
          }
        } else {
          alert("Ingresó una letra");
        }
      } else {
        alert("Seleccione la opción");
      }
      opcionSeleccionada = mostrarMenu();
    }
  }
  
  calculadora();


