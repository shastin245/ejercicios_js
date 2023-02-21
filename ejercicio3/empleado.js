function calcularAumento() {
    var nombre = document.getElementById("nombre").value;
    var salario = parseFloat(document.getElementById("salario").value);
    var categoria = document.getElementById("categoria").value;
  
    var resultado = document.getElementById("resultado");
  
    if (nombre === "" || isNaN(salario)) {
      resultado.innerHTML = "Por favor ingresá un nombre y un salario válido";
    } else {
      var aumento;
  
      switch (categoria) {
        case "A":
          aumento = salario * 0.15;
          break;
        case "B":
          aumento = salario * 0.3;
          break;
        case "C":
          aumento = salario * 0.1;
          break;
        case "D":
          aumento = salario * 0.2;
      }
    }
}
