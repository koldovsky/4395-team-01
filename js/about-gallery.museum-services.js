// Чекаємо завантаження partial'ів HTMX
document.addEventListener("htmx:afterOnLoad", (event) => {
    const params = new URLSearchParams(window.location.search);

    // Якщо є параметр scroll=latest — значить прийшли з museum-services
    if (params.get("scroll") === "latest") {

        // Перевіряємо, що завантажився потрібний partial events.latest-events.partial.html
        if (event.detail.pathInfo.finalRequestPath.includes("events.latest-events.partial.html")) {

            // Скрол до підвантаженого partial
            event.target.scrollIntoView({ behavior: "smooth" });
        }
    }
});
