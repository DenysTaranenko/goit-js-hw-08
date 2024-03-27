const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
const galleryContainer = document.querySelector(".gallery");

const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const galleryItemsMarkup = images.reduce(
  (acc, image) => acc + createGalleryItemMarkup(image),
  ""
);

galleryContainer.innerHTML = galleryItemsMarkup;
const styles = `
.gallery {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

.gallery-item {
  flex: 0 0 calc(33.333% - 20px);
  margin: 10px;
  list-style-type:none;
}

.gallery-link {
  display: block;
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
}

.gallery-image {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.1);
}
`;

// Створення елементу style та додавання стилів до нього
const styleElement = document.createElement("style");
styleElement.textContent = styles;

// Додавання елементу style до head документу
document.head.appendChild(styleElement);
const galleryImage = document.querySelectorAll(".gallery-image");

// Додавання обробника події на контейнер галереї з використанням делегування
galleryContainer.addEventListener("click", (event) => {
  // Перевірка, чи клікнули на зображення
  if (event.target.nodeName === "IMG") {
    // Отримання посилання на велике зображення з data-атрибуту source
    const largeImageSrc = event.target.dataset.source;
    // Виведення посилання на велике зображення у консоль
    console.log("Посилання на велике зображення:", largeImageSrc);
  }
});
// Функція, яка обробляє клік по елементі галереї
function onGalleryItemClick(event) {
  event.preventDefault();

  // Перевірка, чи клікнули по зображенню в елементі галереї
  if (event.target.nodeName !== "IMG") {
    return;
  }

  // Отримання посилання на велике зображення з атрибута data-source
  const largeImageUrl = event.target.dataset.source;

  // Відображення великого зображення у модальному вікні
  const instance = basicLightbox.create(`
      <img src="${largeImageUrl}" width="800" height="600">
    `);

  instance.show();
}

galleryContainer.addEventListener("click", onGalleryItemClick);
