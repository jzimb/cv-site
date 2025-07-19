window.addEventListener('DOMContentLoaded', () => {
  const message = document.getElementById('message');

  setTimeout(() => {
    message.classList.add('visible');
  }, 5000); // 5 секунд
});
