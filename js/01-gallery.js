import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
              <a class="gallery__link" href="${item.original}">
                <img
                  class="gallery__image"
                  src="${item.preview}"
                  data-source="${item.original}"
                  alt="${item.description}"
                />
              </a>
            </div>`;
  })
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();

  const imageSource = e.target.dataset.source;
  basicLightbox
    .create(`<img src="${imageSource}" width="800" height="600">`)
    .show();
});
