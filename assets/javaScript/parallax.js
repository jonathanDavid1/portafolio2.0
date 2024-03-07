let rocket = document.getElementById('rocket');
const initialTop = getComputedStyle(rocket).getPropertyValue('top');
const initialTopInt = parseInt(initialTop, 10);

let moon = document.getElementById('moon-img');
const initialwidth = getComputedStyle(moon).getPropertyValue('width');
const initialwidthInt = parseInt(initialwidth,10)



window.addEventListener('scroll', () => {
   let value = window.scrollY;
   rocket.style.top = (initialTopInt - value) + 'px'
   moon.style.width = (initialwidthInt)*(1/((value/350)+1)) + 'px'

  
} )

