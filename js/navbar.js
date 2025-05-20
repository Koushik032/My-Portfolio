document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const aboutMobileBtn = document.getElementById('about-mobile-btn');
  const aboutMobileMenu = document.getElementById('about-mobile-menu');

  // Toggle mobile menu
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });

  // Toggle about submenu in mobile
  aboutMobileBtn.addEventListener('click', function() {
    aboutMobileMenu.classList.toggle('hidden');
  });

  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Add click event to all nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the target section ID from href
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      // Scroll to the section smoothly
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
      
      // Close mobile menus if open
      mobileMenu.classList.add('hidden');
      aboutMobileMenu.classList.add('hidden');
      
      // Update active link styling
      updateActiveLink(this, true);
    });
  });

  // Function to update active link styling
  function updateActiveLink(clickedLink, isClicked = false) {
    // Remove active classes from all links
    navLinks.forEach(link => {
      link.classList.remove('bg-gray-900');
      // Keep the original text color (cyan-300)
      link.classList.add('text-cyan-300');
    });
    
    // Add active class to clicked link
    clickedLink.classList.add('bg-gray-900');
    
    // If it's a submenu link, also highlight the parent "Abouts" button
    const section = clickedLink.dataset.section;
    if (section === 'personal' || section === 'Social_Platforms' || section === 'achievements') {
      const aboutBtn = document.querySelector('[data-section="about"]');
      if (aboutBtn) {
        aboutBtn.classList.add('bg-gray-900');
      }
    }
  }

  // Set home as active by default
  const homeLink = document.getElementById('home');
  if (homeLink) {
    updateActiveLink(homeLink);
  }

  // Highlight section on scroll
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    // Find the corresponding nav link and update active state
    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${current}`) {
        updateActiveLink(link);
      }
    });
  });
});