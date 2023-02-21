function calcularDescuento() {
    var car = document.getElementById("cars").value;
    var discount = 0;
    var carName = "";
    switch (car) {
        case "fiesta":
            discount = 5;
            carName = "FORD FIESTA";
            break;
        case "focus":
            discount = 10;
            carName = "FORD FOCUS";
            break;
        case "escape":
            discount = 20;
            carName = "FORD ESCAPE";
            break;
        default:
            alert("Selecciona un coche válido");
    }
    var resultado = document.getElementById("resultado");
    if (discount != 0) {
        resultado.innerHTML = "Has seleccionado el coche " + carName + " y se aplicará un descuento del " + discount + "% en tu compra.";
    }
}



