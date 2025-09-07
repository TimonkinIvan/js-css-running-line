document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('marquee-container');
    if (!container) return; // Защита, если элемента нет на странице

    const textElement = document.getElementById('marquee-text');
    if (!textElement) return;

    const runningLine = document.querySelector('.running-line');
    const originalHref = textElement.href;
    const textContent = "одежда как признание"; // Используем чистый текст

    // === Скорость движения строки ===
    let speed = 40; // Пикселей в секунду (измените значение для регулировки скорости)
    
    let copies = 0; // Инициализируем переменную для копий

    function setupMarquee() {
        const textWidth = textElement.offsetWidth > 0 ? textElement.offsetWidth : 200; // Примерная ширина, если элемент скрыт
        const screenWidth = runningLine.offsetWidth;
        const requiredCopies = Math.ceil(screenWidth / textWidth) * 3; // Умножаем на 3 для гарантии

        if (requiredCopies === copies) return; // Не пересоздаем, если не нужно
        copies = requiredCopies;

        container.innerHTML = ''; // Очищаем контейнер
        for (let i = 0; i < copies; i++) {
            const link = document.createElement('a');
            link.href = originalHref;
            link.id = i === 0 ? 'marquee-text' : ''; // Восстанавливаем ID для первого элемента
            link.textContent = textContent;
            link.style.marginRight = '40px';
            link.style.color = '#000'; // Применяем цвет текста
            link.style.textDecoration = 'none';
            container.appendChild(link);
        }
    }


    // 3. Анимация с плавным переходом
    let position = 0;
    
    function animate() {
        position -= speed / 60; // Делим на 60 для плавной анимации (60 кадров в секунду)
        
        // Плавный сброс позиции
        const totalWidth = container.scrollWidth / copies * (copies/2); // Более точный расчет ширины для сброса
        if (position <= -totalWidth) {
            position = 0;
        }
        
        container.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate); // Этот метод делает анимацию плавной
    }

    setupMarquee();
    animate();
    
    // 4. Адаптация при изменении размера окна
    window.addEventListener('resize', setupMarquee);
});
