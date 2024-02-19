// function setVolume() {
//     var widgetIframe = document.getElementById("scplayer"),
//         fixWidget = SC.Widget(widgetIframe);
//     fixWidget.setVolume(20);
// }

// $("*").click(function () {
//     setVolume();
// });

// setTimeout(function () {
//     setVolume();
// }, 1000);

let currentOrientation = function () {
    if (screen.availHeight > screen.availWidth) {
        //	 세로모드일 때 실행할 이벤트
        $("html").addClass('portrait').removeClass('landscape');
    }
    else {
        //	가로모드일 때 실행할 이벤트
        $("html").addClass('landscape').removeClass('portrait');
    }
}

currentOrientation();
window.addEventListener("resize", currentOrientation);