import { galleryItems } from "./variables.js";

const itemsList = document.querySelector(".events-exhibitions__list");

const createItemCards = (items = []) => {
  if (!itemsList || !Array.isArray(items)) return;

  const cardsMarkup = items
    .map(
      ({
        artworkCreator,
        artworkName,
        startDate,
        endDate,
        status,
        imagePath,
      }) => {
        const id = crypto.randomUUID();
        return `
      <article id="${id}{"class="events-exhibition">
      <img
        class="events-exhibition__image"
        src="${imagePath}"
        alt="${artworkName} by ${artworkCreator}"
      />
      <p class="events-exhibition__status">${status}</p>
      <p class="events-exhibition__dates">${startDate} – J${endDate}</p>
      <h3 class="events-exhibition__title">
        ${artworkCreator}
        <span class="events-exhibition__work">"${artworkName}"</span>
      </h3>
      <a href="#" class="read-more">Read More</a>
    </article>`;
      }
    )
    .join("");

  itemsList.insertAdjacentHTML("beforeend", cardsMarkup);
};

createItemCards(galleryItems);
