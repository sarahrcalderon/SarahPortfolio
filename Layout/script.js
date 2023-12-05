function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "pt",
      includedLanguages: "pt,en",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-250px";
  } else {
    sidebar.style.left = "0px";
  }
}

// Fechar a barra lateral se clicar fora dela
window.onclick = function (event) {
  var sidebar = document.getElementById("sidebar");
  if (event.target != sidebar && !event.target.closest(".menuIcon")) {
    sidebar.style.left = "-250px";
  }
};

// Texto a ser digitado
const textToType = "HELLO!";

// Elemento <h1>
const typedTextElement = document.getElementById("typed-text");

// Chama a função para iniciar o efeito de digitação quando a página é carregada
document.addEventListener("DOMContentLoaded", function () {
  typeWriter();
});

// Função para simular o efeito de digitação
function typeWriter() {
  let charIndex = 0;
  const textLength = textToType.length;

  function type() {
    typedTextElement.textContent += textToType[charIndex];
    charIndex++;

    if (charIndex < textLength) {
      setTimeout(type, 700); // Ajuste a velocidade da digitação aqui (em milissegundos)
    }
  }

  type();
}
