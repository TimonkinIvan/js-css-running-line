document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('marquee-container');
  const runningLine = document.querySelector('.running-line');
  
  const originalText = 'одежда как признание';
  const originalHref = 'https://lovefirst.ru/';
  let speed = 40;

  function setupMarquee() {
    container.innerHTML = '';
    const textWidthWithMargin = 250;
    const screenWidth = runningLine.offsetWidth;
    const copies = Math.ceil(screenWidth / textWidthWithMargin) + 5;

    for (let i = 0; i < copies; i++) {
      const link = document.createElement('a');
      link.href = originalHref;
      link.className = 'marquee-text-item';
      link.textContent = originalText;
      container.appendChild(link);
    }
    
    // Дублируем для бесшовности
    container.innerHTML += container.innerHTML;
  }

  function animateMarquee() {
    let position = 0;
    const totalWidth = container.scrollWidth / 2;
    
    function animate() {
      position -= speed / 60;
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }
    animate();
  }

  setupMarquee();
  animateMarquee();

  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setupMarquee, 250);
  });
});
