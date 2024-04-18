import { AgendaTelefonica } from "./AgendaTelefonica.js";

function mostrarContactos() {
    const colaDiv = document.getElementById('cola');
    colaDiv.innerHTML = '';
    let actual = agenda.agenda.frente;
    while (actual) {
        const parrafo = document.createElement('p');
        parrafo.textContent = `${actual.valor.nombre} - ${actual.valor.telefono}`;
        colaDiv.appendChild(parrafo);
        actual = actual.siguiente;
    }
}

function agregarContacto() {
    const nombreInput = document.getElementById('nombre');
    const telefonoInput = document.getElementById('telefono');
    const nombre = nombreInput.value.trim();
    const telefono = telefonoInput.value.trim();

    if (nombre && telefono) {
        agenda.agregarContacto(nombre, telefono);
        agenda.ordenarPorNombre(); // Ordenar la agenda después de agregar un contacto
        mostrarContactos();
        nombreInput.value = '';
        telefonoInput.value = '';
    } else {
        mostrarMensaje('Por favor, ingrese tanto el nombre como el número telefónico.');
    }
}

function extraerContacto() {
    agenda.extraerContacto();
    mostrarContactos();
}

function mostrarMensaje(mensaje) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = mensaje;
}

const agenda = new AgendaTelefonica(mostrarMensaje);

document.getElementById('agregarBtn').addEventListener('click', agregarContacto);
document.getElementById('extraerBtn').addEventListener('click', extraerContacto);
