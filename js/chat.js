
const params = new URLSearchParams(window.location.search);
const nombreProducto = params.get('producto') || 'Producto';
const nombreUsuario = params.get('usuario') || 'Usuario';

const origen = params.get('from') || 'chat-buzon.html';


document.getElementById('volver-btn').setAttribute('href', origen);



document.getElementById('nombre-producto').textContent = nombreProducto;
document.getElementById('nombre-usuario').textContent = nombreUsuario;


document.getElementById('form-chat').addEventListener('submit', function (e) {
  e.preventDefault();

  const input = document.getElementById('mensaje');
  const mensaje = input.value.trim();

  if (mensaje !== '') {
    agregarMensaje('Tú', mensaje);
    input.value = '';
  }
});


function agregarMensaje(usuario, mensaje) {
  const contenedor = document.getElementById('chat-mensajes');
  const div = document.createElement('div');
  div.classList.add('mensaje');
  div.innerHTML = `<strong>${usuario}:</strong> ${mensaje}`;
  contenedor.appendChild(div);
  contenedor.scrollTop = contenedor.scrollHeight;
}
