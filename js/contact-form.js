document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Get form values
    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      subject: document.getElementById('subject').value.trim(),
      message: document.getElementById('message').value.trim(),
      timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    saveMessage(formData);
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    contactForm.reset();
  });

  function validateForm() {
    const email = document.getElementById('email').value.trim();
    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address');
      return false;
    }
    return true;
  }

  function saveMessage(formData) {
    try {
      let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
      messages.push(formData);
      localStorage.setItem('contactMessages', JSON.stringify(messages));
      console.log('Message saved:', formData);
    } catch (error) {
      console.error('Error saving message:', error);
    }
  }

  function showSuccessMessage() {
    successMessage.classList.remove('hidden');
    
    // Hide after 5 seconds
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 5000);
    
    // Smooth scroll to show the message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});