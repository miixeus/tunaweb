const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }

}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



let currentYear = new Date().getFullYear();
let footerYear = document.getElementById("footer-year");
footerYear.innerHTML = currentYear;

let popup = document.getElementById("meu-popup");

// adicionar evento de clique na janela inteira
window.addEventListener("click", function(event) {
  // verificar se o clique foi fora do pop-up
  if (event.target != popup && !popup.contains(event.target)&& window.innerWidth < 768) {
    // esconder o pop-up
    popup.style.display = "none";
  }
}
);

function loadVideo() {
  var videoPlayer = document.getElementById('video-player');
  var screenWidth = window.innerWidth;

  // Definir a fonte do vídeo com base na largura da tela
  if (screenWidth <= 600) {
    videoPlayer.src = 'assets/images/Video-presantation-web-site-mobile.mp4';
  } else if (screenWidth <= 1200) {
    videoPlayer.src = 'assets/images/Video-presantation-web-site-mobile-tablet.mp4';
  } else {
    videoPlayer.src = 'assets/images/Video-presantation-web-site-desktop.mp4';
  }

  // Recarregar o vídeo
  videoPlayer.load();

  // Limitar o carregamento do vídeo para apenas uma vez
  var playedOnce = false;

  videoPlayer.addEventListener('play', function () {
    if (!playedOnce) {
      playedOnce = true;
    } else {
      videoPlayer.pause();
    }
  });
}

// Chamar a função quando a janela é carregada
window.addEventListener('load', loadVideo);

// Chamar a função quando a janela é redimensionada
window.addEventListener('resize', loadVideo);

// Call the function on page load and on window resize
window.onload = loadVideo;
window.onresize = loadVideo;

document.getElementById('video-player').addEventListener('loadeddata', function() {
  // Vídeo carregado, agora podemos exibir a página ou fazer outras ações
  console.log('Vídeo carregado!');
});

document.addEventListener('DOMContentLoaded', function () {
  var videoPlayer = document.getElementById('video-player');
  var spinnerContainer = document.querySelector('.spinner-container');

  // Mostra o spinner imediatamente ao carregar a página
  spinnerContainer.style.display = 'flex';

  // Adiciona classe quando o vídeo é carregado
  videoPlayer.addEventListener('loadeddata', function () {
      spinnerContainer.classList.add('video-loaded');

      // Oculta o spinner após o carregamento do vídeo
      spinnerContainer.style.display = 'none';

      // Inicia a reprodução do vídeo após o carregamento
      videoPlayer.play();

      // Mostra a página principal após 5 segundos
      setTimeout(function () {
          document.body.classList.add('show-page');
      }, 5000); // 5000 milissegundos = 5 segundos
  });

  // Caso ocorra algum erro ao carregar o vídeo
  videoPlayer.addEventListener('error', function () {
      spinnerContainer.style.display = 'none';
      console.error('Erro ao carregar o vídeo.');
  });
});
