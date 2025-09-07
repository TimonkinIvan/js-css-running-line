document.addEventListener('DOMContentLoaded', function() {
  const contentContainer = document.querySelector('.marquee-content');
  const originalText = 'одежда как признание';
  const linkUrl = 'https://lovelinst.ru/';
  let repeatedContent = '';
  
  for (let i = 0; i < 20; i++) {
    repeatedContent += `<a href="${linkUrl}">${originalText}</a>`;
  }
  
  contentContainer.innerHTML = repeatedContent;
});
