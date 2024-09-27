function setDivAHeight() {
    document.documentElement.style.setProperty('--header-height', document.querySelector('.header').offsetHeight + 'px');
}
window.onload = setDivAHeight;
window.addEventListener('resize', setDivAHeight);

window.onload = function() {
    const scrollableElement = document.querySelector('.slides');
    scrollableElement.addEventListener('wheel', (event) => {
        event.preventDefault();
        scrollableElement.scrollLeft += event.deltaY;
    });
    
    const scrollable = scrollableElement;
    let isDragging = false;
    let startX;
    
    scrollable.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
    });
    
    scrollable.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - startX;
            scrollable.scrollLeft -= deltaX;
            startX = e.clientX;
        }
    });
    
    scrollable.addEventListener('mouseup', () => {
        isDragging = false;
    });

    scrollable.addEventListener('mouseleave', () => {
        isDragging = false;
    });
};