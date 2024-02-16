window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) { /* Adjust scroll threshold as needed */
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });