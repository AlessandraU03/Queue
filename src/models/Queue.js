import { Node } from "./Node.js";

export class Queue {
    constructor() {
        this.frente = null; 
        this.final = null;  
        this.tamaño = 0;    
    }

    enqueue(valor) {
        const nuevoNodo = new Node(valor);
        if (this.tamaño === 0) {
            this.frente = nuevoNodo;
        } else {
            this.final.siguiente = nuevoNodo;
            nuevoNodo.anterior = this.final;
        }
        this.final = nuevoNodo;
        this.tamaño++;
    }

    dequeue() {
        if (this.tamaño === 0) {
            return null; 
        }
        const valorFrente = this.frente.valor;
        this.frente = this.frente.siguiente;
        if (this.frente) {
            this.frente.anterior = null;
        } else {
            this.final = null; 
        }
        this.tamaño--;
        return valorFrente;
    }

    peek() {
        if (this.tamaño === 0) {
            return null; 
        }
        return this.frente.valor;
    }

    size() {
        return this.tamaño;
    }

    isEmpty() {
        return this.tamaño === 0;
    }
}
