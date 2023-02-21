function compararNumeros() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado");
    if (numero1 > numero2) {
        resultado.innerHTML = "El número mayor es: " + numero1;
    } else if (numero2 > numero1) {
        resultado.innerHTML = "El número mayor es: " + numero2;
    } else {
        resultado.innerHTML = "Los números son iguales";
    }
}
