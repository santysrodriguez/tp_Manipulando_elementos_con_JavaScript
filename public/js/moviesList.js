

/* capturar los siguientes elementos: <body>
y <h1>, */
    const body = document.querySelector('body');
    const h1 = document.querySelector('h1');

//Haciendo uso del prompt, preguntar al usuario: “¿Desea modo oscuro?”.
    Swal.fire({
    title: 'Desea Modo Oscuro?',
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: 'Ok',
    denyButtonText: `Cancelar`,
    /* Si larespuesta es afirmativa, */
    }).then((result) => {
        if (result.isConfirmed) {
        body.style.backgroundColor = '#7f7f7f'; 
        body.classList.add('fondoMoviesList')
        Swal.fire('Cambio Realizado','', 'success')
        }
    })

// Agregar a la etiqueta <h1> el mensaje: “LISTADO DE PELÍCULAS”.
    h1.innerText = "LISTADO DE PELÍCULAS"

    // Agregar a la etiqueta <h1> los siguientes estilos:
    h1.style.backgroundColor = 'teal'
    h1.style.color = 'white'
    h1.style.padding = '20px'