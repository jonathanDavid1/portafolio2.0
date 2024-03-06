let rocket = document.getElementById('rocket');
const initialTop = getComputedStyle(rocket).getPropertyValue('top');
const initialTopInt = parseInt(initialTop, 10)

window.addEventListener('scroll', () => {
   let value = window.scrollY;
   let valuew = rocket.style.top = (initialTopInt - value) + 'px'

} )

