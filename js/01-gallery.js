import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryItemsEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryItemsEl.addEventListener("click", onImageClick);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class ="gallery__container">
        <a class="gallery__link" href="${original}">
          <img loading="lazy" class="gallery__image" 
          src="${preview}"
          data-source="${original}"
          alt="${description}"/>
        </a>
        </div>`;
    })
    .join(``);
}

function onImageClick(e) {
  e.preventDefault(); //Останавливат скачивание (предотвращает действие браузера по умолчанию)
  const instance = basicLightbox.create(
    `<img width="auto" height="auto" src="${e.target.dataset.source}">`
  );
  instance.show();
  galleryItemsEl.addEventListener("keydown", (e) => {
    // событие keydown срабатывает при нажатии клавиши
    if (e.key === "Escape") instance.close();
  });
}
