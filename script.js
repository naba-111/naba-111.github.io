// Small interactions for the portfolio. The page works without JavaScript too.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// If you add your own video files, replace the matching placeholder in index.html
// with: <video controls playsinline preload="metadata"><source src="assets/edit-01.mp4" type="video/mp4"></video>
