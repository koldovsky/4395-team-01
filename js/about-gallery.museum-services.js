// js/about-gallery.museum-services.js

// 1. Клік по кнопці OUR EVENTS → перехід на events.html
document.addEventListener("DOMContentLoaded", () => {
  const link = document.querySelector(".events-link");

  if (link) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.setItem("scrollToEvents", "1");
      window.location.href = "events.html";
    });
  }
});

// 2. Коли сторінка events.html завантажилась
//    і htmx підтягнув partial — скролимо
document.body.addEventListener("htmx:afterOnLoad", (e) => {
  if (!sessionStorage.getItem("scrollToEvents")) return;

  // Чекаємо саме partial latest-events
  if (e.detail.pathInfo?.requestPath.includes("events.latest-events.partial.html")) {
    const section = document.querySelector("#events-section");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      sessionStorage.removeItem("scrollToEvents");
    }
  }
});