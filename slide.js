
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.gallery-control-btn.arrow-left');
    const nextButton = document.querySelector('.gallery-control-btn.arrow-right');
    const galleryContent = document.querySelector('.gallery-content');
    let currentIndex = 0;
    const images = Array.from(galleryContent.querySelectorAll('img'));
  
    function updateGallery(index) {
      galleryContent.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
    }
  
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        updateGallery(currentIndex - 1);
      }
    });
  
    nextButton.addEventListener('click', () => {
      if (currentIndex < images.length - 1) {
        updateGallery(currentIndex + 1);
      }
    });
  });
  
  const planeTitle = document.querySelector('.plane-title');
  const planeImage = document.querySelector('.plane img');
  
  planeTitle.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src="${planeImage.src}" alt="Типовая планировка" />
      </div>
    `;
    document.body.appendChild(modal);
  
    modal.querySelector('.close').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  });
  

  
  document.addEventListener('DOMContentLoaded', initializeMap);

  const contactForm = document.querySelector('.contactBlock form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
  
    if (name && phone) {
      alert('Форма отправлена успешно!');
      contactForm.reset();
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  });
  