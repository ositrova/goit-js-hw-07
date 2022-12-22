// Зроби таку саму галерею як в першому завданні, але використовуючи
//  бібліотеку SimpleLightbox, яка візьме на себе обробку кліків по 
//  зображеннях, відкриття і закриття модального вікна, а також гортання
//   зображень за допомогою клавіатури.


// Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

// <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//  </a>

// Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. Розбий його на 
// декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого 
// шаблону елемента галереї. Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. 
// Необхідно додати посилання на два файли: simple-lightbox.min.js і 
// simple-lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї
//  у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед 
//  секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до 
// зображень з атрибута alt. Нехай підпис буде знизу і 
// з'являється через 250 мілісекунд після відкриття зображення. */}



import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`,
  '',
);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom',
  });

  // const containerGal = document.querySelector('.gallery');

  // const imgItem = galleryItems.map(({ preview, original, description }) =>
  
  // `<a class="gallery__item" href="${original}">
  // <img class="gallery__image" src="${preview}" 
  // data-source="${original}" alt="${description}"/>
  // </a>
  // `).join('');
  
  // containerGal.insertAdjacentHTML('beforeend', imgItem);
  
  // containerGal.addEventListener('click', openModal)
  
  // function openModal (event) {
  //     event.preventDefault();
  
  //     if (!event.target.classList.contains('gallery__image')) {
  //         return
  //     }
      
  //     function closeModal(e) {
  //         if (e.key === 'Escape') {
  //           instance.close();
  //           console.log(e.key);
  //         }
  // }}