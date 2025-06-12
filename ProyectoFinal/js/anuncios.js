const destacados = [
  { id: 1, titulo: "Laptop HP 15", precio: "$1200", imagen: "img/laptop.jpg" },
  { id: 2, titulo: "Smartphone", precio: "$800", imagen: "img/smartphone.jpg" },
  { id: 3, titulo: "Bicicleta", precio: "$500", imagen: "img/bicicleta.jpg" },
  { id: 4, titulo: "Auriculares Bluetooth", precio: "$296", imagen: "img/Auriculares Bluetooth.jpg" },
  { id: 5, titulo: "Cámara Deportiva", precio: "$253", imagen: "img/Camara Deportiva.jpg" },
  { id: 6, titulo: "Teclado Mecánico", precio: "$201", imagen: "img/Teclado Mecanico.jpg" },
  { id: 7, titulo: "Zapatillas Running", precio: "$184", imagen: "img/Zapatillas Running.jpg" },
  { id: 8, titulo: "Smartwatch", precio: "$275", imagen: "img/Smartwatch.jpg" },
  { id: 9, titulo: "Silla Gamer", precio: "$483", imagen: "img/Silla Gamer.jpg" },
  { id: 10, titulo: "Mochila Escolar", precio: "$355", imagen: "img/Mochila Escolar.jpg" }
];

function cargarTodosLosAnuncios() {
  const contenedor = document.getElementById("tarjetas");
  contenedor.innerHTML = "";

  destacados.forEach(producto => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.titulo}">
      <h3>${producto.titulo}</h3>
      <p>${producto.precio}</p>
      <button class="btn-vermas" onclick="verDetalle(${producto.id})">Ver más</button>
    `;
    contenedor.appendChild(tarjeta);
  });
}

function verDetalle(id) {
  if (id === 1) {
    window.location.href = "detalle-anuncio.html";
  } else {
    alert("Este producto no tiene vista de detalle todavía.");
  }
}

function buscar() {
  const texto = document.getElementById("busqueda").value;
  alert("Buscar: " + texto);
}

window.onload = cargarTodosLosAnuncios;
