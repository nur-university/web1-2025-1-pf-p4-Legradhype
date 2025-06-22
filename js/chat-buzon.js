const btnComprando = document.getElementById('btn-comprando');
const btnVendiendo = document.getElementById('btn-vendiendo');
const zonaComprando = document.getElementById('zona-comprando');
const zonaVendiendo = document.getElementById('zona-vendiendo');
const vistaProductos = document.getElementById('vista-productos');
const vistaUsuarios = document.getElementById('vista-usuarios');
const tituloProducto = document.getElementById('titulo-producto');
const usuariosContenedor = document.getElementById('usuarios-contenedor');
const volverBtn = document.getElementById('volver-productos');

const busquedaComprando = document.getElementById('busqueda-comprando');
const busquedaVendiendo = document.getElementById('busqueda-vendiendo');

const chatsPorProducto = {
  1: {
    titulo: 'Bicicleta roja',
    usuarios: [
      {
        nombre: 'Usuario1',
        mensaje: '¿Puedes entregar hoy?',
        img: 'img/usuario .png'
      },
      {
        nombre: 'Usuario2',
        mensaje: '¿Aceptás trueque?',
        img: 'img/usuario .png'
      }
    ]
  },
  2: {
    titulo: 'Zapatillas Nike',
    usuarios: [
      {
        nombre: 'Usuario3',
        mensaje: '¿Tienes talla 42?',
        img: 'img/usuario .png'
      }
    ]
  }
};

btnComprando.addEventListener('click', () => {
  zonaComprando.classList.remove('oculto');
  zonaVendiendo.classList.add('oculto');
  btnComprando.classList.add('activo');
  btnVendiendo.classList.remove('activo');
  busquedaComprando.classList.remove('oculto');
  busquedaVendiendo.classList.add('oculto');
});

btnVendiendo.addEventListener('click', () => {
  zonaVendiendo.classList.remove('oculto');
  zonaComprando.classList.add('oculto');
  btnVendiendo.classList.add('activo');
  btnComprando.classList.remove('activo');
  vistaUsuarios.classList.add('oculto');
  vistaProductos.classList.remove('oculto');
  busquedaVendiendo.classList.remove('oculto');
  busquedaComprando.classList.add('oculto');
  busquedaVendiendo.placeholder = "Buscar publicación...";
});


function mostrarUsuariosDelProducto(productoId) {
  const producto = chatsPorProducto[productoId];
  tituloProducto.textContent = producto.titulo;
  usuariosContenedor.innerHTML = '';

  producto.usuarios.forEach(usuario => {
    const div = document.createElement('div');
    div.classList.add('usuario-chat');
    div.innerHTML = `
      <img src="${usuario.img}" alt="${usuario.nombre}" class="perfil-img-chat">
      <div class="mensaje-info">
        <p><strong>${usuario.nombre}:</strong> ${usuario.mensaje}</p>
      </div>
    `;
    div.dataset.nombre = usuario.nombre.toLowerCase();

    div.addEventListener('click', () => {
      const url = `chat.html?producto=${encodeURIComponent(producto.titulo)}&usuario=${encodeURIComponent(usuario.nombre)}`;
      window.location.href = url;
    });

    usuariosContenedor.appendChild(div);
  });

  vistaProductos.classList.add('oculto');
  vistaUsuarios.classList.remove('oculto');
  busquedaVendiendo.placeholder = "Buscar usuario...";
  busquedaVendiendo.value = '';
}

volverBtn.addEventListener('click', () => {
  vistaUsuarios.classList.add('oculto');
  vistaProductos.classList.remove('oculto');
  busquedaVendiendo.placeholder = "Buscar publicación...";
  busquedaVendiendo.value = '';
  filtrarVendiendo(); 
});

document.querySelectorAll('.tarjeta-producto').forEach(tarjeta => {
  tarjeta.addEventListener('click', () => {
    const productoId = tarjeta.dataset.producto;
    mostrarUsuariosDelProducto(productoId);
  });
});

busquedaComprando.addEventListener('input', () => {
  const filtro = busquedaComprando.value.toLowerCase();
  document.querySelectorAll('#zona-comprando .chat-preview').forEach(preview => {
    const titulo = preview.querySelector('h3').textContent.toLowerCase();
    preview.style.display = titulo.includes(filtro) ? 'flex' : 'none';
  });
});


busquedaVendiendo.addEventListener('input', filtrarVendiendo);

function filtrarVendiendo() {
  const filtro = busquedaVendiendo.value.toLowerCase();

  if (!vistaProductos.classList.contains('oculto')) {
    document.querySelectorAll('.tarjeta-producto').forEach(tarjeta => {
      const titulo = tarjeta.querySelector('h4').textContent.toLowerCase();
      tarjeta.style.display = titulo.includes(filtro) ? 'block' : 'none';
    });
  } else {

    document.querySelectorAll('.usuario-chat').forEach(usuario => {
      const nombre = usuario.dataset.nombre;
      usuario.style.display = nombre.includes(filtro) ? 'flex' : 'none';
    });
  }
}
