//Essa sessão contém a parte de interação do botão
var a = document.getElementById('area');

a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function entrar() {
    a.style.background = 'green';
}

function sair() {
    a.style.background = 'yellow';
}

//A sessão abaixo contém a parte de interação do menu do site
var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

//Sessão abaixo contem a construção do rolamento de imagem
window.onload = function() {
  var container = document.getElementById('container');
  var scrollAmount = 1; // Quantidade de pixels para rolar
  var delay = 50; // Delay em milissegundos entre cada movimento
  //Define o intervalo de tempo em milissegundos entre cada movimento de rolagem. Neste caso, é 50 milissegundos (0,05 segundos).

  function scrollHorizontally() {  //será responsável por mover a rolagem horizontalmente.
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0;  //Se o contêiner estiver no final do conteúdo, a rolagem é reiniciada para o início (posição 0)
      } else {
          container.scrollLeft += scrollAmount;
      }
  }

  var scrollInterval = setInterval(scrollHorizontally, delay);
}

function infantil() {
  location.href = "index2.html";
}
function cha() {
  location.href = "index3.html";
}