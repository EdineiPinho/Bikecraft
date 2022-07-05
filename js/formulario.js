const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  console.log(resposta);
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color:#317a00;'>Email enviado com sucesso!</span> Retornaremos em breve, geralmente leva menos de 24hrs.</p>";
  } else {
    formulario.innerHTML =
      "<p  class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color:#e00000;'>Erro ao enviar</span>, você pode enviar o email diretamente no nosso email: bikcraft@gmail.com</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerHTML = "Enviando...";

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);

console.log(formulario);
