// Outras formas de selecionar elementos no DOM:
// document.querySelector("button")
// document.getElementsByClassName("classe")
// Entradas
// Seleciona o botão pelo ID "btn"
// Seleciona os elementos do DOM
const btn = document.getElementById("btn");
const img = document.querySelector("img"); // Seleciona a tag de imagem
const textos = document.querySelectorAll(".texto");

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
    document.body.style.backgroundImage = "none";
    img.src = furretNormal;
    textos.forEach(texto => {
      texto.style.backgroundColor = "transparent";
    });
  } else {
    // Modo Escuro
    document.body.style.background = "url('img/360f9d1b1d256fbbbe8238ab25198f22(1).gif') no-repeat center center fixed"; 
    document.body.style.color = "white";
    document.body.style.backgroundSize = "cover";
    textos.forEach(texto => {
      texto.style.backgroundColor = "#2b1a22ff";
    });
    img.src = furretShiny;
  }
});

//Saída
// Altera o estilo do corpo da página e a imagem com base no modo
// (feito dentro do evento de clique)

//loops é uma estrutura de repetição, que repete um bloco de código várias vezes enquanto uma condição for verdadeira.
// Exemplos: for, while, do...while


//for (variavel contadora; condição; iteração/incremento) { bloco de código } serve para automatizar repetições de código quando sabemos o número exato de repetições.
//while (condição) { bloco de código }
//do { bloco de código } while (condição);

for (let contador = 0; contador <= 10;  contador +=1 ) {
    console.log("Contador é igual a: " + contador);
}

for (let i = 10; i >= 0; i -= 1) {
    console.log("Contador decrescente: " + i);
}


//while
let contadorDeCafé = 0;
while (contadorDeCafé <= 10) {
    console.log("Contador while é igual a: " + contadorWhile); //bloco de código, tarefa
    contadorWhile += 1;
}