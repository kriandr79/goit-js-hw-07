import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Отримаємо посилання на елемент ul
const ulElement = document.querySelector(".gallery");

ulElement.addEventListener("click", onImageClick);

ulElement.innerHTML = makeGalleryMarkup(galleryItems);

// Створюємо розмітку
function makeGalleryMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

// // Обробка кліку
// function onImageClick(event) {
//   event.preventDefault();

//   // Чи кліклули саме по img, а не по UL
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

//   // відкриваємо модальне вікно з картинкою
//   const instance = basicLightbox.create(`
//       <img src="${event.target.dataset.source}" width="800" height="600">
//   `);

//   instance.show();

//   // слухаємо натискання клавіш,
//   window.addEventListener("keydown", onEscapePress);

//   // по ESC закриваємо
//   function onEscapePress(event) {
//     if (event.code === "Escape") {
//       instance.close();
//       window.removeEventListener("keydown", onEscapePress);
//     }
//   }
// }

// Намагався винести фунції закриття по ESC назовні, але тоді ніяк не вдається передати туди instance
// З тієї з причини створення instance неможливо винести в окрему фукнцію.


// Обробка кліку
function onImageClick(event) {
  event.preventDefault();

  // Чи кліклули саме по img, а не по UL
  if (event.target.nodeName !== "IMG") {
    return;
  }

  // відкриваємо модальне вікно з картинкою
  const instance = basicLightbox.create(
    `
      <img src="${event.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscapePress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscapePress);
      },
    }
  );

  instance.show();

  // по ESC закриваємо
  function onEscapePress(event) {
    
    if (event.code !== "Escape") {
      return;
    }
    
    instance.close();
  }
}

