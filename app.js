
let comentarios = [];


function mostrarComentarios() {
    let lista = document.getElementById('comentarios');
    lista.innerHTML = ''; 

    comentarios.forEach(comentario => {
        let item = document.createElement('li');
        item.textContent = `${comentario.usuario}: ${comentario.texto}`;
        lista.appendChild(item);
    });
}


function agregarComentario(event) {
    event.preventDefault(); 

    let usuarioInput = document.getElementById('usuario');
    let comentarioInput = document.getElementById('comentario');

    // Crear un nuevo comentario
    let nuevoComentario = {
        usuario: usuarioInput.value,
        texto: comentarioInput.value
    };

  
    comentarios.push(nuevoComentario);

   
    mostrarComentarios();

  
    usuarioInput.value = '';
    comentarioInput.value = '';
}


mostrarComentarios();

document.getElementById('foro').addEventListener('submit', agregarComentario);
