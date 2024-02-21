let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

const buyButtons = document.querySelectorAll('.buy-btn');
const rentButtons = document.querySelectorAll('.rent-btn');
const shareButtons = document.querySelectorAll('.share-btn');

function handleClick(event) {
  const button = event.target;
  const item = button.parentElement;
  const itemName = item.querySelector('h2').textContent;
  let itemPrice = 0;

  // Determine the price of the item based on its name (this is just a dummy logic)
  switch (itemName) {
    case 'Item 1':
      itemPrice = 100;
      break;
    case 'Item 2':
      itemPrice = 150;
      break;
    case 'Item 3':
      itemPrice = 200;
      break;
    default:
      itemPrice = 0;
  }

  if (button.classList.contains('share-btn')) {
    // If Share Cost button is clicked, update the price
    item.querySelector('.price').textContent = `Price: $${itemPrice / 2} (Shared)`;
  } else {
    // Otherwise, show the original price
    item.querySelector('.price').textContent = `Price: $${itemPrice}`;
  }
}

buyButtons.forEach(button => {
  button.addEventListener('click', handleClick);
});

rentButtons.forEach(button => {
  button.addEventListener('click', handleClick);
});

shareButtons.forEach(button => {
  button.addEventListener('click', handleClick);
});
