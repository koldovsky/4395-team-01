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

// 2. Коли partial підвантажено — робимо scroll
document.body.addEventListener("htmx:afterOnLoad", (e) => {
  if (!sessionStorage.getItem("scrollToEvents")) return;

  // Чекаємо підвантаження latest-events partial
  if (e.detail.pathInfo?.requestPath.includes("events.latest-events.partial.html")) {
    const section = document.querySelector(".latest-events");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      sessionStorage.removeItem("scrollToEvents");
    }
  }
});
