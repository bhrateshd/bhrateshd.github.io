// Add loaded class to body after DOM is ready for fade-in and enhanced animations
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.body.classList.add('loaded');
  }, 1800);
});
// Minimal JS for contact form (no backend, just UI feedback)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.reset();
      alert('Thank you for reaching out!');
    });
  }
});
