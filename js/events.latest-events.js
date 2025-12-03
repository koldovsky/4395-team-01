import { renaissanceTours } from "./variables.js";

const sectionContainer = document.querySelector(".latest-events");

const createEventCards = (events) => {
  let htmlString = "";
  events.forEach(({ id, title, date, time, description, themeImage }) => {
    htmlString += `
    <article class="latest-events__card" aria-labelledby="event-${id}-title">
    <img
      class="avatar__img"
      src="${themeImage}"
      alt="${title} event preview"
    />
    <div class="card__time">
      <span class="card__time-value">${time}</span>
      <span class="card__date">${date}</span>
    </div>
    <div class="card__body">
      <h3 class="card__title">${title}</h3>
      <p class="card__desc">
        ${description}
      </p>
    </div>
  </article>`;
  });
sectionContainer.insertAdjacentHTML("beforeend", htmlString);
};
createEventCards(renaissanceTours);