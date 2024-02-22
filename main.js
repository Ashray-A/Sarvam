// window.addEventListener('scroll', () => {
//     const nav = document.querySelector('nav');
//     const scrollPosition = window.scrollY;
  
//     if (scrollPosition > 100) { /* Adjust scroll threshold as needed */
//       nav.classList.add('scrolled');
//     } else {
//       nav.classList.remove('scrolled');
//     }
//   });

document.addEventListener("DOMContentLoaded", function () {
  // Get the home button element
  var homeBtn = document.getElementById('home-btn');

  // Add click event listener to the home button
  homeBtn.addEventListener('click', function (event) {
    // Prevent default anchor behavior
    event.preventDefault();

    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

document.getElementById('lm').addEventListener('click', function() {
  // Get the mission section
  var missionSection = document.querySelector('.mission');
  
  // Calculate the position to scroll to
  var scrollPosition = missionSection.offsetTop - 50;
  
  // Scroll to the calculated position
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
  });



