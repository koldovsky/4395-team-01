document.addEventListener("htmx:afterSwap", (event) => {
    const params = new URLSearchParams(window.location.search);

    // Перевіряємо — чи прийшли з музейного блоку
    if (params.get("scroll") === "latest") {

        // Перевіряємо, що підвантажується саме events.latest-events.partial.html
        if (event.detail.pathInfo.finalRequestPath.includes("events.latest-events.partial.html")) {

            // Затримка, щоб DOM встиг промалюватися
            setTimeout(() => {
                event.target.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 50);
        }
    }
});
