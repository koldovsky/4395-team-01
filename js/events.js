function init() {
    import('./events.header-hero.js');
    import('./events.exhibitions-list.js');
    import('./events.latest-events.js');
    import('./about-gallery.museum-services.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});