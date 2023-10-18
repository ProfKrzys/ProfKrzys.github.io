const textElement = document.getElementById("text-animation");
const words = ["Login", "Pay", "Register"];
let wordIndex = 0;
let charIndex = 0;

function typeText() {
  if (wordIndex < words.length) {
    if (charIndex < words[wordIndex].length) {
      textElement.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100);
    } else {
      setTimeout(eraseText, 1000);
    }
  }
}

function eraseText() {
  if (charIndex > 0) {
    textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeText, 500);
  }
}


typeText();
