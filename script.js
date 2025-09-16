// script.js
// Interatividade mínima: copiar código do protótipo, simular envio do formulário,
// e destacar a SWOT ao clicar (pequena interação para a apresentação).

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

  // Formulário de contato (simulado)
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Mensagem simulada enviada — em projeto real, aqui enviaríamos para backend (PHP/MySQL).');
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
