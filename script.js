document.addEventListener('DOMContentLoaded', function() {
  const contentContainer = document.querySelector('.marquee-content');
  const text = 'одежда как признание';
  const link = 'https://lovefirst.ru/'; // ПРАВИЛЬНАЯ ССЫЛКА
  const numberOfCopies = 20;

  let fullText = '';
  for (let i = 0; i < numberOfCopies; i++) {
    fullText += `<a href="${link}" class="marquee-text-item">${text}</a>`;
  }

  contentContainer.innerHTML = fullText + fullText;
});
