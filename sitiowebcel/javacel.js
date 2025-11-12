document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');
  const mensajeExito = document.getElementById('mensaje-exito');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    mensajeExito.style.display = 'block';
    form.reset();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  
  const titulo = document.getElementById('titulo-dinamico');
  let mostrarOferta = true;

  setInterval(() => {
    titulo.textContent = mostrarOferta
      ? "🔥 Ofertas imperdibles esta semana 🔥"
      : "Bienvenido a Celulares HDJ";
    mostrarOferta = !mostrarOferta;
  }, 2000);

  
  setTimeout(() => {
    const mensaje = document.getElementById('mensaje-oferta');
    mensaje.textContent = " ¡Suscríbete hoy y recibe un 10% de descuento!";
  }, 5000);
}
);
