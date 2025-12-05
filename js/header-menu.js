// Ініціалізація бургер-меню
function initHeaderNav() {
  const burger = document.getElementById("headerBurger");
  const overlay = document.getElementById("headerMobileMenu");
  const closeBtn = document.getElementById("headerMobileClose");

  if (!burger || !overlay || !closeBtn) {
    return;
  }

  const overlayLinks = overlay.querySelectorAll(".header-nav__overlay-link");

  const openMenu = () => {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  // Щоб не плодити слухачі — просто перезаписуємо onclick
  burger.onclick = openMenu;
  closeBtn.onclick = closeMenu;
  overlayLinks.forEach((link) => {
    link.onclick = closeMenu;
  });
}

// DOM готовий
document.addEventListener("DOMContentLoaded", () => {
  initHeaderNav();
});

// Після підвантаження через HTMX (nav з partial)
document.body.addEventListener("htmx:afterSwap", (event) => {
  const target = event.detail && event.detail.target;
  if (!target) return;

  // Якщо оновили саме хедерівський nav
  if (
    target.matches("nav.header-nav") ||
    (target.tagName === "NAV" &&
      target.getAttribute("data-hx-get") === "global.header-nav.partial.html")
  ) {
    initHeaderNav();
  }
});
