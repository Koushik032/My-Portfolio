// Typing animation configuration
const phrases = [
  "Frontend Developer.",
  "Competitive Programmer.",
  "Student.",
  "Problem Solver.",
  "Machine Learner.",
  "Tech Enthusiast."
];

// Animation variables
const typedTextElement = document.getElementById('typed-text');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

// Main typing function
function typeWriter() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50; // Faster when deleting
  } else {
    typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100; // Normal typing speed
  }

  // Handle phrase transitions
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingSpeed = 1500; // Pause at end of phrase
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500; // Pause before next phrase
  }

  setTimeout(typeWriter, typingSpeed);
}

// Start the animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initial delay before animation starts
  setTimeout(typeWriter, 1000);
});