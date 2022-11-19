
/* capturar los siguientes elementos: <main>,<h2>, <a> y <p> */
    const main = document.querySelector("main");
    const h2 = document.querySelector(".subtitulo");
    const a = document.querySelector("a");
    const parrafos = document.querySelectorAll("p");

// Haciendo uso del prompt, indicar al usuario que: “Ingrese su nombre”.
    const nombre = prompt("Ingrese su nombe");

// si ingresa su nombre
    if (nombre) {
    h2.innerHTML += nombre;
        }
        //En caso de que el usuario no coloque su nombre,
        else {
            h2.innerHTML += "INVITADO";
        }

/* A la etiqueta <a> colocarle el color: #E51B3E. */
h2.style.textTransform = "uppercase";

// Modificar color a etiqueta <a>
a.style.color = "#E51B3E";

/* Mediante el confirm, preguntar al usuario “¿Desea colocar un fondo de pantalla?”. */

    Swal.fire({
    title: "Desea Cambiar el Fondo?",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Ok",
    denyButtonText: `Cancelar`,
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector("body").classList.add("fondo");
            Swal.fire("Cambio Realizado", "", "success");
        }
});

// “descatadoPar”. Y a los impares agregar la clase: “destacadoImpar”.
    parrafos.forEach((parrafo, index) => {
    if ((index + 1) % 2 === 0) {
        parrafo.classList.add("destacadoPar");
    } else {
        parrafo.classList.add("destacadoImpar");
    }
});

// establecer como visible a la etiqueta <main> en el navegador, aplicando el estilo: display : block.
main.style.display = "block";
