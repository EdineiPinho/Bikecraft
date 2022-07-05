// Ativar links do menu

const links = document.querySelectorAll(".header-menu a");

function ativarLinks(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLinks);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProdutos(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
    console.log(elemento);
  }
}

parametros.forEach(ativarProdutos);

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  console.log(resposta);
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
  console.log(pergunta);
}

perguntas.forEach(eventosPerguntas);
console.log(perguntas);

// Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
console.log(galeria);
const galeriaContainer = document.querySelector(".bicicleta-imagens");
console.log(galeriaContainer);

function trocarImagem(evento) {
  const img = evento.currentTarget;
  const midia = matchMedia("(min-width: 1000px)").matches;
  if (midia) {
    galeriaContainer.prepend(img);
  }
}

function galeriaEventos(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(galeriaEventos);

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
