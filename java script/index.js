const NOMBRE = prompt("Ingrese su nombre")
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
}


