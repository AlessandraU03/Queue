import { Queue } from "../models/Queue.js";
import { Contacto } from "../models/Contacto.js";

export class AgendaTelefonica {
    constructor(mostrarMensaje) {
        this.agenda = new Queue();
        this.mostrarMensaje = mostrarMensaje;
    }

    agregarContacto(nombre, telefono) {
        const contacto = new Contacto(nombre, telefono);
        this.insertarOrdenado(contacto);
        this.mostrarMensaje(`Contacto agregado: ${nombre} - ${telefono}`);
    }

    insertarOrdenado(contacto) {
        let actual = this.agenda.frente;
        let anterior = null;
        // Recorrer la lista enlazada hasta encontrar la posición adecuada para el nuevo contacto
        while (actual && contacto.nombre > actual.valor.nombre) {
            anterior = actual;
            actual = actual.siguiente;
        }
        // Insertar el nuevo contacto en la posición encontrada
        if (!anterior) {
            // El nuevo contacto será el primero de la lista
            this.agenda.frente = contacto;
        } else {
            anterior.siguiente = contacto;
        }
        contacto.siguiente = actual;
    }

    ordenarPorNombre() {
        let actual = this.agenda.frente;
        let cambiar = true;
        while (cambiar && actual) {
            cambiar = false;
            let siguiente = actual.siguiente;
            while (siguiente) {
                if (actual.valor.nombre > siguiente.valor.nombre) {
                    // Intercambiar los valores de los contactos
                    let temp = actual.valor;
                    actual.valor = siguiente.valor;
                    siguiente.valor = temp;
                    cambiar = true;
                }
                siguiente = siguiente.siguiente;
            }
            actual = actual.siguiente;
        }
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
        return this.agenda.isEmpty();
    }
}


