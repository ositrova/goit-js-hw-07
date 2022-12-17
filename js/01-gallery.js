// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного 
// зображення у модальному вікні. Подивися демо відео роботи галереї.`


// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN 
// сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з 
// документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.



import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const containerGallary = document.querySelector('.gallery');

const imgItems = galleryItems.map(({ preview, original, description }) =>

`<div class="gallery__item">
<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" 
data-source="${original}" alt="${description}"/>
</a>
</div>`).join('');


containerGallary.insertAdjacentHTML('beforeend', imgItems);

containerGallary.addEventListener('click', onclick);

function onclick (elem) {
elem.preventDefault();
const currentImg = elem.target;
const instance = basicLightbox.create(
    `<img src="${currentImg.dataset.source}" width="1000"/>`,
    {
      onShow: () => {
        document.addEventListener('keydown', closeModal);
      },
      onClose: () => {
        document.removeEventListener('keydown', closeModal);
      },
    }
  );
  instance.show();

  function closeModal(e) {
    if (e.key === 'Escape') {
      instance.close();
      console.log(e.key);
    }
  }
}
