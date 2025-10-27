// Outras formas de selecionar elementos no DOM:
// document.querySelector("button")
// document.getElementsByClassName("classe")
// Entradas
// Seleciona o botão pelo ID "btn"
// Seleciona os elementos do DOM
const btn = document.getElementById("btn");
const img = document.querySelector("img"); // Seleciona a tag de imagem

// Define as URLs das imagens
const furretNormal = "https://archives.bulbagarden.net/media/upload/thumb/a/a8/0162Furret.png/250px-0162Furret.png";
const furretShiny = "https://www.pokecenterblog.pt/wp-content/uploads/Home/Big/Furret-shiny.png";

// Cria uma variável para controlar o modo (true = claro, false = escuro)
let isLightMode = true;

// Adiciona um evento de clique no botão
btn.addEventListener("click", () => {
    alert("Botão clicado!");
  // Alterna o modo
  isLightMode = !isLightMode;

  if (isLightMode) {
    // Modo Claro
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    img.src = furretNormal;
  } else {
    // Modo Escuro
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    img.src = furretShiny;
  }
});

//Saída
// Altera o estilo do corpo da página e a imagem com base no modo
// (feito dentro do evento de clique)