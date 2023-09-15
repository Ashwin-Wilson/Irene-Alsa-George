const typedText = document.querySelector('.typed-text');
const textToType = "I'm an eager volunteer, a passionate and curious learner, driven to actively contribute to my community through the power of knowledge.";
let index = 0;

function typeText() {
  typedText.textContent = textToType.slice(0, index);
  index++;

  // if (index > textToType.length) {
  //   index = 0;
  // }

  setTimeout(typeText, 150); // Adjust typing speed here (in milliseconds)
}

typeText();
