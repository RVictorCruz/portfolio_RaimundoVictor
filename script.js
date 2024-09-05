// Você pode adicionar scripts JavaScript aqui para interatividade, como animações ou navegação suave.
// Exemplo de navegação suave:
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
