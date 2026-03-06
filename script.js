   // Бургер-меню
        const burger = document.querySelector('.burger');
        const navUl = document.querySelector('nav ul');

        burger.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });

        // Закрытие меню при клике на ссылку
        document.querySelectorAll('nav ul a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('show');
            });
        });
   
        // Фильтрация товаров
        const filterLinks = document.querySelectorAll('.filter');
        const categories = document.querySelectorAll('.category');

        filterLinks.forEach(link => {
            link.addEventListener('click', function() {
                filterLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');

                categories.forEach(category => {
                    if (filter === 'all') {
                        category.classList.remove('hidden');
                    } else {
                        if (category.getAttribute('data-category') === filter) {
                            category.classList.remove('hidden');
                        } else {
                            category.classList.add('hidden');
                        }
                    }
                });
            });
        });
 document.querySelectorAll('.product-slider').forEach(sliderContainer => {
            const slider = sliderContainer.querySelector('.product-slides');
            const prevBtn = sliderContainer.querySelector('.prev');
            const nextBtn = sliderContainer.querySelector('.next');
            let currentIndex = 0;
            const slides = slider.querySelectorAll('img');
            const totalSlides = slides.length;

            function updateSlider() {
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
                updateSlider();
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
                updateSlider();
            });
        });

        // Модальное окно для кликабельных изображений
        const modal = document.getElementById('imageModal');
        const modalImg = modal.querySelector('img');
        const modalClose = modal.querySelector('.modal-close');
        const images = document.querySelectorAll('.product-slides img');

        images.forEach(img => {
            img.addEventListener('click', () => {
                modalImg.src = img.src;
                modalImg.alt = img.alt;
                modal.style.display = 'flex';
            });
        });

        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Закрытие модального окна при клике вне изображения
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function(){
        document.getElementById('phone-fab').classList.add('visible');
    }, 6000); // появляется через 6 секунд
});

    document.addEventListener('fullscreenchange', (event) => {
  if (document.fullscreenElement) {
    document.exitFullscreen(); // Выход из полноэкранного режима, если он включен
  }
});
// всплывающее окно
window.onload = function() {
  const popup = document.getElementById('myPopup');
  const closeBtn = document.querySelector('.close-btn');

  // Показываем окно через 10000 мс (10 секунд)
  setTimeout(() => {
    popup.style.display = 'block';
  }, 10000);

  // Закрытие при нажатии на крестик
  closeBtn.onclick = function() {
    popup.style.display = 'none';
  };
};
