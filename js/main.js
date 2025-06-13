
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
  { id: 10, titulo: "Mochila Escolar", precio: "$355", imagen: "img/Mochila Escolar.jpg" },
  { id: 11, titulo: "Monitor Curvo", precio: "$163", imagen: "img/Monitor Curvo.jpg" },
  { id: 12, titulo: "Cafetera Express", precio: "$475", imagen: "img/Cafetera Express.jpg" },
  { id: 13, titulo: "Taladro Eléctrico", precio: "$148", imagen: "img/Taladro Eléctrico.jpg" },
  { id: 14, titulo: "Set de Ollas", precio: "$289", imagen: "img/bicicleta.jpg" },
  { id: 15, titulo: "Aro de Luz LED", precio: "$194", imagen: "img/bicicleta.jpg" },
  { id: 16, titulo: "Tablet Android", precio: "$213", imagen: "img/bicicleta.jpg" },
  { id: 17, titulo: "Mouse Inalámbrico", precio: "$404", imagen: "img/bicicleta.jpg" },
  { id: 18, titulo: "Patineta", precio: "$293", imagen: "img/bicicleta.jpg" },
  { id: 19, titulo: "Impresora WiFi", precio: "$344", imagen: "img/bicicleta.jpg" },
  
];



let mostrarDesde = 0;
const mostrarCantidad = 3; 


function cargarDestacados() {
  const contenedor = document.getElementById("tarjetas");

  const aMostrar = destacados.slice(mostrarDesde, mostrarDesde + mostrarCantidad);

  aMostrar.forEach(producto => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
   tarjeta.innerHTML = `
  <div class="card">
    <img src="${producto.imagen}" alt="${producto.titulo}">
    <h3>${producto.titulo}</h3>
    <p>${producto.precio}</p>
  </div>
  <button class="btn-vermas" onclick="verDetalle(${producto.id})">Ver más</button>
`;


    contenedor.appendChild(tarjeta);
  });

  mostrarDesde += mostrarCantidad;
}

function verDetalle(id) {
  if (id === 1) {
    window.location.href = "detalle-anuncio.html";
  } else {
    alert("Este producto no tiene vista de detalle todavía.");
  }
}

function verMas() {
  if (mostrarDesde >= destacados.length) {
    alert("No hay más productos.");
    return;
  }
  cargarDestacados();
}

function buscar() {
  const texto = document.getElementById("busqueda").value;
  alert("Buscar: " + texto);
}
function toggleSidebar() {
  const sidebar = document.getElementById('sidebarDerecho');
  sidebar.classList.toggle('mostrar');
}


window.onload = cargarDestacados;
