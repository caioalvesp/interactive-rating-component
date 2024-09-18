const buttons = document.querySelectorAll('.rating');
const selection = document.querySelector('.selection');

const handleClick = event => {
  localStorage.setItem('nota', event.target.innerText);
};

buttons.forEach(button => button.addEventListener('click', handleClick));

selection.innerText = `You selected ${localStorage.getItem('nota')} out of 5`;
