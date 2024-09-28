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
        scrollableElement.scrollBy(Math.sign(event.deltaY), 0)
    });
};