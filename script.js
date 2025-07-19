window.addEventListener('DOMContentLoaded', () => {
  const message = document.getElementById('message');

  setTimeout(() => {
    message.classList.add('visible');
  }, 500); // 0.5 секунды
});
