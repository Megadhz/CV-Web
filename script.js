const text = "PUTU MEGA";
let index = 0;
let isDeleting = false;
const typingEffect = document.getElementById("typing-effect");

function typeEffect() {
  typingEffect.textContent = text.slice(0, index);

  if (!isDeleting) {
    index++;
    if (index === text.length) {
      setTimeout(() => (isDeleting = true), 3000);
    }
  } else {
    index--;
    if (index === 0) {
      isDeleting = false;
    }
  }

  const speed = isDeleting ? 90 : 300;
  setTimeout(typeEffect, speed);
}

typeEffect();

const headerText = document.querySelector(".header-text h2");
setInterval(() => {
  headerText.style.color = headerText.style.color === "gold" ? "#cfcfcf" : "gold";
  headerText.style.transition = "color 0.5s ease-in-out";
}, 1000);

const resume = document.querySelector(".resume");
resume.style.opacity = "0";
setTimeout(() => {
  resume.style.transition = "opacity 2s ease-in-out";
  resume.style.opacity = "1";
}, 500);
