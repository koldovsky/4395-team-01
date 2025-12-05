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

  burger.onclick = openMenu;
  closeBtn.onclick = closeMenu;
  overlayLinks.forEach((link) => {
    link.onclick = closeMenu;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeaderNav();
});

document.body.addEventListener("htmx:afterSwap", (event) => {
  const target = event.detail && event.detail.target;
  if (!target) return;

  if (
    target.matches("nav.header-nav") ||
    (target.tagName === "NAV" &&
      target.getAttribute("data-hx-get") === "global.header-nav.partial.html")
  ) {
    initHeaderNav();
  }
});
