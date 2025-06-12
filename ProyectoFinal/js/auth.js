
const usuarioPorDefecto = {
  nombre: "Fernando",
  email: "fernando@gmail.com",
  password: "12344"
};

if (!localStorage.getItem("usuarios")) {
  localStorage.setItem("usuarios", JSON.stringify([usuarioPorDefecto]));
}

function registrar() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const mensaje = document.getElementById("mensajeRegistro");

  if (!nombre || !email || !password) {
    mensaje.textContent = "Todos los campos son obligatorios.";
    return;
  }

  if (password.length < 6) {
    mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  if (usuarios.find(u => u.email === email)) {
    mensaje.textContent = "Este correo ya está registrado.";
    return;
  }

  usuarios.push({ nombre, email, password });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Registro exitoso. Ahora puedes iniciar sesión.");
  window.location.href = "login.html";
}

function iniciarSesion() {
  const email = document.getElementById("emailLogin").value.trim();
  const password = document.getElementById("passwordLogin").value;

  const mensaje = document.getElementById("mensajeLogin");

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const usuario = usuarios.find(u => u.email === email && u.password === password);

  if (usuario) {
    alert("Inicio de sesión exitoso. Bienvenido " + usuario.nombre);
    localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
    window.location.href = "index.html";
  } else {
    mensaje.textContent = "Correo o contraseña incorrectos.";
  }
}
