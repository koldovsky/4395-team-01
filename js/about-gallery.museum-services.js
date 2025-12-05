// 1. Після кліку ставимо прапорець
document.addEventListener("click", (e) => {
  const link = e.target.closest(".events-link");
  if (!link) return;

  sessionStorage.setItem("scrollToEvents", "1");
});

// 2. Чекаємо, поки HTMX підвантажить partial
document.body.addEventListener("htmx:afterSwap", (e) => {
  if (!sessionStorage.getItem("scrollToEvents")) return;

  const path = e?.detail?.pathInfo?.requestPath || "";
  if (!path.includes("events.latest-events.partial.html")) return;

  const section = document.querySelector(".latest-events");

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    sessionStorage.removeItem("scrollToEvents");
  }
});