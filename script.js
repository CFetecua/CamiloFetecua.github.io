// JavaScript para activar/desactivar el menú desplegable
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Agrega o quita la clase "active" al menú
    menuToggle.classList.toggle('active'); // Agrega o quita la clase "active" al botón de menú
});