import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulElement = document.querySelector(".gallery");

ulElement.innerHTML = makeGalleryMarkup(galleryItems);
lightboxRun();

// Створюємо розмітку
function makeGalleryMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}

// Функція запуску плагіна
function lightboxRun() {
  var lightbox = new SimpleLightbox(".gallery a", {
    /* options */
    overlay: true,
    overlayOpacity: 0.7,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}

