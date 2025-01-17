function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor(); 
  body.style.backgroundColor = randomColor; 
  colorSpan.textContent = randomColor; 
});
body.style.display = 'block';
body.style.flexDirection = 'column';
body.style.padding = '100px 88px';
body.style.width = '345px';
body.style.height = '280px';
body.style.alignItems = 'center';

changeColorButton.style.backgroundColor
changeColorButton.style.width = '148px';
changeColorButton.style.height = '40px';
changeColorButton.style.borderRadius = '8px';
changeColorButton.addEventListener('mouseover', () => {
  changeColorButton.style.backgroundColor = '#6c8cff'; 
});

changeColorButton.addEventListener('mouseout', () => {
  changeColorButton.style.backgroundColor = '#4e75ff'; 
});