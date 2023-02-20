function validarEdad() {
  // Obtiene la fecha de nacimiento ingresada por el usuario
  const fechaNacimiento = new Date(document.getElementById("cumple").value);

  // Obtiene la fecha actual
  const fechaActual = new Date();

  // Calcula la edad del usuario en años
  const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

  // Verifica si el usuario es mayor de edad
  if (edad >= 18) {
    document.getElementById("resultado").innerHTML = "Sos mayor de edad.";
  } else {
    document.getElementById("resultado").innerHTML = "Sos menor de edad.";
  }
}


