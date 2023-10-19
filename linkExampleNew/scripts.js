// Site by discord: profkrzys //

const textElement1 = document.getElementById("text-animation-1");
const words1 = ["Login", "Pay", "Register"];
let wordIndex1 = 0;
let charIndex1 = 0;

const textElement2 = document.getElementById("text-animation-2");
const words2 = ["Fast", "Good", "Free", "Cool"];
let wordIndex2 = 0;
let charIndex2 = 0;

function typeText1() {
  if (wordIndex1 < words1.length) {
    if (charIndex1 < words1[wordIndex1].length) {
      textElement1.textContent += words1[wordIndex1].charAt(charIndex1);
      charIndex1++;
      setTimeout(typeText1, 100);
    } else {
      setTimeout(eraseText1, 1000);
    }
  }
}

function eraseText1() {
  if (charIndex1 > 0) {
    textElement1.textContent = words1[wordIndex1].substring(0, charIndex1 - 1);
    charIndex1--;
    setTimeout(eraseText1, 50);
  } else {
    wordIndex1 = (wordIndex1 + 1) % words1.length;
    setTimeout(typeText1, 500);
  }
}

function typeText2() {
  if (wordIndex2 < words2.length) {
    if (charIndex2 < words2[wordIndex2].length) {
      textElement2.textContent += words2[wordIndex2].charAt(charIndex2);
      charIndex2++;
      setTimeout(typeText2, 100);
    } else {
      setTimeout(eraseText2, 1000);
    }
  }
}

function eraseText2() {
  if (charIndex2 > 0) {
    textElement2.textContent = words2[wordIndex2].substring(0, charIndex2 - 1);
    charIndex2--;
    setTimeout(eraseText2, 50);
  } else {
    wordIndex2 = (wordIndex2 + 1) % words2.length;
    setTimeout(typeText2, 500);
  }
}

typeText1();
typeText2();


function doSomething() {
  console.log("%c  _____ _______ ____  _____  ", "color: red;");
  console.log("%c / ____|__   __/ __ |  __ \\ ", "color: red;");
  console.log("%c| (___    | | | |  | | |__) |", "color: red;");
  console.log("%c \\___ \\   | | | |  | |  ___/ ", "color: red;");
  console.log("%c ____) |  | | | |__| | |     ", "color: red;");
  console.log("%c|_____/   |_|  \\____/|_|    ", "color: red;");

  console.log("%cDont paste anything here. It can be dangerous!", "color: blue;");
}
setInterval(doSomething, 5000);

// Site by discord: profkrzys //
