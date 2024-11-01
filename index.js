var test = 0;

function isMobile() {return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}

window.onload = function () {

    const slidesForm = document.querySelector('.slides');
    const slides = slidesForm.querySelectorAll('a');

    // 버튼 추가
    for (let i = 0; i < slides.length; i++) {
        const button = document.createElement('button');
        // button.innerText = (i + 1);
        button.addEventListener('click', (e) => {
            slidesForm.scrollTo(i * 361, 0)
        });
        document.querySelector('.buttons').appendChild(button);
    }

    for (let i = 0; i < slides.length; i++) {
        const href = getIdFromUri(slides[i].href);
        if (href != "") slides[i].children[0].src = getThumbnailsFromId(href)[0];
    }

    slidesForm.addEventListener('wheel', (e) => {
        e.preventDefault();
        // slidesForm.scrollLeft += event.deltaY;
        slidesForm.scrollBy(e.deltaY * 10, 0)
    });

    function slideUpdate() {
        $(slides).each((i, e) => $(e).removeClass('active'));
        if (slidesForm.clientWidth <= 380) $(slides[test]).addClass('active');
    }
    slideUpdate();
    window.addEventListener("resize", (e)=> {
        slideUpdate();
    });

    // 버튼 선택
    slidesForm.addEventListener('scroll', (e) => {
        const elements = document.querySelector('.buttons').children;
        Array.prototype.forEach.call(elements, (e) => e.style.backgroundColor = '#00000040');

        for (let i = 0; i <= slides.length + 1; i++) {
            if (slidesForm.scrollLeft > (slides[0].clientWidth + 12) * i + slides[0].clientWidth / 2) continue;
            else { test = i; elements[i].style.backgroundColor = '#000000c0'; break }
        }

        slideUpdate();
    });
    document.querySelector('.buttons').children[0].style.backgroundColor = '#000000c0';

    document.querySelector('.ward').addEventListener('click', (e) => slidesForm.scrollBy(-10000, 0));
    document.querySelector('.backward').addEventListener('click', (e) => slidesForm.scrollBy(10000, 0));

    document.querySelectorAll('.slide').forEach((e) => {
        e.querySelector('div').style.setProperty('--element-height', -e.querySelector('p').clientHeight - 12 + 'px');
    });


    const counters = $(".scroll_on");
    let exposurePercentage = 80;
    const loop = false;

    $(window).on('scroll', function() {
        counters.each(function() {
            const el = $(this);
            const rect = el[0].getBoundingClientRect();
            const scale = rect.width / el[0].offsetWidth;
            const winHeight = window.innerHeight, contentHeight = rect.height / Math.max(scale, 1);
            exposurePercentage = getComputedStyle(el[0]).getPropertyValue('--exposure') || exposurePercentage;

            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100))
                el.addClass('active');
            if ((el.hasClass('loop') || loop) && (rect.bottom <= 0 || rect.top >= window.innerHeight))
                el.removeClass('active');
        });
    }).scroll();
};

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