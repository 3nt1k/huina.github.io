alert('Цей сайт не є офіційним!');


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-grid img');
  
    const onScroll = () => {
      images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          image.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', onScroll);
  
    // Trigger the scroll event on page load to show images already in view
    onScroll();
  });
  