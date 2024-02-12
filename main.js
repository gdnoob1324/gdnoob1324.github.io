function setVolume() {
    var widgetIframe = document.getElementById("scplayer"),
        fixWidget = SC.Widget(widgetIframe);
    fixWidget.setVolume(20);
}

$("*").click(function () {
    var widgetIframe = document.getElementById("scplayer"),
        fixWidget = SC.Widget(widgetIframe);
    fixWidget.setVolume(30);
});