function setVolume() {
    var widgetIframe = document.getElementById("scplayer"),
        fixWidget = SC.Widget(widgetIframe);
    fixWidget.setVolume(10);
}

$("playButton").click(function () {
    setVolume();
    clearInterval(playAlert);
});

playAlert = setInterval(function() {
    setVolume();
 }, 500);