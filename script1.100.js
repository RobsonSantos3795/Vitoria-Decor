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

//Sessão abaixo contem a construção do rolamento de imagem
window.onload = function() {
  var container = document.getElementById('container');
  var scrollAmount = 1; // Quantidade de pixels para rolar
  var delay = 30; // Delay em milissegundos entre cada movimento
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
/*  ###  LINKS DE SITES  ###  */
function infantil() {
  location.href = "index1.html";
}
function cha() {
  location.href = "index2.html";
}
function adulto() {
  location.href = "index3.html";
}
function formatura() {
  location.href = "index4.html";
}
function noivado() {
  location.href = "index5.html";
}
function arcos() {
  location.href = "index6.html";
}


document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const confirmButton = document.getElementById('confirmButton');

  // Lista de nomes com links associados
  const namedLinks = [
      { name: 'Kit infantil', link: 'index1.html' },
      { name: 'Kit chá revelação', link: 'index2.html' },
      { name: 'Kit adulto', link: 'index3.html' },
      { name: 'Kit formatura', link: 'index4.html' },
      { name: 'Kit noivado/casamento', link: 'index5.html' },
      { name: 'Arco de balões delivery', link: 'index6.html' }
  ];

  let selectedLink = '';

  // Função para filtrar e mostrar resultados
  function searchNames(query) {
      searchResults.innerHTML = ''; // Limpar resultados anteriores
      if (query) {
          const filteredLinks = namedLinks.filter(linkObj => linkObj.name.toLowerCase().includes(query.toLowerCase()));
          filteredLinks.forEach(linkObj => {
              const div = document.createElement('div');
              div.className = 'resultItem';
              
              const link = document.createElement('a');
              link.href = linkObj.link;
              link.textContent = linkObj.name;
              link.addEventListener('click', function() {
                  selectedLink = linkObj;
                  searchInput.value = linkObj.name;
                  searchResults.innerHTML = '';
              });
              
              div.appendChild(link);
              searchResults.appendChild(div);
          });
      }
  }

  // Evento para capturar a entrada do usuário
  searchInput.addEventListener('input', function() {
      const query = searchInput.value;
      searchNames(query);
  });

  // Evento para o botão confirmar
  confirmButton.addEventListener('click', function() {
      if (selectedLink) {
          alert(`Você confirmou o link: ${selectedLink.name} - ${selectedLink.link}`);
          
      } else {
          alert('Selecione um link.');
          //location.href = "index5.html"
      }
  });
});
