//  función que calcula la nota final del alumno
function calcularNotaFinal(examen, tareas, asistencia, investigacion) {
	let notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
	return notaFinal.toFixed(2); // Pa redondear la nota obtenida a dos decimales
}

// se obtienen los datos del alumno
const nombre = prompt("Ingresá tu nombre:");
const carnet = prompt("Ingresá tu carnet:");


// valores aleatrorios para probar 
const examen = prompt("Ingresá tu nota de examen:");
const tareas = prompt("Ingresá tu promedio de tareas:");
const asistencia = prompt("Ingresá tu asistencia total:")
const investigacion = prompt("Ingresá la nota de tu investigación:")

// se calcula la nota final del alumno
const notaFinal = calcularNotaFinal(examen, tareas, asistencia, investigacion);

// datos del alumno y su nota final en la tabla
document.getElementById("nombre").textContent = nombre;
document.getElementById("carnet").textContent = carnet;
document.getElementById("nota").textContent = notaFinal;
