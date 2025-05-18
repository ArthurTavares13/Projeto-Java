// Filtro de Produtos (para produtos.html)
function filtrarProdutos() {
    const input = document.getElementById('busca').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      const texto = card.textContent.toLowerCase();
      card.style.display = texto.includes(input) ? 'flex' : 'none';
    });
  }
  
  // Mostrar botão voltar ao topo (para todos os arquivos HTML)
  window.addEventListener('scroll', () => {
    const botao = document.getElementById('topo');
    botao.style.display = window.scrollY > 200 ? 'block' : 'none';
  });
  
  // Menu Toggle (Para dispositivos móveis - para index.html)
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Funcionalidade de Tela de Login (para index.html)
  document.addEventListener('DOMContentLoaded', function () {
    const telaLogin = document.getElementById('tela-login');
    const form = document.getElementById('form-login');
    const erro = document.getElementById('erro');
  
    // Se já estiver logado, oculta a tela de login
    if (sessionStorage.getItem('logado') === 'true') {
      telaLogin.style.display = 'none';
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  
    // Verifica o envio do formulário
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const usuario = document.getElementById('usuario').value;
      const senha = document.getElementById('senha').value;
  
      if (usuario === '1234' && senha === '1234') {
        sessionStorage.setItem('logado', 'true');
        telaLogin.style.display = 'none';
        document.body.style.overflow = 'auto';
      } else {
        erro.style.display = 'block';
      }
    });
  });

  // Filtro de Produtos (para produtos.html)
function filtrarProdutos() {
  const input = document.getElementById('busca').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    const texto = card.textContent.toLowerCase();
    card.style.display = texto.includes(input) ? 'flex' : 'none';
  });
}

// Mostrar botão voltar ao topo (para todos os arquivos HTML)
window.addEventListener('scroll', () => {
  const botao = document.getElementById('topo');
  botao.style.display = window.scrollY > 200 ? 'block' : 'none';
});




  