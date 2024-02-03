
function setVolume() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://w.soundcloud.com/player/api.js';
    document.head.appendChild(script);

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