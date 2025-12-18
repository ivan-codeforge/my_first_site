const button = document.querySelector('.btn');

button.addEventListener('click', () => {
  button.textContent = '🔥 Работает!';
  button.style.backgroundColor = '#00e676';
  button.style.color = '#003300';
});
