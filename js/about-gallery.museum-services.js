// 1. Клік по OUR EVENTS → перехід на events.html
document.addEventListener("DOMContentLoaded", () => {
  const link = document.querySelector(".events-link");

  if (link) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.setItem("scrollToLatestEvents", "1");
      window.location.href = "events.html";
    });
  }
});

// 2. На сторінці events ловимо завершення підвантаження саме того partial
document.body.addEventListener("htmx:afterSwap", (e) => {
  // Чекаємо поки на сторінці існує контейнер який підтягує latest events
  const container = document.querySelector(
    '[data-hx-get="events.latest-events.partial.html"]'
  );

  if (!container) return; // ми не на потрібній сторінці
  if (!sessionStorage.getItem("scrollToLatestEvents")) return;

  // Переконуємось що саме ЦЕЙ контейнер щойно замінено
  if (e.target === container) {
    const section = document.querySelector("#events-section");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      sessionStorage.removeItem("scrollToLatestEvents");
    }
  }
});