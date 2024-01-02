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
  var videoContainer = document.getElementById('video-container');
  var screenWidth = window.innerWidth;

  if (screenWidth < 600) {
    videoPlayer.src = 'assets/images/Video-presantation-web-site-mobile.mp4';
  } else if (screenWidth < 768) {
    videoPlayer.src = 'assets/images/Video-presantation-web-site-mobile-tablet.mp4';
  } 
  else  {
      videoPlayer.src = 'assets/images/Video-presantation-web-site.mp4';
  }

  // Reload the video
  videoPlayer.load();
}

// Call the function on page load and on window resize
window.onload = loadVideo;
window.onresize = loadVideo;





