window.addEventListener('DOMContentLoaded', () => {
  const message = document.getElementById('message');

  setTimeout(() => {
    message.classList.add('visible');
  }, 10000); // 10 секунд
});
