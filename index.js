window.onload = function () {

    const scrollableElement = document.querySelector('.slides');
    const childElements = scrollableElement.children;

    // 버튼 추가
    for (let i = 0; i < childElements.length; i++) {
        const button = document.createElement('button');
        // button.innerText = (i + 1);
        button.addEventListener('click', (event) => {
            scrollableElement.scrollTo(i * 361, 0)
        });
        document.querySelector('.buttons').appendChild(button);
    }

    for (let i = 0; i < childElements.length; i++) {
        const href = getIdFromUri(childElements[i].href);
        if(href != "") childElements[i].children[0].src = getThumbnailsFromId(href)[0];
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

$(document).ready(function() {
    const counters = $(".scroll_on");

    let exposurePercentage = 80;
    const loop = true;

    $(window).on('scroll', function() {
        counters.each(function() {
            const el = $(this);
            const rect = el[0].getBoundingClientRect();
            const scale = rect.width / el[0].offsetWidth;
            const winHeight = window.innerHeight;
            const contentHeight = rect.height / (scale > 1 ? scale : 1)
            console.log(el[0].style.getPropertyValue('--exposure'));
            exposurePercentage = getComputedStyle(el[0]).getPropertyValue('--exposure') || exposurePercentage;

            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100))
                el.addClass('active');
            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight))
                $el.removeClass('active');
        });
    }).scroll();
});

const THUMBNAIL_SIZES = [
    "maxresdefault",
    "sddefault",
    "hqdefault",
    "mqdefault",
    "default",
];

function getIdFromUri(uri) {
    const match = uri.match(/youtu\.?be(\.com)?\/(shorts\/|watch\?v=|embed\/)?([^&?\s]+)/);
    return match ? match[3] : "";
}

function getThumbnailsFromId(id) {
    return THUMBNAIL_SIZES.map((x) => `https://i.ytimg.com/vi/${id}/${x}.jpg`);
}