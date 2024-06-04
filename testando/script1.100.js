/*document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('#menu li a');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que o link seja seguido
            console.log(`Você clicou no link: ${item.getAttribute('href')}`);
            // Aqui você pode adicionar mais lógica, como navegação suave, etc.
        });
    });
});
*/

var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  menu.classList.toggle("visible");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});