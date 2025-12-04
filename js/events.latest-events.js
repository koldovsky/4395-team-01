import { renaissanceTours } from "./variables.js";

const sectionContainer = document.querySelector(".latest-events");

const createEventCards = (events = []) => {
  if (!sectionContainer || !Array.isArray(events)) return;

  const cardsMarkup = events
    .map(
      ({ id, title, date, time, description, themeImage }) => `
        <article id="${id}"class="latest-events__card" aria-labelledby="event-${id}-title">
          <img
            class="avatar__img"
            src="${themeImage}"
            alt="${title} event preview"
            loading="lazy"
          />
          <div class="card__time">
            <span class="card__time-value">${time}</span>
            <span class="card__date">${date}</span>
          </div>
          <div class="card__body">
            <h3 id="event-${id}-title" class="card__title">${title}</h3>
            <p class="card__desc">${description}</p>
          </div>
        </article>`
    )
    .join("");

  sectionContainer.insertAdjacentHTML("beforeend", cardsMarkup);
};

createEventCards(renaissanceTours);
