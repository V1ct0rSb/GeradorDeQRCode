// -> Pegar os dados
const pagina = document.querySelector("#qr-container");
const botaoFormulario = document.querySelector("#generate-btn");
const inputFormulario = document.querySelector("#text-input");
const campoExibicao = document.querySelector("#qr-code");
const imagemQrCode = document.querySelector("#qr-code img");

//-> Função
function geradorQrCode() {
  const valorInputFormulario = inputFormulario.value;

  //Se o campo estiver vazio, vai mostrar um alerta
  if (valorInputFormulario === "") {
    alert("Digite um texto ou link para gerar o QR Code");
    return;
  }

  botaoFormulario.innerText = "Gerando...";
  imagemQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valorInputFormulario}`;
  console.log(campoExibicao.src);

  //Quando a imagem carregar, vai adicionar a classe active no container e mudar o texto do botão para "Código criado!"
  imagemQrCode.addEventListener("load", () => {
    pagina.classList.add("active"); //Adiciona a classe active no container
    botaoFormulario.innerText = "Código criado!"; //Muda o texto do botão que era "Gerar QR Code" para "Código criado!"
    imagemQrCode.style.display = "block"; // Mostra a imagem do QR Code
  });
}

//-> Eventos
botaoFormulario.addEventListener("click", () => {
  geradorQrCode();
});

// Limpar área do código, ou seja, quando o campo de texto estiver vazio, vai remover a classe active do container e mudar o texto do botão para "Gerar QR Code"
inputFormulario.addEventListener("keyup", () => {
  if (!inputFormulario.value) {
    pagina.classList.remove("active");
    botaoFormulario.innerText = "Gerar QR Code";
    imagemQrCode.style.display = "none"; // Esconde a imagem
  }
});
