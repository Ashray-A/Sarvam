window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) { /* Adjust scroll threshold as needed */
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  
  document.getElementById("myButton1").onclick = function () {
    location.href = "login.html";
};
document.getElementById("myButton2").onclick = function () {
  location.href = "login.html";
};
function hideButton(myButton2) {
  document.getElementById('myButton2').style.display = 'none';
}