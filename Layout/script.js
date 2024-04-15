//TRADUTOR
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

//DARK MODE THEME
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})




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
};

//BTN
const btnSaibaMaisGit = document.getElementById('btnSaibaMaisGit');
btnSaibaMaisGit.addEventListener('click', function() {
    window.location.href = 'https://github.com/sarahrcalderon/pythonNotasFiscais/blob/main/index.py';
});


const btnSaibaMais = document.getElementById('btnSaibaMais');
btnSaibaMais.addEventListener('click', function() {
    window.location.href = 'https://www.behance.net/gallery/162017075/BotaniK-UX-UI-Design';
  });

document.getElementById('btnDownloadCurriculo').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'Assets/curriculo/sarahr_curriculo.pdf';
  link.setAttribute('download', 'sarahr_curriculo.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  });