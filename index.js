function setDivAHeight() {
    document.documentElement.style.setProperty('--header-height', document.querySelector('.header').offsetHeight + 'px');
}
window.onload = setDivAHeight;
window.addEventListener('resize', setDivAHeight);

window.onload = function () {
    const scrollableElement = document.querySelector('.slides');
    const childElements = scrollableElement.children;

    // 버튼 추가
    for (let i = 0; i < childElements.length; i++) {
        const button = document.createElement('button');
        button.innerText = (i + 1);
        button.addEventListener('click', (event) => {
            scrollableElement.scrollTo(i * 361, 0)
        });
        document.querySelector('.buttons').appendChild(button);
    }

    scrollableElement.addEventListener('wheel', (event) => {
        event.preventDefault();
        // scrollableElement.scrollLeft += event.deltaY;
        scrollableElement.scrollBy(event.deltaY * 10, 0)
    });

    // 버튼 선택
    scrollableElement.addEventListener('scroll', (event) => {
        const elements = document.querySelector('.buttons').children;
        Array.prototype.forEach.call(elements, (e) => e.style.backgroundColor = '#00000040');

        for (let i = 0; i <= childElements.length + 1; i++) {
            if (scrollableElement.scrollLeft > (childElements[0].clientWidth + 12) * i + childElements[0].clientWidth / 2) continue;
            else { elements[i].style.backgroundColor = '#000000c0'; break }
        }
    });

    document.querySelector('.buttons').children[0].style.backgroundColor = '#000000c0';
};