
class Comentario {
    constructor(id, nombre, comentario, puntuacion) {
        this.id = id;
        this.nombre = nombre;
        this.comentario = comentario;
        this.puntuacion = puntuacion;
    }
}


class Repositorio {
    constructor() {
        this.comentarios = [];
        this.contador = 1;
    }

    mostrarComentarios() {
        return this.comentarios;
    }

    crearComentario(nombre, comentario, puntuacion) {
        const nuevoComentario = new Comentario(this.contador, nombre, comentario, puntuacion);
        this.comentarios.push(nuevoComentario);
        this.contador++;
    }
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("boton");
    const repositorio = new Repositorio();

    boton.addEventListener("click", (event) => {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const comentario = document.getElementById("comentario").value;
        const puntuacion = document.getElementById("puntuacion").value;

        if (nombre === "" || comentario === "" || puntuacion === "") {
            alert("Falta completar datos");
            return;
        }

        repositorio.crearComentario(nombre, comentario, puntuacion);

    
        const contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = "";

        const tarjetas = repositorio.mostrarComentarios().map(({ id, nombre, comentario, puntuacion }) => {
            const div = document.createElement("div");

            const nombreElem = document.createElement("h2");
            nombreElem.textContent = nombre;

            const opinElem = document.createElement("h3");
            opinElem.textContent = comentario;

            const puntElem = document.createElement("p");
            puntElem.textContent = `Puntuación: ${puntuacion}`;

            div.appendChild(nombreElem);
            div.appendChild(opinElem);
            div.appendChild(puntElem);

            return div;
        });

        tarjetas.forEach(div => contenedor.appendChild(div));
    });
