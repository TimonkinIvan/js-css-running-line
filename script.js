document.addEventListener('DOMContentLoaded', function() {
  const contentContainer = document.querySelector('.marquee-content');
  
  const originalText = 'одежда как признание';
  const linkUrl = 'https://lovelinst.ru/';
  
  let repeatedContent = '';
  
  // Дублируем текст 15 раз, чтобы строка была очень длинной
  for (let i = 0; i < 15; i++) {
    repeatedContent += `<a href="${linkUrl}">${originalText}</a>`;
  }
  
  // Добавляем содержимое в контейнер дважды для бесшовного зацикливания
  contentContainer.innerHTML = repeatedContent + repeatedContent;
});
