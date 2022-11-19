


/* capturar los siguientes elementos: <h1>,
<section> y <article> */
    const h1 = document.querySelector('h1');
    const section = document.querySelector('section');
    const article = document.querySelector('article')
    
// Agregar a la etiqueta <h1> el mensaje: “AGREGAR PELÍCULAS”.
    h1.innerHTML += 'AGREGAR PELÍCULAS'
    
// Agregar a la etiqueta <h1> la clase: “titulo”.
    h1.classList.add('titulo')
    
// Agregar al artículo la clase: “fondoTransparente”.
    article.classList.add('fondoTransparente')
    
// Agregar a la sección la clase: “fondoCRUD”
    section.classList.add('fondoCRUD')