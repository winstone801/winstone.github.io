serenity.js
document.addEventListener('DOMContentLoaded', function() {

  // Smooth scrolling for navbar links
  const navLinks = document.querySelectorAll('.navbar-right a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor click behavior

      const targetId = this.getAttribute('href').substring(1); // Get target ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Example function to handle the "Book Now" button click
  document.querySelector('.cta-buttons .book-now').addEventListener('click', function() {
    alert('Booking functionality is not yet implemented.');
  });

  // Example function to handle the "Play Video" button click
  document.querySelector('.cta-buttons .play-video').addEventListener('click', function() {
    alert('Video functionality is not yet implemented.');
  });

  // Optional: Mobile menu toggle (if you plan to add a mobile menu)
  // const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  // const navbarRight = document.querySelector('.navbar-right');

  // if (mobileMenuToggle) {
  //   mobileMenuToggle.addEventListener('click', function() {
  //     navbarRight.classList.toggle('active');
  //   });
  // }

});
