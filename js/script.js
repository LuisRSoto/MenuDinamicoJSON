// Función para generar el menú dinámico
function generarMenu(menuData) {
    const menu = document.getElementById('dynamic-menu');
  
    menuData.menu.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.name;
  
      li.appendChild(a);
  
      if (item.submenu.length > 0) {
        const submenu = document.createElement('ul');
        submenu.classList.add('submenu');
  
        item.submenu.forEach(subitem => {
          const subLi = document.createElement('li');
          const subA = document.createElement('a');
          subA.href = subitem.url;
          subA.textContent = subitem.name;
          subLi.appendChild(subA);
          submenu.appendChild(subLi);
        });
  
        li.appendChild(submenu);
      }
  
      menu.appendChild(li);
    });
}

// Función para generar las tarjetas de juegos dinámicamente
function generarGameCards(juegosData) {
    const gameCardsContainer = document.querySelector('.game-cards');
    
    juegosData.games.forEach(juego => {
      const gameCard = document.createElement('div');
      gameCard.classList.add('game-card');
      
      const img = document.createElement('img');
      img.src = juego.image;
      img.alt = juego.name;

      const h2 = document.createElement('h2');
      h2.textContent = juego.name;

      const p = document.createElement('p');
      p.textContent = juego.description;

      gameCard.appendChild(img);
      gameCard.appendChild(h2);
      gameCard.appendChild(p);
      
      gameCardsContainer.appendChild(gameCard);
    });
}

// Funciones para cargar el menú y las tarjetas de juegos desde sus archivos JSON
function cargarMenu() {
    fetch('https://raw.githubusercontent.com/LuisRSoto/MenuDinamicoJSON/refs/heads/main/json/menu.json')
      .then(response => response.json())
      .then(data => {
        generarMenu(data);
      })
      .catch(error => {
        console.error('Error al cargar el menú:', error);
      });
}

function cargarJuegos() {
    fetch('https://raw.githubusercontent.com/LuisRSoto/MenuDinamicoJSON/refs/heads/main/json/game-cards.json')
      .then(response => response.json())
      .then(data => {
        generarGameCards(data);
      })
      .catch(error => {
        console.error('Error al cargar los juegos:', error);
      });
}

// Función para manejar el menú en pantallas móviles
document.querySelector('.menu-toggle').addEventListener('click', function() {
  const menu = document.querySelector('nav ul');
  menu.classList.toggle('show');
});

// Llamar a las funciones para cargar el menú y las tarjetas de juegos
cargarMenu();
cargarJuegos();
