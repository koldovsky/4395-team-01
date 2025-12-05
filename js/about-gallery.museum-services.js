// about-gallery.museum-services.js

export function initMuseumServices() {
  // Отримуємо параметр з URL
  const urlParams = new URLSearchParams(window.location.search);
  const scrollParam = urlParams.get('scroll');
  
  // Якщо параметр scroll=latest, скролимо до блоку
  if (scrollParam === 'latest') {
    // Невелика затримка для завантаження всіх partials
    setTimeout(() => {
      const latestEventsBlock = document.querySelector('.latest-events');
      
      if (latestEventsBlock) {
        // Плавний скрол до елементу
        latestEventsBlock.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      } else {
        console.warn('Latest events block not found');
      }
    }, 100);
  }
}

// Автоматичний запуск
initMuseumServices();