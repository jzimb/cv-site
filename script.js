window.addEventListener('DOMContentLoaded', () => {
  const messageEl = document.getElementById('message');

  setTimeout(() => {
    messageEl.classList.remove('hidden');
  }, 2000);
});
