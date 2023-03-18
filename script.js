const paragraphs = document.querySelectorAll('.profile p');

const typingDelay = 1000;
const typingSpeed = 50;

function typeEffect(element, text) {
  let index = 0;
  const intervalId = setInterval(() => {
    element.textContent += text.charAt(index);
    index++;
    if (index === text.length) {
      clearInterval(intervalId);
    }
  }, typingSpeed);
}

paragraphs.forEach((paragraph, index) => {
  setTimeout(() => {
    typeEffect(paragraph, paragraph.textContent);
  }, typingDelay + index * paragraph.textContent.length * typingSpeed);
});
