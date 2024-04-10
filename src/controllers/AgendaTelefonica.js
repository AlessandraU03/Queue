import { Queue } from "../models/Queue.js";
import { Contacto } from "../models/Contacto.js";

export class AgendaTelefonica {
    constructor(mostrarMensaje) {
        this.agenda = new Queue();
        this.mostrarMensaje = mostrarMensaje;
    }

    agregarContacto(nombre, telefono) {
        const contacto = new Contacto(nombre, telefono);
        this.agenda.enqueue(contacto);
        this.mostrarMensaje(`Contacto agregado: ${nombre} - ${telefono}`);
    }

    extraerContacto() {
        const contacto = this.agenda.dequeue();
        if (contacto) {
            this.mostrarMensaje(`Contacto extraído: ${contacto.nombre} - ${contacto.telefono}`);
        } else {
            this.mostrarMensaje('La agenda telefónica está vacía.');
        }
        return contacto;
    }

    estaVacia() {
        return this.agenda.tamaño === 0;
    }
}


