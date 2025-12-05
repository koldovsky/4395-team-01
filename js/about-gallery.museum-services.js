// about-gallery.museum-services.js

export function initMuseumServices() {
  console.log('Museum Services init started');
  
  // Отримуємо параметр з URL
  const urlParams = new URLSearchParams(window.location.search);
  const scrollParam = urlParams.get('scroll');
  
  console.log('Scroll param:', scrollParam);
  
  if (scrollParam === 'latest') {
    console.log('Scroll param detected, waiting for .latest-events...');
    
    // Функція для перевірки наявності елементу
    function waitForElement(selector, callback, maxAttempts = 20) {
      let attempts = 0;
      
      const checkElement = setInterval(() => {
        attempts++;
        const element = document.querySelector(selector);
        
        if (element) {
          console.log(`Element found after ${attempts} attempts`);
          clearInterval(checkElement);
          callback(element);
        } else if (attempts >= maxAttempts) {
          console.error(`Element ${selector} not found after ${maxAttempts} attempts`);
          clearInterval(checkElement);
        } else {
          console.log(`Attempt ${attempts}: waiting for ${selector}...`);
        }
      }, 100); // Перевірка кожні 100ms
    }
    
    // Чекаємо на елемент і скролимо
    waitForElement('.latest-events', (element) => {
      console.log('Scrolling to:', element);
      
      // Додаємо невелику затримку для рендерингу
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        
        // Альтернативний метод з offset
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - 80, // відступ для header
            behavior: 'smooth'
          });
        }, 300);
      }, 200);
    });
  }
}

// Автоматичний запуск
initMuseumServices();