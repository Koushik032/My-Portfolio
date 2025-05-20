// Auto-rotate project images
  document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.group');
    
    projects.forEach(project => {
      const images = project.querySelectorAll('img');
      let currentIndex = 0;
      
      if(images.length > 1) {
        setInterval(() => {
          images[currentIndex].classList.remove('opacity-100');
          images[currentIndex].classList.add('opacity-0');
          
          currentIndex = (currentIndex + 1) % images.length;
          
          images[currentIndex].classList.remove('opacity-0');
          images[currentIndex].classList.add('opacity-100');
        }, 3000); // Change image every 3 seconds
      }
    });
  });