function setDivAHeight() {
    document.documentElement.style.setProperty('--header-height', document.querySelector('.header').offsetHeight + 'px');
}
window.onload = setDivAHeight;
window.addEventListener('resize', setDivAHeight);

window.onload = function () {
    const scrollableElement = document.querySelector('.slides');
    scrollableElement.addEventListener('wheel', (event) => {
        event.preventDefault();
        // scrollableElement.scrollLeft += event.deltaY;
        scrollableElement.scrollBy(event.deltaY*10, 0)
    });

    const parentElement = document.querySelector('.slides');
    const childElements = parentElement.children;

    for (let i = 0; i < childElements.length; i++) {
        const button = document.createElement('button');
        button.innerText = (i + 1);
        button.addEventListener('click', (event) => {
            scrollableElement.scrollTo(i*361, 0)
        });
        document.querySelector('.buttons').appendChild(button);
    }
};