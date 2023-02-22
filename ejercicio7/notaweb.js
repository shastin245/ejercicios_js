function calcularNotaMedia() {
    // Obtener los valores de las notas y la ponderación
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var ponderacion1 = parseFloat(document.getElementById("ponderacion1").value);

    // Calcular la nota media ponderada
    var notaMedia = ((nota1 * ponderacion1) / 100) + ((nota2 * (100 - ponderacion1)) / 100);

    // Mostrar la nota media ponderada en el campo de entrada de solo lectura
    document.getElementById("notaMedia").value = notaMedia.toFixed(2);
}
