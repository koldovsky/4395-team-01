const title = document.querySelector('.events-header-hero__title');

if (title) {
    const text = title.textContent;
    title.textContent = '';
    title.style.display = 'inline-block'; 

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        title.appendChild(span);

        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, index * 80);
    });
} else {
    console.log("Title not found!");
}