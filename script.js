

document.addEventListener('DOMContentLoaded', function() {
  // Botão copiar código de protótipo
  var copyBtn = document.getElementById('copy-code');
  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      var codeEl = document.getElementById('proto-code');
      var codeText = codeEl ? codeEl.innerText : '';
      navigator.clipboard.writeText(codeText).then(function() {
        copyBtn.textContent = 'Copiado!';
        setTimeout(()=> copyBtn.textContent = 'Copiar código', 1500);
      });
    });
  }

  const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;
const size = images[0].clientWidth;

function updateCarousel() {
  slide.style.transform = `translateX(${-size * counter}px)`;
}

// Próximo
nextBtn.addEventListener('click', () => {
  counter++;
  if(counter >= images.length) counter = 0;
  updateCarousel();
});

// Anterior
prevBtn.addEventListener('click', () => {
  counter--;
  if(counter < 0) counter = images.length - 1;
  updateCarousel();
});

// Autoplay opcional
setInterval(() => {
  counter++;
  if(counter >= images.length) counter = 0;
  updateCarousel();
}, 5000);


  // Formulário de contato (simulado)
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Recebemos sua mensagem, em breve entraremos em contato');
      form.reset();
    });
  }

  // Pequena animação: destacar SWOT ao clicar em título
  var swotTitle = document.querySelector('.swot h3');
  if (swotTitle) {
    swotTitle.addEventListener('click', function() {
      var swot = document.querySelector('.swot-grid');
      if (swot) {
        swot.style.transition = 'transform 300ms';
        swot.style.transform = 'scale(1.02)';
        setTimeout(()=> swot.style.transform = 'scale(1)', 250);
      }
    });
  }
});

