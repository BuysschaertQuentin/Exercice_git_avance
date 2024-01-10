function changeColors() {
    const button = document.getElementById('colorButton');
    const title = document.getElementById('title');
    const texte = document.getElementById('texte');
    const title2 = document.getElementById('title2');
  
    const buttonColor = getRandomColor();
    const titleColor = getRandomColor();
    const textColor = getRandomColor();
    const title2Color = getRandomColor();

  
    button.style.backgroundColor = buttonColor;
    title.style.color = titleColor;
    title2.style.color = title2Color;
    texte.style.color = textColor;
  }
  
  function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#33FFFF', '#FF33FF', '#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#33FFFF', '#FF33FF'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  const button = document.getElementById('colorButton');
  button.addEventListener('click', changeColors);