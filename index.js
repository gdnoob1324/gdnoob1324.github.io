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

$(document).ready(function() {
    // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
    const counters = $(".scroll_on");
    
    // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
    const exposurePercentage = 80; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
    const loop = false; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

    // 윈도우의 스크롤 이벤트를 모니터링합니다.
    $(window).on('scroll', function() {
        // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
        counters.each(function() {
            const el = $(this);

            // 요소의 위치 정보를 가져옵니다.
            const rect = el[0].getBoundingClientRect();

            const scale = rect.width / el[0].offsetWidth;

            const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
            const contentHeight = scale > 1 ? rect.height / scale : rect.height; // 요소의 높이
            
            // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100))
                el.addClass('active');
            // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight))
                $el.removeClass('active');
        });
    }).scroll();
});
