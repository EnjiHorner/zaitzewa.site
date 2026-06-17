/* ФАЙЛ: script.js */
document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.getElementById('cta-button');

  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      alert('Запись скоро будет доступна');
    });
  }
});