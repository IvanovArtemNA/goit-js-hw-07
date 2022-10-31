import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryItemsEl.insertAdjacentHTML("beforeend", galleryMarkup);
function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img loading="lazy" class="gallery__image" 
       src="${preview}" 
       alt="${description}" />
    </a>`;
    })
    .join("");
}
const galleryLighBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  //   overlayOpacity: 1,
  //   maxZoom: 2,
});

galleryLighBox.show();
