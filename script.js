const words = ["Hello", "Hola", "Bonjour", "Ciao", "Hallo", "नमस्ते", "こんにちは", "你好"];
let i = 0;
const wordEl = document.getElementById("word");

function showNextWord() {
  wordEl.style.opacity = 0;

  setTimeout(() => {
    wordEl.textContent = words[i];
    wordEl.style.opacity = 1;
    i = (i + 1) % words.length;
  }, 1000); // Wait for fade-out

  setTimeout(showNextWord, 3000); // Total duration (1s fade-out + 2s display)
}

showNextWord();
